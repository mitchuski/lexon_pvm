# 2026-07-11 · OT-3: the gate learns to tell a fortress standing from a fortress fallen

## Verdict first

OT-3 is CLOSED by construction, same day it opened. `tools/relation_check.mjs`
exists, its selftest runs 10/10 green, the three live probes on already-folded
entries all return RELATION PASS, the check is registered as
`objective.canary` in the harness config, and the standing conform advisory
(the only one the instance ever carried) is cleared: CONFORM PASS with zero
advisories. CR-13 filed as PROVEN; CR-12's status moves to "mitigated by
CR-13". This was keystone work (checker + GRAMMAR.ebnf.md + selftest moved
together, per the standing rule), not a loop round: coverage-debt is
untouched at 152.

## What was built

**The claim grammar.** An entry's Notes line already had to name a structural
relation (the lexr1 vacuity rule); that claim is now machine-readable JSON in
one of four types, verified over parsed triples and defined-as bodies, never
name strings:

- `gate` (clause C conditional on binary B; twin strips the condition)
- `ordering` (clause C performs its actions in exactly this order; twin
  reverses it)
- `conjunction` (defined predicate requires ALL named conjuncts; twin drops
  one)
- `absence` (NO transfer clause routes the amount to the role; twin appends
  the forbidden route), and **direction is claimed as an absence**, which is
  the whole point.

**The falsifiability pipeline.** RELATION PASS requires five things: the text
passes the base gate; the claim holds; a mutated twin (the claim's minimal
structural negation) can be built; the twin STILL passes the base gate; and
the claim fails on the twin. That last pair is the teeth: it proves the base
gate alone cannot tell the two texts apart while the relation layer can. The
failure statuses name what went wrong without softening: RELATION ABSENT is
mechanical vacuity, NOT FALSIFIABLE means the gate cannot distinguish the
claim from its negation.

**The canary.** The fixture (`tools/golden/relations/relation_fixture.lex`)
was authored together with its claims file, so the pipeline passes on it by
construction: a candidate failure is now a fact about the candidate, never an
ambiguous gate. This is the exact lesson of the universe-builder's mis-gated
round, landed here before it could bite.

## The demos (the reason to believe it)

- **T-148, the 2D Fortress (the entry that caused all this):** claim
  `absence: Scalar Secret to Key Holder`. Holds on the folded entry (the
  fortress falls; the defender has no reclaim route); the twin with a
  reclaim clause appended still gate-passes, and the tool tells them apart.
  The CR-12 inversion is no longer expressible silently.
- **T-032, Entropy:** claim `absence: escrow-remainder to Adversary` (the
  residual uncertainty survives any observation strategy). PASS, using the
  checker's remainder pseudo-object.
- **T-092, Separation Matrix:** claim `gate: Retain Volume on Entanglement
  Measured`. PASS.
- **The escrow golden caught an alias:** the Arbiter pays the Fee "to
  themselves", and the tool correctly reports a route to the Arbiter
  (RELATION ABSENT for the absence claim). Aliasing through `themselves` is
  handled, in the selftest permanently.

## What changed where

- `tools/relation_check.mjs` NEW; `tools/golden/relations/` NEW (fixture +
  8-claim spec).
- `tools/lexon_check.mjs`: additive only: check() now also returns defs,
  clause names, and defined-as bodies for the relation layer; gate semantics
  byte-identical, selftest still 8/8.
- `harness.config.mjs`: objective.gate now names the mutation probe;
  `objective.canary` registered; propose prompt requires a `relation` field
  per entry (schema enforces it); assay step 2 runs the probe (missing or
  failing claim = MIRAGE) and treats proposer hardConstraintNotes as claims
  to verify (CR-10 operationalized); the retired OT-2 register restriction
  removed; rebundled.
- `artifact/GRAMMAR.ebnf.md`: relation-claim grammar section appended.
- `artifact/LEXICON.lexon.md` header: relation-claim rule for lexr3+ folds;
  prior entries grandfathered, coverage.mjs unchanged.
- `frontier.json`: OT-3 CLOSED; **OT-4 = spell-grammar register under the
  mutation-hardened gate** (the operator's stated main line: lexon your own
  dual agents), with the OT-2 residue and canon remainder as secondary food.

## Honest edges (not softened)

- The twin is the MINIMAL structural negation of the claimed relation. An
  entry with several load-bearing relations gets one claim per relation line;
  the tool checks what is claimed, not everything that matters.
- `ordering` mutates within one sentence's action chain; cross-sentence
  ordering inside a clause is not yet mutable (reported as MUTATION
  INFEASIBLE, never silently passed).
- CR-11 still binds: relations are clause-graph properties under the
  spec-checker regime, not executed semantics.

## Handoff

1. **lexr3 = OT-4** under the hardened gate: spell-grammar lens promoted
   (seat cards, skills, harness structures as promise bundles targeting
   artifact/SPELL_GRAMMAR.md), relation claims mandatory for every entry.
2. CR-6 (identity predicate) remains the standing grammar-expansion lever.
3. Diedrich brief at the door (T6); CTR-LEX-01..09 triage is the operator's.

Next lead: run lexr3, because the gate is now strong enough to be worth
spending coverage against, and the spell-grammar register is where the
operator's result lives.
