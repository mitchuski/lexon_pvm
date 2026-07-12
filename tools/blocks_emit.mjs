// blocks_emit.mjs — emit structured language blocks from the folded LEXICON.
//
// A block is the portable public-pole unit specified in
// notes/BONFIRES_STRUCTURED_BLOCKS.md: one census term as
// { lex, triples, promises, relation, provenance }, deterministic all the
// way down. The block is a RENDERING of the harness artifact; nothing in the
// harness depends on blocks existing (the boundary in that note binds).
//
// Sources of truth reused, never reimplemented:
//   - tools/lexon_check.mjs check()        -> triples + promise edges (gate)
//   - tools/relation_check.mjs probeRelation() -> claim verification
//
// An entry's optional `- relation:` line (JSON, LEXICON header rule, lexr3+)
// is verified at emit time: a block only ever carries a claim that is
// RELATION PASS right now. Entries without a relation line (grandfathered,
// pre-OT-3) emit with relation: null and grandfathered: true.
//
// Each block is a κ-addressed HOLON (tools/kappa.mjs, from the harness HOLONS.md):
// it carries its own content-address so a mesh reader verifies it by re-hashing,
// not by trusting the emitter. The block's relation claim gives it a checkable
// constraint; its κ gives it a checkable identity. Verify with tools/blocks_audit.mjs.
//
// Usage:
//   node tools/blocks_emit.mjs                 emit all covered entries to blocks/
//   node tools/blocks_emit.mjs --id LEXPVM-T-032 [--cypher]
//   node tools/blocks_emit.mjs --selftest
//
// Determinism: no timestamps, no randomness; provenance = census id + cites
// slug + the repo commit the reader already holds.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { check } from './lexon_check.mjs'
import { probeRelation } from './relation_check.mjs'
import { kappaOf, verifyKappa } from './kappa.mjs'

const HERE = dirname(fileURLToPath(import.meta.url))
const ROOT = join(HERE, '..')

// ---------- LEXICON entry parser (same block split as coverage.mjs) ----------

export function parseLexicon() {
  const lexicon = readFileSync(join(ROOT, 'artifact', 'LEXICON.lexon.md'), 'utf8')
  const entries = []
  for (const b of lexicon.split(/^## /m).slice(1)) {
    const idm = b.match(/^(LEXPVM-T-\d{3})\s*·\s*([^\n]+)/)
    if (!idm) continue
    const lex = b.match(/```lex\r?\n([\s\S]*?)```/)
    const cites = b.match(/^\s*-\s*cites:\s*([^\n]+)/m)
    const register = b.match(/^\s*-\s*register:\s*([^\n]+)/m)
    const relation = b.match(/^\s*-\s*relation:\s*(\{[^\n]+\})/m)
    const notes = b.match(/^Notes:\s*([\s\S]*?)(?:\n\n|$)/m)
    entries.push({
      census: idm[1],
      term: idm[2].trim(),
      lex: lex ? lex[1].trim() : null,
      cites: cites ? cites[1].trim() : null,
      register: register ? register[1].trim() : null,
      relationLine: relation ? relation[1] : null,
      notes: notes ? notes[1].replace(/\s+/g, ' ').trim() : null,
    })
  }
  return entries
}

// ---------- block emission ----------

export function emitBlock(entry) {
  const problems = []
  if (!entry.lex) return { census: entry.census, problems: ['no lex block'] }
  const r = check(entry.lex, entry.census)
  if (!r.ok) problems.push('base gate fail: ' + (r.errors[0] || 'rejected'))

  let relation = null
  let grandfathered = true
  if (entry.relationLine) {
    grandfathered = false
    let claim
    try { claim = JSON.parse(entry.relationLine) } catch { problems.push('relation line is not valid JSON') }
    if (claim) {
      const probe = probeRelation(entry.lex, claim, entry.census)
      if (probe.status !== 'RELATION PASS') problems.push(`relation claim not RELATION PASS: ${probe.status} (${probe.detail})`)
      else relation = { claim, status: probe.status, mutation: probe.mutation }
    }
  }
  if (problems.length) return { census: entry.census, problems }

  const block = {
    census: entry.census,
    term: entry.term,
    provenance: { cites: entry.cites, register: entry.register },
    lex: entry.lex,
    counts: r.counts,
    triples: r.triples.map(t => ({ s: t.s, verb: t.verb, o: t.o, io: t.io, as: t.as, modal: t.modal, condition: t.condition, clause: t.clause })),
    promises: r.promiseEdges,
    relation,
    grandfathered,
    notes: entry.notes,
    regime: 'spec-checker (SOURCES.md lexon-compiler-status); relations are clause-graph properties, not executed semantics (CR-11)',
    holon: 'block.v1',
  }
  block['κ'] = kappaOf(block)   // the block carries its own content-address (HOLONS.md, Law L5)
  return { block }
}

// ---------- optional Cypher rendering ----------

export function toCypher(block) {
  const q = []
  const esc = s => String(s).replace(/"/g, '\\"')
  q.push(`MERGE (c:LexContract {census: "${block.census}", name: "${esc(block.term)}", cites: "${esc(block.provenance.cites)}"})`)
  const r = check(block.lex, block.census)
  for (const [name, type] of Object.entries(r.defs)) {
    const label = type === 'person' ? 'Person' : type.charAt(0).toUpperCase() + type.slice(1)
    q.push(`MERGE (:${label} {name: "${esc(name)}", contract: "${esc(block.term)}"})`)
  }
  for (const t of block.triples) {
    const rel = `${t.modal === 'may' ? 'MAY_' : ''}${t.verb.toUpperCase()}`
    const props = [`clause: "${esc(t.clause || 'recital')}"`, `object: "${esc(t.o)}"`]
    if (t.condition) props.push(`condition: "${esc(t.condition)}"`)
    const target = t.io && t.io !== 'themselves' ? t.io : t.s
    q.push(`MATCH (a {name: "${esc(t.s)}"}), (b {name: "${esc(target)}"}) CREATE (a)-[:${rel} {${props.join(', ')}}]->(b)`)
  }
  if (block.relation && block.relation.claim.type === 'absence') {
    const c = block.relation.claim
    q.push(`// claim (re-runnable): NOTHING routes ${c.what || 'anything'} to ${c.to}; any row falsifies the block`)
    q.push(`MATCH (x)-[e]->(f {name: "${esc(c.to)}"}) WHERE ${c.what ? `e.object = "${esc(c.what)}"` : 'e.object IS NOT NULL'} RETURN count(e) AS mustBeZero`)
  }
  return q.join('\n')
}

// ---------- selftest ----------

function selftest() {
  const entries = parseLexicon()
  let pass = 0, fail = 0
  const say = (ok, msg) => { console.log(`${ok ? 'PASS' : 'FAIL'}  ${msg}`); ok ? pass++ : fail++ }
  say(entries.length >= 59, `parses the folded LEXICON (${entries.length} entries)`)
  const t032 = entries.find(e => e.census === 'LEXPVM-T-032')
  say(!!t032 && !!t032.lex && !!t032.cites && !!t032.register, 'T-032 entry carries lex, cites, register')
  const b = t032 ? emitBlock(t032) : { problems: ['missing'] }
  say(!!b.block, `T-032 emits a block (${b.block ? b.block.counts.triples + ' triples' : b.problems.join('; ')})`)
  if (b.block && t032.relationLine) {
    say(b.block.relation && b.block.relation.status === 'RELATION PASS', 'T-032 relation line verified RELATION PASS at emit')
    say(b.block.grandfathered === false, 'T-032 not grandfathered')
  }
  const results = entries.map(e => emitBlock(e))
  const bad = results.filter(x => !x.block)
  say(bad.length === 0, `every covered entry emits (${results.length - bad.length}/${results.length}${bad.length ? '; first problem: ' + bad[0].census + ' ' + bad[0].problems[0] : ''})`)
  const withClaims = results.filter(x => x.block && x.block.relation)
  say(withClaims.length >= 3, `verified relation claims travel in blocks (${withClaims.length} blocks carry one)`)
  if (b.block) {
    const cy = toCypher(b.block)
    say(cy.includes('mustBeZero'), 'T-032 cypher rendering carries the re-runnable absence constraint')
    const v = verifyKappa(b.block)
    say(v.ok, `T-032 block is a κ-addressed holon (κ re-derives: ${v.ok ? v.derived.slice(0, 20) + '…' : 'MISMATCH'})`)
  }
  say(results.every(x => !x.block || verifyKappa(x.block).ok), 'every emitted block carries a κ that re-derives from its bytes')
  console.log(`\nblocks selftest: ${pass} pass, ${fail} fail -> ${fail === 0 ? 'SELFTEST PASS' : 'SELFTEST FAIL'}`)
  process.exit(fail === 0 ? 0 : 1)
}

// ---------- CLI ----------

const isMain = process.argv[1] && import.meta.url === new URL('file:///' + process.argv[1].replace(/\\/g, '/')).href
if (isMain) {
  const argv = process.argv.slice(2)
  if (argv.includes('--selftest')) selftest()
  else {
    const idArg = argv.indexOf('--id') !== -1 ? argv[argv.indexOf('--id') + 1] : null
    const entries = parseLexicon().filter(e => !idArg || e.census === idArg)
    if (!entries.length) { console.log('no entries matched'); process.exit(2) }
    const outDir = join(ROOT, 'blocks')
    mkdirSync(outDir, { recursive: true })
    const index = []
    let failures = 0
    for (const e of entries) {
      const r = emitBlock(e)
      if (!r.block) { console.log(`SKIP ${e.census}: ${r.problems.join('; ')}`); failures++; continue }
      writeFileSync(join(outDir, `${e.census}.json`), JSON.stringify(r.block, null, 1) + '\n')
      if (argv.includes('--cypher')) writeFileSync(join(outDir, `${e.census}.cypher`), toCypher(r.block) + '\n')
      index.push({ census: r.block.census, term: r.block.term, triples: r.block.counts.triples, relation: r.block.relation ? r.block.relation.claim.type : null, grandfathered: r.block.grandfathered, 'κ': r.block['κ'] })
      console.log(`EMIT ${e.census}  ${r.block.counts.triples} triples${r.block.relation ? '  claim:' + r.block.relation.claim.type : '  (grandfathered)'}  ${r.block['κ'].slice(0, 14)}…`)
    }
    if (!idArg) {
      // the corpus manifest is itself a κ-addressed holon: one address over all block κs
      const manifest = { holon: 'block-corpus.v1', rule: 'node tools/blocks_emit.mjs; blocks are renderings of artifact/LEXICON.lexon.md, re-derivable, never hand-edited; each block and this manifest carry a κ content-address (HOLONS.md), verified by node tools/blocks_audit.mjs', count: index.length, blocks: index }
      manifest['κ'] = kappaOf(manifest)
      writeFileSync(join(outDir, 'INDEX.json'), JSON.stringify(manifest, null, 1) + '\n')
    }
    console.log(`\n${index.length} block(s) emitted to blocks/${failures ? `, ${failures} skipped` : ''}`)
    process.exit(failures ? 1 : 0)
  }
}
