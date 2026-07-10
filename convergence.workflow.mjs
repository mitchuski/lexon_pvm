export const meta = {
  name: 'lexon-pvm-convergence',
  description: 'Lexon x 0xagentprivacy convergence run: 5 letter chronicles, 8-axis synthesis, 3 artefacts',
  phases: [
    { title: 'Letters', detail: 'read + chronicle each of L01..L05' },
    { title: 'Synthesis', detail: '8-axis verdict table + adversarial review' },
    { title: 'Artefacts', detail: 'HENNING_BRIEF, PVM_QUEUE, BONFIRES_NOTE' },
  ],
}

const ROOT = 'C:\\Users\\mitch\\Lexon_pvm'
const OUT = ROOT + '\\out'

const LETTERS = [
  { id: 'L01', title: 'The Holy Grail of Computational Law (Diedrich 2023)', src: ROOT + '\\sources\\letters\\L01_holy_grail_2023.txt', brief: ROOT + '\\letters\\L01_holy_grail_2023.md', axes: ['A1','A2','A3','A4','A8'], out: OUT + '\\L01_convergence.md' },
  { id: 'L02', title: 'Lexon - Legal Smart Contracts (Diedrich 2017)', src: ROOT + '\\sources\\letters\\L02_legal_smart_contracts_2017.txt', brief: ROOT + '\\letters\\L02_legal_smart_contracts_2017.md', axes: ['A6','A7'], out: OUT + '\\L02_convergence.md' },
  { id: 'L03', title: 'Creating Cryptolaw for the U.C.C. (Reyes 2021)', src: ROOT + '\\sources\\letters\\L03_reyes_ucc_cryptolaw_2021.txt', brief: ROOT + '\\letters\\L03_reyes_ucc_cryptolaw.md', axes: ['A5','A7'], out: OUT + '\\L03_convergence.md' },
  { id: 'L04', title: 'Languages for Smart and Computable Contracts (Clack 2021)', src: ROOT + '\\sources\\letters\\L04_clack_2021.txt', brief: ROOT + '\\letters\\L04_clack_contract_languages.md', axes: ['A1','A5'], out: OUT + '\\L04_convergence.md' },
  { id: 'L05', title: 'Merging traditional contracts and e-contracts (Idelberger)', src: ROOT + '\\sources\\letters\\L05_idelberger_merging.txt', brief: ROOT + '\\letters\\L05_idelberger_merging_contracts.md', axes: ['A1','A5'], out: OUT + '\\L05_convergence.md' },
]

const VOICE = `Voice constraints (binding):
- NO em dashes anywhere (no U+2014). Use colons, commas, or restructure.
- Quote sparingly: under 15 words per quote, at most ONE quote from the letter in the whole document, in quotation marks with a section/page locator. Paraphrase by default.
- Exact numbers. If approximate, say approximately and give the basis.
- Mark every conjecture as conjecture. V6 discipline: proven, conjectured, speculative are three different registers; never upgrade.
- Never assign C-series numbers or confidence percentages.
- Plain technical prose (this is a chronicle, not an artefact).`

const EXTRACT_SCHEMA = {
  type: 'object',
  required: ['id', 'claims', 'axes'],
  properties: {
    id: { type: 'string' },
    claims: { type: 'array', maxItems: 5, items: { type: 'string' }, description: 'What the letter claims, 5 sentences max' },
    quote: { type: 'object', properties: { text: { type: 'string', description: 'under 15 words' }, locator: { type: 'string' } } },
    axes: { type: 'array', items: { type: 'object', required: ['axis', 'findings'], properties: {
      axis: { type: 'string' },
      findings: { type: 'array', items: { type: 'string' }, description: 'convergence findings with evidence locators' },
      divergences: { type: 'array', items: { type: 'string' }, description: 'divergences and false friends' },
      mechanisms: { type: 'array', items: { type: 'string' }, description: 'extractable mechanisms that port into agentprivacy V5/V6, concretely' },
      openQuestions: { type: 'array', maxItems: 5, items: { type: 'string' } },
    } } },
    lexonSamples: { type: 'array', items: { type: 'string' }, description: 'any complete Lexon code fragments found in the letter, verbatim' },
    fetchNote: { type: 'string', description: 'source provenance issues to record in the chronicle header, if any' },
  },
}

const FILE_SCHEMA = {
  type: 'object',
  required: ['path', 'summary'],
  properties: { path: { type: 'string' }, summary: { type: 'string' }, axesCovered: { type: 'array', items: { type: 'string' } } },
}

const VERDICT_SCHEMA = {
  type: 'object',
  required: ['path', 'verdicts'],
  properties: {
    path: { type: 'string' },
    verdicts: { type: 'array', minItems: 8, maxItems: 8, items: { type: 'object', required: ['axis', 'verdict', 'oneLine'], properties: {
      axis: { type: 'string' },
      verdict: { type: 'string', enum: ['structural convergence', 'terminological convergence', 'divergence'] },
      oneLine: { type: 'string' },
    } } },
  },
}

const REVIEW_SCHEMA = {
  type: 'object',
  required: ['pass', 'objections'],
  properties: {
    pass: { type: 'boolean' },
    objections: { type: 'array', items: { type: 'object', required: ['axis', 'problem', 'blocking'], properties: {
      axis: { type: 'string' }, problem: { type: 'string' }, blocking: { type: 'boolean' },
    } } },
  },
}

// ---------- P1: Letters ----------
phase('Letters')
log('P1: reading and chronicling 5 letters')

const chronicles = await pipeline(
  LETTERS,
  (l) => agent(
    `You are the READER seat for letter ${l.id} of the Lexon x 0xagentprivacy convergence run.

Read, in this order:
1. ${ROOT}\\ANALYSIS_PLAN.md (the mission and the eight axes A1-A8)
2. ${l.brief} (your letter's brief: what to read for)
3. ${l.src} (the letter itself, full text)

Extract findings for THIS letter keyed by its primary axes: ${l.axes.join(', ')}. For each assigned axis return: convergence findings (with section/page locators from the letter), divergences and false friends, extractable mechanisms (what ports into agentprivacy V5/V6 concretely), and numbered open questions (max 5 per axis). Also capture anything the brief's "also note in passing"/"watch for" sections ask for, filed under the nearest axis. Record at most ONE quote under 15 words with locator. If the letter contains complete Lexon code fragments, copy them verbatim into lexonSamples. Note source provenance issues in fetchNote if the brief's status line does not match how the source was obtained (check ${ROOT}\\SOURCES.md letters table).

Be exact: real section names, real page anchors. Mark conjectures as conjectures. Do not force convergence: a clean divergence is a finding.`,
    { label: `read:${l.id}`, phase: 'Letters', schema: EXTRACT_SCHEMA }
  ),
  (extract, l) => agent(
    `You are the CHRONICLER seat for letter ${l.id} (${l.title}) of the Lexon x 0xagentprivacy convergence run.

Inputs:
1. The reader's structured extract (below).
2. ${ROOT}\\ANALYSIS_PLAN.md: read the "Chronicle template (per letter)" section and the eight-axes section.
3. ${l.brief} for framing.
4. You MAY consult ${l.src} to verify a locator, but the extract is your primary source.

Write the chronicle to ${l.out} using the Write tool, following the template exactly:

# ${l.id}: {Title} x 0xagentprivacy
## What the letter claims (5 sentences maximum, no quotes over 14 words)
## Convergence findings (one subsection per assigned axis: ${l.axes.join(', ')})
## Divergences and false friends
## Extractable mechanisms (what ports into agentprivacy V5/V6, concretely)
## Open questions (numbered, maximum 5)

If the extract has a fetchNote, add a one-line provenance note in the chronicle header area under the title.

${VOICE}

Reader extract:
${'```json'}
{EXTRACT}
${'```'}

Return path + one-paragraph summary + axesCovered.`.replace('{EXTRACT}', JSON.stringify(extract, null, 1)),
    { label: `chronicle:${l.id}`, phase: 'Letters', schema: FILE_SCHEMA }
  )
)

const done = chronicles.filter(Boolean)
log(`P1 complete: ${done.length}/5 chronicles`)

// ---------- P2: Synthesis (barrier: needs all five) ----------
phase('Synthesis')

const synth = await agent(
  `You are the SYNTHESIS seat of the Lexon x 0xagentprivacy convergence run.

Read:
1. ${ROOT}\\ANALYSIS_PLAN.md (mission, the eight axes, the P2 spec)
2. All five chronicles: ${LETTERS.map(l => l.out).join(', ')}

Write ${OUT}\\SYNTHESIS.md with the Write tool. Requirements:
- Open with the axis verdict table: all eight axes A1-A8, one verdict each: "structural convergence" (same mechanism, different vocabulary), "terminological convergence" (same vocabulary, different mechanism; flag as false friend), or "divergence" (genuine disagreement worth preserving). One-line justification per row naming the supporting letters.
- Then one section per axis merging the five chronicles' findings: convergences, divergences, mechanisms, and the surviving open questions.
- Do not force convergence. A clean divergence is a finding. Verdicts must be supported by chronicle content, not by hope.
- Close with a "Carried forward" section: what feeds HENNING_BRIEF, PVM_QUEUE, BONFIRES_NOTE.

${VOICE}

Return path + the eight verdicts.`,
  { label: 'synthesis', phase: 'Synthesis', schema: VERDICT_SCHEMA }
)

const review = await agent(
  `You are the ADVERSARIAL REVIEWER of the Lexon x 0xagentprivacy convergence run. You see ONLY the chronicles and the synthesis, never the source letters. Your job is to try to BREAK the synthesis.

Read ${OUT}\\SYNTHESIS.md, then the five chronicles (${LETTERS.map(l => l.out).join(', ')}).

For each of the eight axis verdicts: is it actually supported by chronicle content? Hunt for: verdicts stated stronger than the chronicle evidence, convergence forced where the chronicles show divergence, false friends mislabelled as structural convergence, claims with no locator trail, quotes over 14 words, em dashes (U+2014), C-series numbers or confidence percentages (forbidden), conjecture presented as proven.

Return pass=true only if no blocking objections. Every objection: which axis, what exactly is wrong, blocking or not.`,
  { label: 'adversarial-review', phase: 'Synthesis', schema: REVIEW_SCHEMA }
)

let reviewResolution = 'clean'
if (review && review.objections && review.objections.some(o => o.blocking)) {
  reviewResolution = 'revised'
  await agent(
    `You are the SYNTHESIS seat again, resolving adversarial review objections on ${OUT}\\SYNTHESIS.md.

Objections:
${'```json'}
${JSON.stringify(review.objections, null, 1)}
${'```'}

For each blocking objection: either fix the synthesis (downgrade the verdict, correct the claim, remove the unsupported statement) or, if the objection is itself unsupported by the chronicles, record why in a short "Review resolutions" section at the end of SYNTHESIS.md. Non-blocking objections: fix if cheap, otherwise note. Preserve the template structure and the eight-row verdict table (verdicts may change value, never disappear). ${VOICE}

Return path + the final eight verdicts.`,
    { label: 'review-resolution', phase: 'Synthesis', schema: VERDICT_SCHEMA }
  )
}
log(`P2 complete: review ${reviewResolution}`)

// ---------- P3: Artefacts ----------
phase('Artefacts')

const PMAGE = `Voice: privacymage register: compressed, declarative, present tense. NO em dashes anywhere (U+2014 forbidden), use colons or commas. Exact or Fibonacci-anchored numbers, never round hyperbole. Preferred terms: agreement ceremony, machine-readable terms, contractual privacy paradigm, consent-theatre paradigm. Quotes under 15 words, max one per source. Conjectures marked as conjectures. The artefact must stand alone without the chronicles.`

const artefacts = await parallel([
  () => agent(
    `Write ${OUT}\\HENNING_BRIEF.md: a technical overlap brief for a working session with Henning Diedrich (Lexon's author).

Read first: ${ROOT}\\ANALYSIS_PLAN.md (P3.1 spec and "Why now" framing rules), ${OUT}\\SYNTHESIS.md, and the five chronicles in ${OUT}. For Lexon mechanics you may consult ${ROOT}\\sources\\lexon\\site_text\\vocabulary.txt and ${ROOT}\\sources\\lexon\\examples\\escrow.lex.

Structure:
1. One-page convergence table: eight axes, verdicts, one-line each.
2. Three concrete collaboration probes with effort estimates:
   (i) Lexon as serialisation grammar for agreement ceremonies and MyTerms agreements: the Swordsman as a defined noun, and a sample three-clause Lexon text (Person, Counterparty, Swordsman as defined nouns) modeled on the escrow example's Payer/Payee style.
   (ii) Gate event hooks (onSending, onCommitting, onReversing, ...) as the enforcement surface for Swordsman boundary promises, mapped hook-by-hook to Promise Theory polarity (+gives / -accepts).
   (iii) A Lexon-to-graph compiler target: AST out as triples (RDF or Cypher), promise primitives as typed edges.
Analysis-led throughout; no relationship-building copy; frame convergences as plural recognition and independent derivation, never as validation or priority claims (fn.7 Bovill lineage is already live; the operator has met Diedrich).

${PMAGE}

Return path + summary.`,
    { label: 'artefact:HENNING_BRIEF', phase: 'Artefacts', schema: FILE_SCHEMA }
  ),
  () => agent(
    `Write ${OUT}\\PVM_QUEUE.md: the Privacy is Value queue from the Lexon convergence run.

Read first: ${ROOT}\\ANALYSIS_PLAN.md (P3.2 spec, the hard rules), ${OUT}\\SYNTHESIS.md, and the five chronicles in ${OUT}.

Content: candidate contributions for register consideration, each written as a CTR-series entry (CTR-LEX-01, CTR-LEX-02, ...) with four fields: claim, evidence pointer (letter and section), falsification condition, suggested V6 claim-cluster fit. At least 5 candidates. Expected seeds (include if the chronicles support them, drop if not): gate-web scaling and stratum density (A3), micro blockchain logs as evidence substrate for VRC integrity (A4), public-subgraph/opaque-edge topology as the reconstruction ceiling drawn as graph (A5), forum-key versus association-set discretion (A6).

HARD RULES: propose candidates only. Assign NO C-series numbers and NO confidence percentages. The live register (agentprivacy-docs\\research\\CONJECTURE_REGISTER_V6.md) is canonical and only the operator writes to it; do not read or modify it.

${PMAGE}

Return path + summary.`,
    { label: 'artefact:PVM_QUEUE', phase: 'Artefacts', schema: FILE_SCHEMA }
  ),
  () => agent(
    `Write ${OUT}\\BONFIRES_NOTE.md: an adoption note for bonfires.ai.

Read first: ${ROOT}\\ANALYSIS_PLAN.md (P3.3 spec including the bonfires stack description), ${OUT}\\SYNTHESIS.md, the L01 and L03 chronicles in ${OUT}, and for the worked example: ${ROOT}\\sources\\lexon\\examples\\escrow.lex plus ${ROOT}\\sources\\lexon\\site_text\\vocabulary.txt.

The proposal: adopt Lexon's controlled grammar as a deterministic write-path alongside probabilistic extraction (their stack: Graphiti over Neo4j, Weaviate vectors, episode-write API). Agents or humans author agreements, decisions, commitments in Lexon; the AST lands in the graph as exact triples with zero extraction loss; promise primitives become a typed promise-graph overlay the community can query (who committed what to whom, what timed out, what was forgiven). Position as graph-based grammar for graph-based memory.

MUST include one worked example: the escrow.lex text (or a small excerpt) decomposed sentence by sentence into subject-predicate-object triples and the Cypher (or RDF) it would emit, with promise primitives as typed edges.

${PMAGE}

Return path + summary.`,
    { label: 'artefact:BONFIRES_NOTE', phase: 'Artefacts', schema: FILE_SCHEMA }
  ),
])

const arteDone = artefacts.filter(Boolean)
log(`P3 complete: ${arteDone.length}/3 artefacts`)

return {
  chronicles: done.map(c => ({ path: c.path, summary: c.summary })),
  synthesis: synth ? { path: synth.path, verdicts: synth.verdicts } : null,
  review: review ? { pass: review.pass, objections: review.objections, resolution: reviewResolution } : null,
  artefacts: arteDone.map(a => ({ path: a.path, summary: a.summary })),
}
