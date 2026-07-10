# Claims register

Every load-bearing claim gets a CR-id and a tier (GR-2). Prose elsewhere may
assert nothing that does not resolve to a CR-id here. Keystone-only writes;
other seats return proposed entries.

Tiers: **PROVEN** (executed here, re-runnable) · **DERIVED** (follows from a
PROVEN claim, derivation cited) · **REPORTED** (external, slug-cited via
SOURCES.md) · **OPEN** (must state what would settle it) · **MYTH**
(chronicles only).

| id | claim | tier | evidence | status |
|---|---|---|---|---|
| CR-1 | Baseline coverage-debt is 211 by node tools/census.mjs --freeze + node tools/coverage.mjs; census is deterministic (byte-identical across runs, md5 637a0e6cbad9ca74e519be3a331ae850) | PROVEN | frontier.json baseline.how; runs of 2026-07-10 | accepted |
| CR-2 | The spec-checker accepts all 3 golden fixtures (escrow 8, license 15, statement 21 triples, all promise-typed) and rejects all 5 mutants | PROVEN | node tools/lexon_check.mjs --selftest, 2026-07-10 | accepted |
| CR-3 | The real Lexon compiler cannot run here: macOS-only binary, source unpublished (github.com/lexys/lexon is a placeholder) | REPORTED | SOURCES.md lexon-compiler-status | accepted |
| CR-4 | A Lexon action sentence round-trips losslessly through subject-predicate-object triples within the attested subset | PROVEN | checker roundTrip stage green on 44 golden triples, 2026-07-10 | accepted |
| CR-5 | Coverage-debt is 201: 10 LEXICON seed entries pass the full checker + cites + register + no-em-dash gate | PROVEN | node tools/coverage.mjs, 2026-07-10, keystone seed-fold (frontier best.leverIds seed-fold-1) | accepted |
| CR-6 | The attested subset has no identity predicate between bound nouns (Soulbis = Swordsman inexpressible except as certified text) | PROVEN | LEXPVM-T-073/074 entries, Notes lines; grammar-expansion lever candidate | accepted |
| CR-7 | Run lexr1: 4 levers VALIDATED at full 8/8 gate (20 Gap-drawn held-out expressions authored recipe-only by the assayer, all GATE PASS; 12 regression checks clean), 0 MIRAGE; coverage-debt 201 to 181 at fold | PROVEN | runs/lexr1/*/verdict.json + node tools/coverage.mjs, 2026-07-10 | accepted |
| CR-8 | Coverage-debt can be bought by semantically vacuous entries (content in name strings the checker cannot inspect); the gate does not detect this | DERIVED | lexr1 critic memorization flags (held-out T-027, T-066 analysis); mitigated by the LEXICON vacuity rule, not solved | accepted |
