# 2026-07-10 · Review and reflection: the Lexon x PVM convergence run

## Verdict first

The run is complete, done-means green, and survives its own gate: of the three
Lexon texts the run produced, two passed the spec-checker on first contact and
the third (the HENNING_BRIEF MyTerms sketch) failed on two unattested
constructs and was repaired to GATE PASS at review. Commit e767227 pushed to
github.com/mitchuski/lexon_pvm (operator-authorized). The keystone finding of
the whole arc: the harness that ran this research is itself expressible in the
grammar it studied.

## Review (mechanical, re-runnable)

- Done-means: 9/9 files in out/; all 8 axes verdicted; adversarial review
  pass with 3 non-blocking objections filed, none suppressed; zero em dashes
  across out/ (grep U+2014); no C-series numbers, no confidence percentages.
- Verdict table: 7 structural convergences, 1 terminological (A1,
  performative = false friend: substrate-conditional unilateral felicity vs
  counterparty-conditional bilateral felicity). A5 keystone: structural,
  honestly held at the conjectured register on L04's evidence (operational
  fragment, canonical form unproven).
- Lexon-block verification (this review's addition): all ```lex blocks in
  out/ and notes/ extracted and run through tools/lexon_check.mjs.
  BONFIRES escrow example PASS (8 triples). LEXON_YOUR_OWN_AGENTS harness
  skeleton PASS (7 promise edges). HENNING_BRIEF sketch FAIL then repaired:
  "declare the Breach" (article not attested for declare) and "given that
  the Breach has been declared" (unattested conditional) rewritten to
  "declare Breach" / ", if Breach is declared,". Now 6 triples, 6 typed
  edges, PASS. The brief's prose was updated to record the repair as a live
  demonstration of the controlled grammar earning its keep.
- Count reconciliation: SYNTHESIS carries "8 candidates", PVM_QUEUE holds 9
  CTR-LEX entries. Not drift: synthesis counted the A3 seed pair (gate-web
  exponent + stratum popcount) as one seed; the queue correctly splits them
  (CTR-LEX-01, -02). Nine entries stand.
- Run mechanics: 15 agents total, first attempt lost 5 to a session-limit
  outage; the cached resume replayed P1 and ran P2/P3 clean (15/15, zero
  errors). An outage is not exhaustion; the resume path held. Same lesson the
  skeleton's engine learned this week as its 4th defect (dead seats counted
  as dry rounds); here the workflow runtime's cache made it a non-event.

## Reflection (what the research actually taught)

1. **The divergences are the payload.** The eight axes went in looking like
   eight convergences; the sharpest findings are where they refuse to merge.
   A1: Lexon's felicity needs no counterparty after deploy, the RPP's needs
   exactly one, and the word "performative" hides that. The Promise primitive
   is Lexon's WEAKEST binding and agentprivacy's strongest. Who writes the
   boundary (elected lawmakers' Robotic Laws vs the sovereign's Swordsman
   charter) is a real disagreement worth keeping sharp for the Diedrich
   session, not sanding down.
2. **The keystone held, at the right register.** A5 (grammar to graph) got
   two independent confirmations (Reyes's Appendix A as triple serialisation,
   Idelberger's Prolog verdict that free-form triples fail without controlled
   grammar) and one honest brake (Clack: canonical form unproven). The
   checker's round-trip stage is exactly the canonicalisation question made
   mechanical, so every future LEXICON entry is a data point on the keystone
   conjecture. The loop does not assume the thesis; it accumulates it.
3. **The empty slot is the originality claim.** CTR-LEX-08: bilateral
   relationship memory is absent across Idelberger's entire surveyed
   computable-contract field, with a falsification search space named (Wong
   gen 2.5/3, Stanford CDL). If it survives that search, the VRC is not an
   improvement on the field, it is a missing layer of it.
4. **The reflexive turn is the result.** The operator named it mid-run:
   "lexon your own dual agents." The six-phase loop wrote itself as a
   checker-passing Lexon text within an hour of the idea (notes/
   LEXON_YOUR_OWN_AGENTS.md, 8 definitions, 4 clauses, 7 promise-typed
   edges). Seat contracts, trusts, and ground rules as legal-language
   decision trees is now the main line, with bonfires as the same grammar's
   public pole and the hitchhikers community as the membrane. The
   spell-grammar lens is promoted accordingly.
5. **The grammar disciplines its own advocates.** The one artefact sketch
   that failed the gate was written BY this run, ABOUT this grammar, in
   flight. Two natural-English reflexes (an article, a given-that) were
   enough to break it. That is the strongest small evidence the run produced
   for Lexon's core wager: readable is not the same as controlled, and the
   compiler is the difference.

## Reversals at win-prominence

- L01 was never in hand despite the manifest's claim; fetched and recorded.
- The compiler is unobtainable on this platform (macOS-only binary,
  unpublished source); the spec-checker regime is a fallback wearing an
  honest label, not the plan.
- The HENNING sketch shipped broken in P3 and was caught only by this
  review's mechanical pass; agent self-reports of "verified" covered voice
  constraints, not the gate. Rule for future artefact agents: any ```lex
  block in an artefact must be checker-run before return.

## Handoff

1. Seed-fold (keystone, next): three verified gate-passing texts exist.
   Map them to census terms, write pinned-format LEXICON entries, drop
   coverage-debt below 211, conform, fold.
2. Round lexr1 through the generic engine (rebuild harness.workflow.mjs via
   bundle.mjs first; it is gitignored).
3. The Diedrich session brief is send-ready (sketch now gate-passing); the
   send is the First Person's door (T6).
4. CTR-LEX-01..09 await operator triage against the live register.

Next lead: the seed-fold, because it converts this review's verified texts
into the frontier's first movement.
