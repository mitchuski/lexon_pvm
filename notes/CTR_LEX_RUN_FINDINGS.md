# CTR-LEX run findings: candidates from the harness campaigns (lexr1-5)

**Status: proposal queue only — for the operator's triage.** Every entry
below is a candidate for register consideration, in CTR-LEX series form. No
entry carries a C-series number and no entry carries a confidence percentage:
the live register (CONJECTURE_REGISTER_V6.md) is canonical and only the
operator writes to it. Cluster fits are suggestions by shape. Every claim is a
conjecture unless its entry says otherwise.

This file extends `out/PVM_QUEUE.md` (CTR-LEX-01..09, from the convergence
run). Those nine were derived from *reading* the five letters. The six below
were derived from *running the loop* — they are findings the campaigns
produced that the convergence survey could not have, each traceable to a
claims-register entry (CR-id) in `claims_register.md` and re-runnable in the
repo. Continue the series numbering from the convergence queue.

---

## CTR-LEX-10: The mutation-probe falsifiability criterion

**Claim.** Conjecture (mechanically demonstrated in-repo, so stronger than the
convergence candidates). A structural relation asserted of a controlled-grammar
text is admissible as *checkable* iff its minimal structural negation is
distinguishable by the same grammar gate: build a mutated twin (strip the
condition, reverse the order, drop a conjunct, add the forbidden route) that
still passes the base gate, and require the claimed relation to fail on the
twin. A relation whose negation the base gate cannot tell apart is carrying its
content in prose the gate cannot inspect, not in structure. This is the operational
form of "a guarantee is structural, not merely asserted."

**Falsification condition.** Exhibit a claimed relation that is semantically
load-bearing (a real privacy guarantee) yet whose minimal structural negation
the tool cannot construct as a gate-passing twin — i.e. the criterion refuses a
guarantee that ought to be admissible. That shows the twin construction
under-covers the space of real guarantees and the criterion is too strong.

**Suggested V6 cluster fit.** The evidence-and-integrity cluster (what counts
as checkable evidence); secondary fit to methodology. Evidence: CR-12, CR-13;
`tools/relation_check.mjs --selftest`.

## CTR-LEX-11: Controlled-grammar parse gates are direction-blind

**Claim.** Conjecture (demonstrated). A base parse-and-typecheck gate over a
controlled-grammar contract validates a claim *and its structural inverse*
under identical clause shapes: the direction of a guarantee (who can never
reach what) is not visible to the parser, because both directions are
well-formed. Therefore direction must be carried as an explicit relation claim
(canonically an absence) layered above the parse gate, or it lives only in
un-checked prose. The finding surfaced when a held-out term (a cryptographic
fortress that *falls* to a quantum adversary) passed with the adversary
draining the protected quantity — canon-correct there, but the gate would have
equally accepted the defender keeping it.

**Falsification condition.** A controlled-grammar checker that distinguishes a
guarantee from its structural inverse using only parse and type information,
with no added relation layer. Its existence falsifies the blindness claim.

**Suggested V6 cluster fit.** The reconstruction-ceiling / separation cluster
(the falsifiability of guarantees). Evidence: CR-12 (the T-148 inversion).

## CTR-LEX-12: Privacy-as-checkable-absence

**Claim.** Conjecture. A privacy guarantee expressed in controlled grammar is
an *impossibility* — a transfer route absent from the clause graph — and its
holding is decidable over the parsed graph (count the routes; expect zero).
The model's separation thesis ("cannot, by design") is not only expressible
this way but is *most naturally* expressible this way: across the covered
census, the guarantees that resisted a gate/ordering/conjunction phrasing all
took an absence phrasing cleanly. The separation bound (T2) itself reduces to
one absence: no clause routes anything back to the Mage.

**Falsification condition.** A privacy guarantee from the PVM canon that cannot
be expressed as an absence over any clause graph (i.e. requires an asserted
positive property the grammar cannot render as a missing route). One clear
case demotes "most naturally" to "sometimes."

**Suggested V6 cluster fit.** The separation-theorem cluster. Evidence: the
constitution corpus (`artifact/SPELLS/t2_separation_bound.lex`, CR-17); the
folded absence entries across `artifact/LEXICON.lexon.md`.

## CTR-LEX-13: Lens convergence in generative search

**Claim.** Conjecture. Independent proposal "lenses" over a shared corpus
converge, with enough rounds, on one derivation method — so naive per-lens
coverage metrics become non-additive (the same ground is counted under
several lenses). The remedy is structural, not procedural: partition the
target into disjoint territories, one per lens, and additivity is restored by
construction. Observed directly: by the fourth campaign, three nominally
distinct lenses had become one claim-derivation charter validated eleven
times; the fifth campaign partitioned the residue and the metrics became
additive with no arbitration. A general lesson for multi-proposer search, not
specific to grammar.

**Falsification condition.** Sustained lens *divergence* — independent lenses
that keep producing genuinely distinct, non-mergeable derivation methods over
many rounds on a shared corpus — falsifies the convergence claim.

**Suggested V6 cluster fit.** Methodology / value-measurement (how coverage is
counted). Evidence: CR-19 (convergence), CR-24 (disjoint territories restore
additivity).

## CTR-LEX-14: Escrow is the attested subset's sole native quantity carrier

**Claim.** Conjecture (structural fact about the attested Lexon subset, so
narrower and firmer than a PVM conjecture). In the attested pre-numeric Lexon
subset, escrow constructs (deposit, gated drain, remainder clause) are the
*only* native carrier of quantity: conservation, ordering, and
impossibility-as-remainder all ride escrow clause structure, and formula-terms
(entropy, reconstruction ceiling, error floor, the mana economics) are
inexpressible except through escrow until a numeric layer is added. This is a
claim about the expressive boundary of a controlled legal grammar, and it is
what motivated the numeric-layer extension.

**Falsification condition.** Express a conserved-quantity relation (a plus b
equals the whole, with a bound on a part) in the attested pre-numeric subset
*without* escrow constructs. One construction falsifies the "sole carrier"
claim.

**Suggested V6 cluster fit.** The grammar-to-graph cluster (A5), expressive-
boundary branch. Evidence: the lexr2 folds; CR (escrow REPORTED-semantics
caveat), `artifact/GRAMMAR.ebnf.md`.

## CTR-LEX-15: No identity predicate between bound nouns

**Claim.** Conjecture (structural fact). The attested Lexon subset has no
predicate asserting identity between two bound nouns: "Soulbis is the
Swordsman" as a checkable equality is not expressible; sameness can be stated
only as certified text (a role certifies a claim *about* identity), never as a
structural bind. Consequence for the PVM: relationship-identity claims (the same
party across many agreements — the bilateral relationship spine of CTR-LEX-08)
cannot be carried by the grammar and must live in the graph layer above it.

**Falsification condition.** An attested Lexon construct that binds two
distinct defined nouns as structurally identical (such that the checker treats
them as one node). Its existence falsifies the claim.

**Suggested V6 cluster fit.** The grammar-to-graph cluster (A5); connects to
CTR-LEX-08 (bilateral relationship memory as an empty slot) — this is *why*
the slot is empty at the grammar layer. Evidence: CR-6.

---

## For the operator

- The convergence-run queue (`out/PVM_QUEUE.md`, CTR-LEX-01..09) remains the
  primary triage list; these six extend it with campaign findings.
- Firmness varies and is labelled: CTR-LEX-14 and CTR-LEX-15 are structural
  facts about the grammar (nearly settled, falsifiable by a single
  construction); CTR-LEX-10..13 are genuine conjectures with in-repo
  demonstrations behind them.
- No cluster assignment, C-number, or confidence value is written here. If any
  of these earn a register entry, the mapping and the number are yours; the
  seat only proposes the shape and the falsifier.
