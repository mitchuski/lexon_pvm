// census.mjs — freeze the PVM canon census for the lexon_pvm coverage-debt metric.
//
// Rule (pinned; changing it is a new baseline, keystone-only):
//   1. Every `### ` heading in agentprivacy-docs/reference/GLOSSARY_MASTER_v4_0.md
//      EXCEPT the explicit EXCLUSIONS list below (document machinery, notation
//      groupings, cross-reference sections — not concepts).
//   2. Plus every row of the "Quick Reference: Concept Mappings" table in
//      agentprivacy-docs/reference/promise_theory_reference_v1_4.md (column 1,
//      Promise Theory side), deduped against 1 by normalized name.
//   3. Numbered addendum prefixes ("22.1 " etc.) are stripped from the term name;
//      the raw heading is kept as the anchor.
//
// Output is deterministic: no timestamps, stable ordering (glossary document
// order, then mapping-table order), LF line endings. Run twice, diff — must be
// byte-identical. The frozen count is the frontier baseline.
//
// Usage:  node tools/census.mjs [--freeze]
//   (no flag: print count + would-be JSON to stdout; --freeze: write artifact/CENSUS.json)

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const ROOT = join(HERE, '..')
const GLOSSARY = 'C:\\Users\\mitch\\agentprivacy-docs\\reference\\GLOSSARY_MASTER_v4_0.md'
const PT_REF = 'C:\\Users\\mitch\\agentprivacy-docs\\reference\\promise_theory_reference_v1_4.md'

const EXCLUSIONS = new Set([
  'Document Suite Versions (Aligned)',
  'Status Indicators Throughout',
  'Promise Theory Notation Summary',
  'Core Agents',
  'Identity & Sovereignty',
  'Trust & Coordination',
  'Topology',
  'State & Value',
  'V5 Symbols (New)',
  'Mathematical Operators',
  'Promise Theory Notation',
  'Compound Spells (Examples)',
  'Core Protocol',
  'Promise Theory',
  'Cryptographic',
  'Information Theory',
  'Standards',
  'Organizations',
  'Primary Documents (Aligned Versions)',
  'Canonical Economic Parameters',
  'Term → Document Mapping',
  'Citation Format',
  '23.9 Sister chronicles',
  '24.12 Sister chronicles + source files',
  '25.12 The V6 Document Suite (current versions)',
])

const norm = (s) => s
  .replace(/\*\*/g, '')
  .replace(/\s+/g, ' ')
  .trim()
  .toLowerCase()

// 1. Glossary terms
const glossary = readFileSync(GLOSSARY, 'utf8')
const terms = []
const seen = new Set()
for (const line of glossary.split(/\r?\n/)) {
  const m = line.match(/^### (.+?)\s*$/)
  if (!m) continue
  const raw = m[1]
  if (EXCLUSIONS.has(raw)) continue
  const term = raw.replace(/^\d+\.\d+\s+/, '')
  const key = norm(term)
  if (seen.has(key)) continue
  seen.add(key)
  terms.push({ term, sourceSlug: 'glossary-master-v4', anchor: `### ${raw}`, registerTag: 'glossary' })
}

// 2. Promise Theory concept-mapping rows
const pt = readFileSync(PT_REF, 'utf8')
const qrStart = pt.indexOf('## Quick Reference: Concept Mappings')
const qrEnd = pt.indexOf('## Part I', qrStart)
const qr = pt.slice(qrStart, qrEnd)
for (const line of qr.split(/\r?\n/)) {
  const m = line.match(/^\|\s*(.+?)\s*\|\s*(.+?)\s*\|/)
  if (!m) continue
  const col1 = m[1].replace(/\*\*/g, '').trim()
  if (col1 === 'Promise Theory' || /^-+$/.test(col1)) continue
  const key = norm(col1)
  if (seen.has(key)) continue
  seen.add(key)
  terms.push({ term: col1, sourceSlug: 'promise-theory-ref-v1-4', anchor: '## Quick Reference: Concept Mappings', registerTag: 'pt-mapping' })
}

const census = {
  rule: 'GLOSSARY_MASTER_v4_0.md ### headings minus pinned EXCLUSIONS (see tools/census.mjs), plus promise_theory_reference_v1_4.md Quick Reference Concept Mappings column 1, deduped by normalized name. Deterministic; no timestamps. Changing this rule is a baseline reset (keystone-only).',
  sources: { glossary: GLOSSARY, ptReference: PT_REF },
  count: terms.length,
  terms: terms.map((t, i) => ({ id: `LEXPVM-T-${String(i + 1).padStart(3, '0')}`, ...t })),
}

const json = JSON.stringify(census, null, 2) + '\n'
if (process.argv.includes('--freeze')) {
  mkdirSync(join(ROOT, 'artifact'), { recursive: true })
  writeFileSync(join(ROOT, 'artifact', 'CENSUS.json'), json)
  console.log(`FROZEN artifact/CENSUS.json — ${census.count} terms`)
} else {
  console.log(`census count: ${census.count} (dry run; use --freeze to write artifact/CENSUS.json)`)
  console.log(census.terms.slice(0, 10).map(t => `${t.id} ${t.term}`).join('\n') + '\n...')
}
