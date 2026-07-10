# LEXICON.lexon.md — the semantic base

PVM canon terms expressed in the attested Lexon controlled-grammar subset.
Coverage is counted mechanically by `node tools/coverage.mjs` against
`artifact/CENSUS.json` (211 terms frozen). Only keystone-folded entries live
here; candidates travel in `runs/<id>/` until folded.

## Entry format (pinned)

```
## LEXPVM-T-### · <term>
- census: LEXPVM-T-###
- register: <glossary|pt-mapping> · <proven|conjectured|speculative>
- cites: <SOURCES.md slug> § <anchor>

```lex
LEX <Title>.
...a gate-passing Lexon text expressing the term...
```

Notes: <one line: what the expression captures, what it deliberately omits>
```

An entry counts as covered iff: census id exists, the lex block passes the
gate (`tools/lexon_check.mjs`), the cites slug resolves in SOURCES.md, a
register tag is present, and the entry contains no em dash.

---

(no entries folded yet: coverage-debt = 211 at fit)
