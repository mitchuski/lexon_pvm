# lexon_pvm

Lexon x Privacy Value Model: a research loop mapping the convergence between
[Lexon](https://www.lexon.org) (Diedrich's controlled-English computational-law
language) and the 0xagentprivacy architecture (Privacy Value Model,
Swordsman/Mage dual agents, VRC/RPP, MyTerms IEEE P7012), then driving the
integration as a [dual-agent harness](https://github.com/mitchuski) instance:
PVM canon terms expressed as gate-passing Lexon controlled grammar.

Load-bearing thesis: every Lexon sentence parses to a subject-predicate-object
AST, a knowledge-graph triple by another name. Contracts compile to subgraphs;
promise primitives (gates, commitments, promises) are typed edges; a corpus of
contracts grows a promise graph. Controlled grammar is the missing authoring
layer between agentic compression and knowledge graph.

## Layout

- `ANALYSIS_PLAN.md` + `lexon_convergence_manifest.json` — the convergence run
  spec: 5 letters, 8 axes (A5 "grammar to graph" is the keystone), 3 phases
- `letters/` — per-letter reading briefs; `out/` — chronicles, synthesis, artefacts
- `artifact/` — the harness target: `CENSUS.json` (frozen 211-term PVM canon
  census), `GRAMMAR.ebnf.md` (attested Lexon subset), `LEXICON.lexon.md` (the
  growing semantic base), `SPELL_GRAMMAR.md`
- `tools/` — `census.mjs` (deterministic census), `lexon_check.mjs`
  (spec-checker: parse, triple round-trip, role binding, promise typing;
  `--selftest` against goldens + mutants), `coverage.mjs` (coverage-debt metric)
- `harness.config.mjs` + `frontier.json` — the dual-agent-harness fit
  (objective: coverage-debt, lower is better; Gap draws held-out census terms
  by hashing each proposal)
- `SOURCES.md` — trace-or-delete registry; vendored third-party corpus is NOT
  committed here, every item carries its fetch path

## Gate regime

The checker is a spec-derived subset validator, not the Lexon compiler (the
compiler is a macOS-only binary with unpublished source; frontier.json labels
the regime). Golden fixtures in `tools/golden/` are Lexon example texts from
lexon.org, credited to Henning Diedrich / Lexon Labs (and Idelberger for the
license example); see `SOURCES.md`.

## Verify

```
node tools/census.mjs             # deterministic census (211)
node tools/lexon_check.mjs --selftest
node tools/coverage.mjs           # coverage-debt vs frontier.json
```
