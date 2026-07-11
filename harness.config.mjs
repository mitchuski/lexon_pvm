// harness.config.mjs — lexon_pvm instance of the dual-agent harness.
// Objective: drive coverage-debt (211 frozen census terms minus gate-passing
// LEXICON entries) toward zero while the spec-checker gate stays 8/8 on
// Gap-drawn held-out terms. Contract: SEAT_CONTRACT.md. Constitution: TRUSTS.md.
//
// Gate regime: spec-checker (tools/lexon_check.mjs). The real Lexon compiler is
// a macOS-only binary with unpublished source (SOURCES.md lexon-compiler-status);
// operator approved VALIDATED under the spec-checker 2026-07-10.

const COUNT_RULE = 'node tools/coverage.mjs --json  (censusCount - covered entries of artifact/LEXICON.lexon.md that pass tools/lexon_check.mjs + cites + register + no-em-dash checks)'

export default {
  name: 'lexon-pvm',

  objective: {
    metric: 'coverage-debt',
    gate: 'spec-checker full pass (parse, triple round-trip, role binding, promise typing) on every proposed entry PLUS 5 held-out census terms expressed by the assayer from the proposal pattern recipe alone PLUS 3 covered regression entries; gateResult 8/8 (T5: zero collapses); PLUS mutation probe: every proposed entry carries a machine-readable relation claim and node tools/relation_check.mjs returns RELATION PASS on it (claim holds, mutated twin gate-passes yet fails the claim); spec-checker regime',
    hardConstraint: 'every entry cites a SOURCES.md slug (GR-9 trace-or-delete); register tags proven/conjectured/speculative never upgraded; no em dashes in artifact/; no C-series numbers or confidence percentages from any seat (GR-3)',
    canary: 'tools/golden/relations/relation_fixture.lex with tools/golden/relations/claims.json passes the full pipeline BY CONSTRUCTION: the fixture was authored together with its claims, so `node tools/relation_check.mjs --selftest` green (10 checks incl. the attested escrow golden) proves the gate is passable and a candidate failure is a fact about the candidate, not an impossible gate. The base gate\'s own by-construction references are the three attested lexon.org goldens in tools/golden/ (`node tools/lexon_check.mjs --selftest`).',
  },

  door: 'first-person', // T6 — conform.mjs checks the literal

  heldApartRule:
    'You are BLIND to verification witnesses (T2/GR-4). Witnesses are derived ' +
    'by hashing your proposal artifact after you finish; you never see, choose, ' +
    'or influence them. Do not suggest test inputs, seeds, points, or questions. ' +
    'Witnesses here are census terms and regression entries: the Gap hashes your ' +
    'full proposal (pattern recipe plus worked entries) and draws 5 not-yet-covered ' +
    'terms from artifact/CENSUS.json that the assayer must ALSO express using only ' +
    'your pattern recipe, plus 3 already-covered LEXICON entries that must still ' +
    'pass. You cannot know which terms will be drawn, so the only winning strategy ' +
    'is a genuinely general pattern. Do not optimise for particular terms.',

  keystoneOnlyWrites: ['frontier.json', 'claims_register.md', 'manifest.yaml', 'artifact/CENSUS.json'],

  finders: [
    {
      lens: 'grammar-forward',
      hint: 'Start from ATTESTED Lexon patterns (artifact/GRAMMAR.ebnf.md; goldens in tools/golden/; vocabulary at sources/lexon/site_text/vocabulary.txt). Cite the SOURCES.md slug for every pattern used. Propose ONE pattern recipe (a reusable sentence/clause shape within the checker subset) plus worked LEXICON entries that cover a FAMILY of uncovered census terms. Never invent a construct with no attested Lexon precedent: if the checker cannot parse it, it is not a lever, it is a checker-extension proposal for the keystone.',
    },
    {
      lens: 'canon-forward',
      hint: 'Start from an uncovered canon concept cluster in artifact/CENSUS.json (e.g. the promise-theory primitives, VRC/ceremony terms, the trust tiers). Read the canon definition at the census anchor (agentprivacy-docs paths in SOURCES.md), decompose it to subject-predicate-object relations with promise-typed edges, then find the SMALLEST existing-subset Lexon phrasing that carries the relation. Fidelity first: what the expression deliberately omits goes in the entry Notes line. Only flag a new production when no existing pattern can carry the meaning, and say why.',
    },
    {
      lens: 'spell-grammar',
      hint: 'The operator result this lens serves: lexon your own dual agents. Start from the harness structures you booted on (the seat cards in the skeleton root seats/, TRUSTS.md T1-T6, GROUND_RULES.md GR-1..10, the 6-phase loop) and read artifact/SPELL_GRAMMAR.md (the stub states the design intuition: a seat card or skill trigger IS a promise bundle). Target uncovered census terms whose content is AGENT BEHAVIOR: roles, seats, delegation, ceremonies, trust boundaries, keys/doors, agentic mana and VRC terms. Express each as a Lexon SPELL: a contract whose clauses are the promise bundle the role carries (may = offered capability, must = binding duty, condition = trust gate, absence = what the role can never do, claimed as a relation). Entries land in the pinned LEXICON format with relation claims like every other lens. ADDITIONALLY return proposedSpellGrammar (a string): the authoring conventions your entries exhibit, distilled as candidate text for artifact/SPELL_GRAMMAR.md; proposed text only, the keystone folds it (GR-10), never write artifact/ yourself.',
    },
  ],

  prompts: {
    measure: (ctx) =>
      `Seat MEASURE. Re-derive coverage-debt mechanically at ${ctx.repo}: run \`node tools/coverage.mjs --json\` (rule: ${COUNT_RULE}). Also run \`node tools/lexon_check.mjs --selftest\` and report PASS/FAIL, and count grammar productions in artifact/GRAMMAR.ebnf.md action table rows. Compare coverage-debt to frontier.json baseline and best; flag stale if they disagree. Price the two lever families (grammar-forward, canon-forward): rough cost to try, rough ceiling in coverage-debt if fully successful, based on how many census terms cluster per pattern family. Numbers only, no advocacy.`,

    propose: (finder, measure, ctx) =>
      `Seat PROPOSE — soulbae 🧙 (bnot), lens = ${finder.lens}: ${finder.hint}
Frontier context: ${JSON.stringify(measure)}.
Read ${ctx.repo}/notes/KILLED_LEVERS.md first; never re-propose a K-id without new cited evidence. Read ${ctx.repo}/artifact/LEXICON.lexon.md (entry format is pinned there) and ${ctx.repo}/artifact/CENSUS.json (the uncovered terms).
Propose exactly 1 lever through YOUR lens: a patternRecipe (the reusable authoring recipe, stated so precisely that a stranger could express a NEW census term with it) plus entries: at least 5 worked LEXICON entries in the pinned format, each with censusId, term, full lexText (the \`\`\`lex block content), cites (a SOURCES.md slug), registerTag, and notes. Every lexText must pass \`node tools/lexon_check.mjs\` — run it on each before returning (write scratch files under ${ctx.runDir}/propose-scratch/ only). expectedMetric = current coverage-debt minus your entry count. Plan and text only — never touch artifact/ or frontier.json.
RELATION CLAIM (OT-3 mutation probe, binding): each entry MUST include a relation field, a machine-readable claim in the grammar of ${ctx.repo}/tools/relation_check.mjs (type gate | ordering | conjunction | absence; see the tool header). The claim names THE structural relation your notes line says the expression captures; direction is claimed as an absence (what can NEVER route where). Run \`node ${ctx.repo}/tools/relation_check.mjs <entry.lex> --claim '<json>'\` on every entry before returning: RELATION PASS required. A claim the tool reports RELATION ABSENT or NOT FALSIFIABLE means the entry's content rides in name strings, not clause shape: rework it.
VACUITY RULE (LEXICON header, binding): each entry's notes field MUST name at least one STRUCTURAL relation the expression captures (a gate, an ordering, a conjunction, an impossibility) before saying what is omitted; the relation field is that claim made mechanical. Where the term is a formula, the expression must carry the formula's STRUCTURE (which quantities gate which actions, what orders what) in clause shape, not just its name in a string.`,

    holdApart: (proposal, i, ctx) =>
      `Seat HOLD-APART — the Gap ⿻ (xor). Proposal artifact (verbatim):
${JSON.stringify(proposal)}
Procedure:
1. Canonically serialize the proposal above (JSON, recursive sorted keys, no whitespace) and SAVE THOSE EXACT BYTES to ${ctx.runDir}/p${i + 1}-${proposal.leverId}/proposal_canon.json — it must persist, it is the auditor's only route to your seed. SHA-256 that file with a real shell command; show command and digest; sha256sum of the saved file must equal seedHex.
2. Build the uncovered list: run \`node ${ctx.repo}/tools/coverage.mjs --json\`, uncovered = census ids minus coveredIds minus the proposal's own censusIds, in census order. Covered list = coveredIds in census order (if fewer than 3 covered entries exist yet, draw what exists and say so; the regression slots shrink accordingly and gateResult denominator with them).
3. Draw without replacement using digest bytes left to right as unsigned integers: 5 terms from the uncovered list, then 3 from the covered list; for draw k, idx = b_k mod (remaining list size). Show every step.
4. draw = JSON text listing the 5 held-out terms (id, term, census anchor) the assayer must express using ONLY the proposal's patternRecipe, plus the 3 regression entry ids that must still pass.
Write { seedHex, draw, transcript } to ${ctx.runDir}/p${i + 1}-${proposal.leverId}/gap.json (create dirs). Leave proposal_canon.json in place. Never accept proposer-suggested witnesses.`,

    assay: (proposal, gap, i, ctx) =>
      `Seat ASSAY — soulbis ⚔️ (neg), the prover.
Gap seed=${gap.seedHex}. Re-derive it the auditor's way first: sha256sum ${ctx.runDir}/p${i + 1}-${proposal.leverId}/proposal_canon.json must equal seedHex. BLOCKED if the file is missing or the digest does not reproduce. Transcript: ${gap.transcript}
Then, scratch only (GR-10), under ${ctx.runDir}/p${i + 1}-${proposal.leverId}/:
1. Write each proposed entry's lexText to scratch .lex files; run \`node ${ctx.repo}/tools/lexon_check.mjs <file>\` on every one. ANY failure = MIRAGE (name the entry and the failing check).
2. Hard constraint: every entry has cites resolving to a SOURCES.md slug, a registerTag consistent with the canon source (spot-check 2 against their census anchors), no em dash anywhere in the proposal. Treat the proposer's hardConstraintNote as a claim to verify, never as evidence (CR-10): scan the proposal bytes yourself. MUTATION PROBE (OT-3, binding): for every entry run \`node ${ctx.repo}/tools/relation_check.mjs <entry.lex> --claim '<entry.relation json>'\` — RELATION PASS required on all; an entry whose claim is RELATION ABSENT or NOT FALSIFIABLE = MIRAGE (mechanical vacuity: the claimed relation is not in clause shape, or the gate cannot distinguish it from its negation). A missing relation field = MIRAGE.
3. Held-out: for each of the Gap's 5 drawn terms, author an expression yourself using ONLY the proposal's patternRecipe (read the term's canon definition at its census anchor first). Run the checker on each. A term the recipe cannot express = gate fail: the recipe is not general.
4. Regression: extract the Gap's 3 drawn covered entries from ${ctx.repo}/artifact/LEXICON.lexon.md and re-run the checker on each.
5. gateResult = "n/8" (5 held-out + 3 regression; use the Gap's stated denominator if fewer regression entries exist). metric = coverage-debt if this lever folded: current debt minus proposal entries that passed step 1.
VALIDATED only if gateResult is full AND hard constraint holds AND metric < frontier best (read ${ctx.repo}/frontier.json). Write verdict.json to ${ctx.runDir}/p${i + 1}-${proposal.leverId}/ with EXACTLY the schema shape — flat fields, metric a bare number. Include your 5 held-out expressions in evidence (they are fold candidates for the keystone). Never write frontier.json, claims_register.md, or artifact/.`,

    critic: (proposals, verdicts, ctx) =>
      `Seat CRITIC. Proposals: ${JSON.stringify(proposals.map(p => ({ leverId: p.leverId, lens: p.lens, title: p.title, expectedMetric: p.expectedMetric, patternRecipe: p.patternRecipe })))}
Verdicts: ${JSON.stringify(verdicts)}
Classify each closed lever structural / probe-limited / noise. Red-team the proposer's rationale, never the prover's verdict. Cliff-watcher (this domain's mirage): coverage bought by one bespoke phrasing per term instead of a general recipe — compare entry count to how much the patternRecipe actually generalized in the held-out step; flag memorization even on VALIDATED levers. Draft KILLED_LEVERS entries for structural kills. Name exactly ONE next lead.`,

    chronicle: (round, ctx) =>
      `Seat CHRONICLE. Draft ${ctx.runDir}/CHRONICLE_DRAFT.md following ${ctx.root}/templates/chronicle.md: verdict first, reversals at win-prominence, handoff block ending in the critic's nextLead. No em dashes. Round data: ${JSON.stringify({ roundId: round.roundId, measure: round.measure, proposals: round.proposals.map(p => ({ leverId: p.leverId, lens: p.lens, expectedMetric: p.expectedMetric })), verdicts: round.verdicts, critic: round.critic })}. Return the path plus a 5-line verdict summary.`,
  },

  schemas: {
    measure: {
      type: 'object', required: ['metric', 'stale', 'leverCosts'],
      properties: {
        metric: { type: 'number', description: 'coverage-debt from node tools/coverage.mjs --json' },
        stale: { type: 'boolean' },
        selftest: { type: 'string', description: 'PASS or FAIL from lexon_check.mjs --selftest' },
        grammarProductions: { type: 'number' },
        leverCosts: { type: 'array', items: { type: 'object', required: ['lever', 'cost', 'ceiling'], properties: { lever: { type: 'string' }, cost: { type: 'string' }, ceiling: { type: 'string' } } } },
        notes: { type: 'string' },
      },
    },
    proposal: {
      type: 'object', required: ['proposals'],
      properties: {
        proposals: {
          type: 'array', minItems: 1,
          items: {
            type: 'object',
            required: ['leverId', 'title', 'lens', 'rationale', 'expectedMetric', 'hardConstraintNote', 'patternRecipe', 'entries'],
            properties: {
              leverId: { type: 'string', description: 'short kebab id, e.g. role-charter-family' },
              title: { type: 'string' },
              lens: { type: 'string', enum: ['grammar-forward', 'canon-forward', 'spell-grammar'] },
              rationale: { type: 'string' },
              expectedMetric: { type: 'number', description: 'coverage-debt if folded' },
              hardConstraintNote: { type: 'string' },
              patternRecipe: { type: 'string', description: 'the reusable authoring recipe, precise enough for a stranger to express a NEW census term' },
              entries: {
                type: 'array', minItems: 5,
                items: {
                  type: 'object', required: ['censusId', 'term', 'lexText', 'cites', 'registerTag', 'notes', 'relation'],
                  properties: {
                    censusId: { type: 'string' }, term: { type: 'string' },
                    lexText: { type: 'string', description: 'full ```lex block content, checker-passing' },
                    cites: { type: 'string', description: 'SOURCES.md slug' },
                    registerTag: { type: 'string' },
                    notes: { type: 'string', description: 'what the expression deliberately omits' },
                    relation: { type: 'object', description: 'machine-readable relation claim (tools/relation_check.mjs grammar: gate | ordering | conjunction | absence); must be RELATION PASS' },
                  },
                },
              },
              killedLeverCitations: { type: 'array', items: { type: 'string' } },
              proposedSpellGrammar: { type: 'string', description: 'spell-grammar lens only: candidate authoring conventions for artifact/SPELL_GRAMMAR.md, keystone-folded (GR-10)' },
            },
          },
        },
      },
    },
    gap: {
      type: 'object', required: ['seedHex', 'draw', 'transcript'],
      properties: {
        seedHex: { type: 'string' },
        draw: { type: 'string', description: 'JSON text: 5 held-out terms (id, term, anchor) + 3 regression entry ids' },
        transcript: { type: 'string', description: 'serialization + exact hash command + digest + uncovered/covered lists + draw steps, third-party re-derivable' },
      },
    },
    verdict: {
      type: 'object', required: ['leverId', 'status', 'gateResult', 'evidence'],
      properties: {
        leverId: { type: 'string' },
        status: { type: 'string', enum: ['VALIDATED', 'MIRAGE', 'BLOCKED'] },
        metric: { type: 'number', description: 'coverage-debt if folded' },
        gateResult: { type: 'string', description: 'n/8 (5 held-out + 3 regression)' },
        failingCheck: { type: 'string' },
        evidence: { type: 'string', description: 'includes the 5 held-out expressions authored by the assayer (fold candidates)' },
        scratchDir: { type: 'string' },
      },
    },
    critic: {
      type: 'object', required: ['classifications', 'nextLead'],
      properties: {
        classifications: { type: 'array', items: { type: 'object', required: ['leverId', 'class', 'why'], properties: { leverId: { type: 'string' }, class: { type: 'string', enum: ['structural', 'probe-limited', 'noise'] }, why: { type: 'string' } } } },
        nextLead: { type: 'string' },
        killedLeverDrafts: { type: 'array', items: { type: 'string' } },
        memorizationFlags: { type: 'array', items: { type: 'string' } },
      },
    },
  },

  stop: { dryRounds: 2, maxRounds: 5 },

  isValidated: (v) => v.status === 'VALIDATED' && /^(\d+)\/\1$/.test(v.gateResult || ''),
  isStructural: (critic, leverId) =>
    (critic.classifications || []).some(c => c.leverId === leverId && c.class === 'structural'),

  conformChecks: [
    (f) => {
      const errs = []
      if (f.objective?.metric !== 'coverage-debt') errs.push("lexon-pvm frontier objective.metric must be 'coverage-debt'")
      if (!Number.isInteger(f.baseline?.metric) || f.baseline.metric <= 0) errs.push('baseline.metric must be the positive integer census count')
      if (!Number.isInteger(f.best?.metric) || f.best.metric > f.baseline.metric) errs.push('best.metric must be an integer <= baseline (lower is better)')
      if (!/census\.mjs/.test(f.baseline?.how || '')) errs.push('baseline.how must cite tools/census.mjs')
      return errs
    },
  ],
}
