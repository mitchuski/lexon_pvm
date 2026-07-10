// coverage.mjs — mechanically re-derive the coverage-debt metric.
//
//   coverage-debt = CENSUS.count − (entries in artifact/LEXICON.lexon.md that pass)
//
// An entry passes iff:
//   1. it is headed `## LEXPVM-T-### · <term>` with a census id that exists in CENSUS.json
//   2. its ```lex block passes tools/lexon_check.mjs check() (GATE)
//   3. it carries a `cites:` line resolving to a SOURCES.md slug (GR-9, textual presence)
//   4. its body contains no em dash (U+2014) and carries a `register:` tag
//
// Usage: node tools/coverage.mjs [--json]

import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { check } from './lexon_check.mjs'

const HERE = dirname(fileURLToPath(import.meta.url))
const ROOT = join(HERE, '..')

const census = JSON.parse(readFileSync(join(ROOT, 'artifact', 'CENSUS.json'), 'utf8'))
const ids = new Set(census.terms.map(t => t.id))
const lexicon = readFileSync(join(ROOT, 'artifact', 'LEXICON.lexon.md'), 'utf8')
const sources = readFileSync(join(ROOT, 'SOURCES.md'), 'utf8')
const slugs = new Set([...sources.matchAll(/^\|\s*([a-z0-9-]+)\s*\|/gm)].map(m => m[1]))

const covered = []
const failed = []
const blocks = lexicon.split(/^## /m).slice(1)
for (const b of blocks) {
  const idm = b.match(/^(LEXPVM-T-\d{3})/)
  if (!idm) continue
  const id = idm[1]
  const problems = []
  if (!ids.has(id)) problems.push('census id not in CENSUS.json')
  const lex = b.match(/```lex\r?\n([\s\S]*?)```/)
  if (!lex) problems.push('no ```lex block')
  else {
    const r = check(lex[1], id)
    if (!r.ok) problems.push('gate fail: ' + (r.errors[0] || r.roundTripFailures[0]?.errors?.join(';') || 'unknown'))
  }
  const cite = b.match(/^\s*-\s*cites:\s*([a-z0-9-]+)/m)
  if (!cite) problems.push('no cites: line')
  else if (!slugs.has(cite[1])) problems.push(`cites unknown slug "${cite[1]}"`)
  if (!/^\s*-\s*register:\s*\S+/m.test(b)) problems.push('no register: tag')
  if (b.includes('—')) problems.push('em dash present')
  if (problems.length) failed.push({ id, problems })
  else covered.push(id)
}

const debt = census.count - covered.length
const out = { censusCount: census.count, covered: covered.length, coverageDebt: debt, coveredIds: covered, failedEntries: failed }
if (process.argv.includes('--json')) console.log(JSON.stringify(out, null, 2))
else {
  console.log(`coverage-debt = ${debt}  (census ${census.count}, covered ${covered.length}, failed entries ${failed.length})`)
  for (const f of failed) console.log(`  FAIL ${f.id}: ${f.problems.join('; ')}`)
}
