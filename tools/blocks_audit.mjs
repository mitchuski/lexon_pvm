// blocks_audit.mjs — the mesh auditor for the κ-addressed block corpus.
//
// A DETERMINISTIC, agent-free AUDITOR, not a harness (HOLONS.md's call: the
// interoperability claims of a holon are all enumerable, so there is nothing to
// tune to and no reason to spend adversarial rounds). It re-derives every block's
// κ from its own bytes and re-derives the corpus manifest's κ over the block set.
// A κ that does not re-derive is a tampered or stale block — a fact, not a verdict.
//
// This is the same discipline the rest of the repo already runs on: never trust,
// re-derive. lexon_check re-parses, relation_check re-builds the twin, coverage
// re-counts; blocks_audit re-hashes. It shares the ONE κ law (tools/kappa.mjs),
// because content-addressing requires an identical function, not an independent
// copy (that independence is a feature for gates, a bug for addresses).
//
// Usage: node tools/blocks_audit.mjs [--json]

import { readFileSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { verifyKappa } from './kappa.mjs'

const HERE = dirname(fileURLToPath(import.meta.url))
const BLOCKS = join(HERE, '..', 'blocks')

const files = readdirSync(BLOCKS).filter(f => /^LEXPVM-T-\d{3}\.json$/.test(f)).sort()
const bad = []
let ok = 0
for (const f of files) {
  const block = JSON.parse(readFileSync(join(BLOCKS, f), 'utf8'))
  const v = verifyKappa(block)
  if (v.ok) ok++
  else bad.push({ file: f, stored: v.stored, derived: v.derived })
}

// the manifest: verify its own κ, and that it names exactly the block set with matching κs
let manifestReport = { ok: false, why: 'INDEX.json absent' }
try {
  const manifest = JSON.parse(readFileSync(join(BLOCKS, 'INDEX.json'), 'utf8'))
  const mv = verifyKappa(manifest)
  const named = new Set((manifest.blocks || []).map(b => b.census))
  const onDisk = new Set(files.map(f => f.replace('.json', '')))
  const missing = [...onDisk].filter(c => !named.has(c))
  const extra = [...named].filter(c => !onDisk.has(c))
  // every manifest κ matches the on-disk block κ
  const kappaMismatch = (manifest.blocks || []).filter(b => {
    try { return JSON.parse(readFileSync(join(BLOCKS, b.census + '.json'), 'utf8'))['κ'] !== b['κ'] } catch { return true }
  }).map(b => b.census)
  manifestReport = { ok: mv.ok && missing.length === 0 && extra.length === 0 && kappaMismatch.length === 0, kappaSelf: mv.ok, missing, extra, kappaMismatch }
} catch (e) { manifestReport = { ok: false, why: String(e.message || e) } }

const pass = bad.length === 0 && manifestReport.ok
const report = { blocks: files.length, kappaOk: ok, kappaBad: bad, manifest: manifestReport, verdict: pass ? 'MESH AUDIT PASS' : 'MESH AUDIT FAIL' }

if (process.argv.includes('--json')) console.log(JSON.stringify(report, null, 2))
else {
  console.log(`mesh audit: ${ok}/${files.length} block κ re-derive` + (bad.length ? `; ${bad.length} FAIL` : ''))
  for (const b of bad) console.log(`  FAIL ${b.file}\n    stored  ${b.stored}\n    derived ${b.derived}`)
  const m = manifestReport
  console.log(`manifest: κ-self ${m.kappaSelf ? 'ok' : 'FAIL'}` + (m.missing && m.missing.length ? `; missing ${m.missing.join(',')}` : '') + (m.extra && m.extra.length ? `; extra ${m.extra.join(',')}` : '') + (m.kappaMismatch && m.kappaMismatch.length ? `; κ-mismatch ${m.kappaMismatch.join(',')}` : (m.why ? `; ${m.why}` : '')))
  console.log(`\n${report.verdict}`)
}
process.exit(pass ? 0 : 1)
