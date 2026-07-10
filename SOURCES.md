# Sources

Trace or delete (GR-9): nothing is citable unless it resolves through this
registry to a concrete path or reference.

Evidence classes:

- **E-RUN** — output produced in this repo; path to the run dir or log.
- **E-DOC** — a document in this repo; path.
- **E-EXT** — external source; stable reference (URL, DOI, spec name).

## Letters (the convergence corpus)

| slug | class | resolves to | note |
|---|---|---|---|
| L01-holy-grail-2023 | E-DOC | sources/letters/L01_holy_grail_2023.pdf (+.txt) | Diedrich 2023 whitepaper. Manifest said "in hand (uploaded PDF)" but no PDF was present in the dir; fetched 2026-07-10 from the manifest URL (lexon.org/docs). Substitution recorded per ANALYSIS_PLAN failure rule. |
| L02-legal-smart-contracts-2017 | E-DOC | sources/letters/L02_legal_smart_contracts_2017.pdf (+.txt) | Diedrich 2017 whitepaper, fetched from lexon.org/docs 2026-07-10. |
| L03-reyes-ucc-2021 | E-DOC | sources/letters/L03_reyes_ucc_cryptolaw_2021.pdf (+.txt) | Reyes, "Creating Cryptolaw for the Uniform Commercial Code", 78 Wash. & Lee L. Rev. 1521 (2021). SSRN blocked (Cloudflare challenge, recorded); lexon.org/reyes.html fallback 404. Obtained via Wayback Machine snapshot 2024-03-18 of the W&L Scholarly Commons open-access PDF (scholarlycommons.law.wlu.edu/wlulr/vol78/iss4/7). |
| L04-clack-2021 | E-DOC | sources/letters/L04_clack_2021.pdf (+.txt) | Clack, "Languages for Smart and Computable Contracts", arXiv:2104.03764. Old ftp-style manifest URL returned HTML; refetched from arxiv.org/pdf/2104.03764 2026-07-10. |
| L05-idelberger-merging | E-DOC | sources/letters/L05_idelberger_merging.pdf (+.txt) | Idelberger (EUI), fetched from lexon.org/docs 2026-07-10. |

Text siblings extracted with `pdftotext -layout` (mingw64 poppler) 2026-07-10; PDFs are canonical, .txt are working copies.

## Lexon language systems (grammar, compiler, samples)

| slug | class | resolves to | note |
|---|---|---|---|
| lexon-vocabulary-0-3 | E-DOC | sources/lexon/site/vocabulary.html (+site_text/vocabulary.txt) | THE grammar reference: Lexon 0.3 word list, 91 keywords plus variations, controlled-grammar structure, per-word usage examples. Snapshot of lexon.org/vocabulary.html 2026-07-10. |
| lexon-site-pages | E-DOC | sources/lexon/site/*.html (+site_text/*.txt) | lexon.org snapshots 2026-07-10: about, books, compiler, computational-law, deep-dive, download, examples, fast-track, gates, legacy, papers, status. |
| lexon-example-escrow | E-DOC | sources/lexon/examples/escrow.lex | Canonical escrow example (Payer/Payee/Arbiter), fetched from lexon.org/examples 2026-07-10. Golden fixture. |
| lexon-example-license | E-DOC | sources/lexon/examples/license.lex | Evaluation license example. Golden fixture. |
| lexon-example-statement | E-DOC | sources/lexon/examples/statement.lex | Statement example. Golden fixture. |
| lexon-example-oversimplicated | E-DOC | sources/lexon/examples/oversimplicated.lex | Largest sample (~20.6 KB). Golden fixture / stress corpus. |
| lexon-compiler-status | E-EXT | lexon.org/download.html (snapshot: site/download.html) | Compiler v0.3 alpha 91, grammar 0.2.20 / subset 0.3.8 alpha 79 "English / Reyes". macOS binary only, AGPL-3.0, "no plans for a Windows version"; source NOT public (github.com/lexys/lexon is a placeholder README, vendored at sources/lexon/lexon-compiler). **Regime: not-obtained on this machine → spec-checker regime** (operator-approved 2026-07-10). Online compiler at lexon.org/compiler.html available for manual spot-validation via browser. |
| lexys-github | E-EXT | github.com/lexys (lexon, lexide, lexys.github.io) | Org holds placeholder repos only; no compiler source published as of 2026-07-10. |

## agentprivacy canon (PVM side)

| slug | class | resolves to | note |
|---|---|---|---|
| glossary-master-v4 | E-EXT | C:\Users\mitch\agentprivacy-docs\reference\GLOSSARY_MASTER_v4_0.md | Census source: ~228 `###` term headings. |
| promise-theory-ref-v1-4 | E-EXT | C:\Users\mitch\agentprivacy-docs\reference\promise_theory_reference_v1_4.md | Promise polarity rules + concept mappings; promise-typing spec for the checker. |
| conjecture-register-v6 | E-EXT | C:\Users\mitch\agentprivacy-docs\research\CONJECTURE_REGISTER_V6.md | Live register. READ-ONLY here: agent proposes CTR-LEX candidates only, never C-series IDs. |
| pvm-v6-model | E-EXT | C:\Users\mitch\agentprivacy-docs\models\privacy_value_model_v6.json | The V6 model artifact. |
| papers-index | E-EXT | C:\Users\mitch\agentprivacy-docs\reference\PAPERS_INDEX.md | Pointer into the paper suite (dualprivacy v3.6, swordsman_mage v4.8, vrc_promise_protocol v3.0). |

## Run outputs

| slug | class | resolves to | note |
|---|---|---|---|
| (reserved) | E-RUN | out/, runs/ | Convergence-run chronicles and harness rounds register here as produced. |
