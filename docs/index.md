# The lexon_pvm wiki

A guided path through the whole project, for a human arriving without context.
Read these in order and you will understand what was built, why it matters,
and what it cost — in about fifteen minutes. Each page stands alone if you
prefer to jump.

## The reading path

1. **[The convergence](the-convergence.md)** — What Lexon is, what the Privacy
   Value Model is, and why expressing one in the other is more than a
   translation exercise. The core insight: a controlled-English contract is
   already a knowledge graph.

2. **[The harness](the-harness.md)** — How the work was actually done: not by
   hand, but by a dual-agent research loop that is itself the architecture the
   model describes. The seven seats, the six-phase loop, and why a third agent
   (the Gap) is the whole point.

3. **[The gate](the-gate.md)** — How a claim gets verified. The grammar
   checker, and the mutation probe that makes "privacy is architectural" a
   mechanical fact rather than a slogan. This is the technical heart.

4. **[The results](the-results.md)** — What happened across five runs: the
   ladder from 211 to 22, which parts of the canon crossed into constrained
   language, the two honest kills, and what the residue is.

5. **[Reading the language](reading-the-language.md)** — How to actually read
   a Lexon expression, a relation claim, a structured block, and a
   constitution spell. Use this alongside the [viewer](../viewer/index.html).

## A one-paragraph summary, if you read nothing else

The Privacy Value Model is a theory of privacy as architecture: two software
agents kept structurally separate, so that neither can learn what the other
knows. This project expressed that model's canon — 189 of its 211 defined
terms — in Lexon, a language that reads as plain English but parses
deterministically to knowledge-graph triples. The work was performed by a
research loop built on the same two-agent design, and every expression carries
a machine-checkable claim: the model's promise that a privacy boundary
"cannot be crossed by design" becomes a query that provably returns nothing.
The harness even wrote its own constitution in the language it gates. What
remains uncovered is the mathematical frontier and the deep story, left home
on purpose.

## Key terms (a newcomer's glossary)

- **Census** — the frozen list of 211 canon terms, the coverage target.
- **Coverage-debt** — how many census terms are *not yet* expressed. Started
  at 211, now 22. Lower is better; it is the whole game.
- **The Gap** — the third agent that draws held-out verification terms by
  hashing a proposal, so the proposer cannot have tuned to them. The
  mechanism of trust.
- **Lever** — one proposed way of expressing a family of terms; a reusable
  authoring recipe plus worked examples.
- **Mirage** — a candidate that passes a cheap check but fails the full gate.
  Named, never softened. There were two structural kills.
- **Relation claim** — the machine-readable statement of what a Lexon
  expression structurally guarantees: a gate, an ordering, a conjunction, or
  an absence.
- **Fold** — the keystone step where verified expressions are written into the
  permanent lexicon.
- **Block** — a portable unit (text + triples + claim + provenance) for a
  public knowledge graph.
- **Spell** — a Lexon expression of a trust or a seat: the harness's own
  constitution.

Every number in this wiki resolves to the repository's `frontier.json` or a
run verdict; nothing is asserted from memory.
