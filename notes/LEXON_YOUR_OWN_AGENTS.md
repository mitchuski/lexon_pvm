# Lexon your own dual agents

Operator intent, 2026-07-10 (privacymage, verbatim gist): the result this
workshop is for is a harness where you can lexon your own dual agents: a legal
language decision tree. This note pins the overlap that gets there.

## The claim

A dual-agent harness instance is already a bundle of roles, permissions,
conditions, and obligations: seats that may act, gates they may not cross,
conditions under which verdicts bind. That is exactly what Lexon's controlled
grammar expresses: bound nouns (roles), may-clauses (voluntary promises),
if-conditions (decision tree branches), defined-as predicates (named tests).
So the harness config IS a Lexon text waiting to be written:

```lex
LEX Dual Agent Harness.

"First Person" is a person.
"Soulbae" is a person.
"Soulbis" is a person.
"Gap" is a person.
"Proposal" is a text.
"Seed Held Apart" is a binary.
"Validated" is a binary.
"Folded" is a binary.

The First Person appoints the Soulbae, appoints the Soulbis, and appoints the Gap.

CLAUSE: Propose.
The Soulbae may register a Proposal.

CLAUSE: Hold Apart.
The Gap may declare Seed Held Apart.

CLAUSE: Assay.
The Soulbis may, if Seed Held Apart is declared, declare Validated.

CLAUSE: Fold.
The First Person may, if Validated is declared, declare Folded.
```

(design register, PROVEN at the subset level: this exact sketch passes
`node tools/lexon_check.mjs` — 8 definitions, 4 clauses, promise-typed edges,
round trip clean. Whether the full seat contract, trusts and ground rules
included, survives expression without semantic loss is the loop's open
question, filed as a CTR-LEX direction below.)

Every clause is a promise-typed edge; every if is a branch of the legal
decision tree; the whole text is at once the seat contract a human reads, the
permission table an agent enforces, and a triple set a graph ingests. That is
the A5 keystone claim applied to ourselves.

## The three-way sync

1. **agentprivacy harness** (dual-agent-harness skeleton, this instance's
   loop): SPELL_GRAMMAR.md grows the authoring conventions; the checker's
   promise typing is the enforcement surface; seats, trusts T1-T6, and
   GR-1..10 get Lexon expressions so a harness can be instantiated by writing
   a contract, not a config. Private agents, First Person sovereign, door
   non-delegable (T6 is a clause the First Person never delegates).
2. **bonfires** (BONFIRES_NOTE.md, out/): the same controlled grammar as the
   deterministic write-path for PUBLIC agents sharing one community graph.
   Agreements, decisions, commitments authored in Lexon land as exact triples;
   the promise-graph overlay answers who committed what to whom. Same grammar,
   opposite privacy pole: bonfires subgraphs are public-legible, harness
   proverb edges stay opaque (the reconstruction ceiling drawn as topology).
3. **hitchhikers community and values** (hitchhikers.earth, the Oasis line):
   the community layer where the two worlds meet people. Hitchhiker agents are
   public-facing (bonfires pole) but each hitchhiker's own pair is private
   (harness pole); the shared Lexon grammar is the membrane: one vocabulary,
   two disclosure regimes, values carried as clauses both sides can read.

## What this changes in the loop

- The `spell-grammar` finder lens (staged for Phase D+) is not a side quest;
  it is the main line. Its target family: the 7 seat cards, T1-T6, GR-1..10,
  and skill/spell triggers as gate-passing Lexon texts in SPELL_GRAMMAR.md.
- CTR-LEX queue gains a candidate direction: harness-as-contract (the seat
  contract expressible as a Lexon text whose promise edges reproduce the
  trust algebra) with falsification = a trust or ground rule that cannot be
  carried by any checker-subset clause without semantic loss.
- The Bonfires probe (HENNING_BRIEF probe iii, Lexon-to-graph compiler
  target) and this note are the same artifact seen from private and public
  sides; build once, emit to both.

Cites: A5 keystone (out/SYNTHESIS.md), BONFIRES_NOTE.md worked example,
artifact/SPELL_GRAMMAR.md projection decisions, hitchhikers canon per the
operator's community line.
