# 2026-07-10 · lexon_pvm born: corpus, convergence P1, gate tooling, harness fit

## Verdict first

The instance exists and conforms. Phase A complete, Phase B half-run (P1 done,
P2/P3 blocked on session limit), Phase C complete: CONFORM PASS, SELFTEST PASS,
coverage-debt 211, bundle built. No harness round run yet.

## What happened

1. **Phase A, corpus.** All 5 letters fetched to sources/letters/ with text
   siblings (pdftotext). Fetch reversals recorded in SOURCES.md: L01's
   "in hand" PDF was absent (fetched from manifest URL), SSRN blocked L03
   (obtained via Wayback snapshot of the W&L open-access PDF), L04's ftp-style
   arXiv URL was dead (refetched from arxiv.org/pdf). Lexon language systems
   vendored to sources/lexon/: 13 lexon.org page snapshots incl. the full 0.3
   vocabulary (91 keywords), 4 .lex samples. Compiler: macOS-only binary,
   source unpublished, so spec-checker regime (operator-approved).
2. **Phase B, convergence run** (convergence.workflow.mjs, run wf_3f05e79c-2b5):
   P1 complete, 10 agents, 5 chronicles in out/ (L01..L05, all
   template-conformant, provenance notes, voice-lint clean per their reports).
   P2 (synthesis + adversarial review) and P3 (3 artefacts) FAILED on the
   session limit (resets 03:50 Europe/London). RESUME:
   `Workflow({scriptPath: 'C:\\Users\\mitch\\Lexon_pvm\\convergence.workflow.mjs', resumeFromRunId: 'wf_3f05e79c-2b5'})`
   — P1 replays from cache, only P2/P3 run live.
3. **Phase C0, gate tooling.** tools/census.mjs (deterministic census, 211
   terms frozen to artifact/CENSUS.json, CR-1), tools/lexon_check.mjs
   (parse, triple round-trip, role binding, promise typing; CR-2, CR-4),
   tools/coverage.mjs (mechanical coverage-debt). Selftest: 3 goldens pass,
   5 mutants rejected.
4. **Phase C1, fit.** harness.config.mjs (coverage-debt ↓, 5+3 Gap draw,
   grammar-forward ⊥ canon-forward, cliff-watcher for per-term memorization),
   frontier.json (211/211), artifact/{CENSUS,GRAMMAR.ebnf,LEXICON,SPELL_GRAMMAR},
   manifest.yaml, claims_register CR-1..4. CONFORM PASS before and after
   bundling; harness.workflow.mjs bundled.

## Reversals at win-prominence

- lexys/lexon looked like the compiler source; it is a placeholder README
  (CR-3). The gate regime claim in frontier.json depends on this.
- oversimplicated.lex is OUT of the golden set: 0.7-era grammar (accounts,
  rates, comparatives) beyond the attested subset. Filed as stress corpus and
  future checker-extension lever material, not silently included.

## Handoff

1. After 03:50 London: resume wf_3f05e79c-2b5 (P2 synthesis + review, P3
   artefacts, then keystone voice-lint + done-means: 9 files in out/).
2. Keystone fold of Phase B seeds into LEXICON (BONFIRES worked example,
   HENNING_BRIEF three-clause sketch) after gate-checking each: first
   coverage-debt drop.
3. Round 1: Workflow harness.workflow.mjs args {repo: C:\Users\mitch\Lexon_pvm,
   root: C:\Users\mitch\dual-agent-harness, runId: lexr1}.
4. Operator door: HARNESS_PATHS.md registration (text at
   notes/HARNESS_PATHS_PROPOSAL.md); any commits/pushes (repo has no git yet;
   operator's call whether to git init).

Next lead: the keystone fold of Phase B seed entries, because it converts the
convergence run's paper findings into the frontier's first real movement.
