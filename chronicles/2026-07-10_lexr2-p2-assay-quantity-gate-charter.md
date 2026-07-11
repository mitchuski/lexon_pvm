# lexr2 · p2-quantity-gate-charter · ASSAY session (soulbis, neg)

**VERDICT: MIRAGE.** gateResult 8/8, metric-if-folded 173 by the stated counting
rule, but the hard constraint fails: an em dash (U+2014) sits in the proposal at
entries[4] (LEXPVM-T-092) in both the `term` field and the `notes` Anchor line.
The proposal's own hardConstraintNote claims "No em dashes appear in any lexText
or notes"; that claim is false for notes. The rule is mechanical, not stylistic:
`tools/coverage.mjs` rejects any entry body containing U+2014 ("em dash
present"), and the pinned LEXICON entry format says an entry with an em dash
does not count as covered. A fold as proposed realizes coverage-debt 174, not
the claimed 173. GR-3: a result that violates the hard constraint is not a
result at any score. Not softened.

## What passed (everything else)

- Seed re-derived first: sha256sum of `runs/lexr2/p2-quantity-gate-charter/proposal_canon.json`
  = `7e600324e3211df9d4947dca990f102b3c67ed07fd52a8367ea6b0aec0ec4e8a`, matches
  the Gap's seedHex; 17652 bytes. Draw arithmetic in gap.json checked against
  the transcript byte by byte.
- Step 1: all 8 proposal entries GATE PASS under `tools/lexon_check.mjs`
  (scratch `assay-scratch/entry-*.lex`).
- Cites: all 8 cite `glossary-master-v4`, resolves in SOURCES.md. OT-2: all 8
  censusIds present in `artifact/OT2_REGISTER.json`.
- Register spot-checks: T-025 canon PROVEN, tagged "conjectured expression of
  proven term" (no upgrade); T-092 canon CONJECTURED, tagged "conjectured
  expression of conjectured term". Consistent.
- Vacuity rule: each entry's notes names a structural relation (gate, ordering,
  conjunction, impossibility) and the lexText carries it in condition or
  defined-as clause shape the checker actually parses, not in name strings.
- Held-out 5/5: assayer-authored expressions from the patternRecipe alone,
  canon anchors read first, all GATE PASS: T-105 Holographic Bound, T-123
  Stratum Weight, T-089 Tetrahedral Sovereignty, T-112 BRAID Parity Effect,
  T-082 Mountain of Entropy (`assay-scratch/heldout-*.lex`). The recipe is
  genuinely general on this register, including the narrative-shaped T-082.
- Regression 3/3: T-010, T-001, T-151 extracted verbatim from
  `artifact/LEXICON.lexon.md`, all still GATE PASS.
- conform.mjs: PASS (pre-existing advisory about absent objective.canary,
  untouched, not this seat's to fix).

## The one failure, precisely

The census term name for LEXPVM-T-092 itself contains the em dash
("Separation Matrix (Sigma) [U+2014] Agent Layer" in CENSUS.json, quoting the
canon heading), so the proposer inherited it by quoting the anchor verbatim.
Inherited or not, the constraint binds the proposal text: the fix is to
re-express term and notes without U+2014 (the other seven entries already do
this for their anchors). This is a one-line repair, but a revised proposal is a
new artifact (GR-4): re-serialize, re-seed, re-draw, re-run. This verdict does
not transfer.

## Handoff

- Open question: whether keystone policy wants a general rule for census terms
  whose canonical names embed U+2014 (T-092 is in OT-2; T-194/T-200 have the
  adjacent C-series-name problem the proposer dodged deliberately).
- Blocked: nothing. All tools ran.
- Single next action: proposer re-issues the proposal with entries[4] term and
  notes em-dash-free; Gap re-seeds; assay re-runs. The 5 held-out fold
  candidates in verdict.json evidence are clean (no em dash, no C-series ids,
  no percentages) and remain valid recipe-transfer evidence for the keystone.

Files: verdict at `runs/lexr2/p2-quantity-gate-charter/verdict.json`, scratch at
`runs/lexr2/p2-quantity-gate-charter/assay-scratch/` (8 entry files, 5 held-out,
3 regression extracts).
