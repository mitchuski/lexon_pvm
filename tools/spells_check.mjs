// spells_check.mjs — verify the constitutional spell corpus (OT-5).
//
// Walks artifact/SPELLS/*.lex with their sibling *.claims.json and requires,
// per spell: base gate PASS (tools/lexon_check.mjs) and EVERY claim RELATION
// PASS (tools/relation_check.mjs: claim holds as a clause-graph property and
// its mutated twin, which still gate-passes, fails it). No em dash anywhere.
//
// The corpus is keystone-authored and honestly labelled (INDEX.json rule):
// TRUSTS T1-T6 and the seven seats are not census terms, so coverage-debt
// does not move; this tool is what makes the corpus re-verifiable anyway.
//
// Usage: node tools/spells_check.mjs [--json]

import { readFileSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { check } from './lexon_check.mjs'
import { probeRelation } from './relation_check.mjs'

const HERE = dirname(fileURLToPath(import.meta.url))
const DIR = join(HERE, '..', 'artifact', 'SPELLS')

let pass = 0, fail = 0
const results = []
for (const f of readdirSync(DIR).filter(f => f.endsWith('.lex')).sort()) {
  const slug = f.replace(/\.lex$/, '')
  const src = readFileSync(join(DIR, f), 'utf8')
  const claims = JSON.parse(readFileSync(join(DIR, slug + '.claims.json'), 'utf8'))
  const problems = []
  if (/—/.test(src)) problems.push('em dash present')
  const base = check(src, f)
  if (!base.ok) problems.push('base gate fail: ' + (base.errors[0] || 'rejected'))
  const claimResults = []
  for (const claim of claims) {
    const r = probeRelation(src, claim, f)
    claimResults.push({ claim, status: r.status })
    if (r.status !== 'RELATION PASS') problems.push(`${r.status} for ${JSON.stringify(claim)}: ${r.detail}`)
  }
  const ok = problems.length === 0
  ok ? pass++ : fail++
  results.push({ slug, ok, triples: base.counts?.triples, promiseEdges: base.counts?.promiseEdges, claims: claimResults, problems })
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${slug.padEnd(24)} ${base.ok ? 'gate ok' : 'GATE FAIL'} · ${claimResults.map(c => c.claim.type + (c.status === 'RELATION PASS' ? '✓' : '✗')).join(' ')}${problems.length ? '\n        ' + problems.join('\n        ') : ''}`)
}
if (process.argv.includes('--json')) console.log(JSON.stringify(results, null, 1))
console.log(`\nspells: ${pass} pass, ${fail} fail -> ${fail === 0 ? 'CORPUS PASS' : 'CORPUS FAIL'}`)
process.exit(fail === 0 ? 0 : 1)
