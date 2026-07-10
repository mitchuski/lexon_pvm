# Adoption note for bonfires.ai: a deterministic write-path for the Bonfire graph

**Proposal in one line.** Adopt Lexon's controlled grammar as a second write-path into the Bonfire graph: probabilistic extraction for conversation, deterministic compilation for agreements. Graph-based grammar for graph-based memory.

## The stack this note addresses

A Bonfire runs Graphiti over Neo4j, extracting entities, relationships, and episodes from conversations and documents, with Weaviate carrying the vectors. Many agents share one graph. Episodes arrive through a write API. Everything in the graph today arrives through one door: an extraction model reads free text and guesses the triples.

That door is the right one for conversation. It is the wrong one for commitments. When an agent or a human agrees to something, decides something, or promises something, the community later needs to know exactly who committed what to whom, on what condition, by when. An extraction pass over prose answers that question probabilistically. A contested commitment answered probabilistically is the consent-theatre paradigm rebuilt inside community memory: the record exists, nobody can rely on it.

## What Lexon is

Lexon (lexon.org, Diedrich) is a controlled natural-language grammar. A Lexon text reads as plain English, parses deterministically, and compiles to executable code (JavaScript, Solidity). The 0.3 grammar ships 91 keywords; every noun is defined by the author inside the text itself, so each document carries its own vocabulary. Three properties matter here:

1. **Every sentence is a subject-predicate-object decomposition.** The compiler's AST is a set of typed binary relations between defined names. A knowledge-graph triple by another name. The 2023 whitepaper's own escrow AST fans one subject into four typed predicates: four triples, zero extraction.
2. **Nouns are neutral markers; meaning travels in the relations.** The type vocabulary (person, amount, data, time, binary, text) is a graph schema in miniature: person compiles to a key pair, data to a hash, time to a timestamp. Two independent legal scholars (Reyes 2021, Idelberger 2020) confirm the pass-through: no intermediary representation, the text is the program is the subgraph.
3. **The obligation primitives are already promise-shaped.** The token layer names them Approval, Commitment, Promise, plus gates: voluntary per-account restrictions with a 24-hook event surface. These are typed, dated, party-addressed edges waiting for a graph to land in.

Diedrich's own framing of deployment: "these words become true by uttering them." The agreement ceremony as a write operation. For a Bonfire, the same act becomes a graph write with zero loss between what was said and what was stored.

## Why the deterministic path earns its keep

Three arguments, each independent of the others.

**Extraction loss goes to zero on the class that matters most.** The Lexon AST is the meaning; emitting it as triples is serialisation, not interpretation. No entity resolution errors, no hallucinated predicates, no dropped conditions on exactly the records a community will later dispute.

**Controlled grammar surfaces what speech omits.** Writing an agreement in controlled grammar forces explicit formalization of background relations humans never utter (Reyes reports this from Diedrich's correspondence as the puzzling triviality of Lexon code: the code states that a filer exists, that the office assigns the date). Probabilistic extraction systematically misses these relations because they never appear in the source text. The deterministic path does not extract them; it requires them.

**Free-form triples without a grammar fail on naming.** Idelberger's comparison found that free-form fact authoring collapses into arbitrary term-naming, and identifies a controlled TERMS section as the missing system for declaring facts, verbs, and rules. Lexon's definitions block is an ontology declaration the author writes without knowing the word ontology. Graphiti gets its node labels from the document itself.

## Worked example: escrow.lex to the graph

The canonical minimal Lexon text, 8 sentences total: 5 definitions, 1 recital, 2 clauses.

```lexon
LEX Escrow.

"Payer" is a person.
"Payee" is a person.
"Arbiter" is a person.
"Amount" is an amount.
"Fee" is an amount.

The Payer pays an Amount into escrow, appoints the Payee,
appoints the Arbiter, and fixes the Fee.

CLAUSE: Pay Out.
The Arbiter may pay from escrow the Fee to themselves,
and afterwards pay the remainder of the escrow to the Payee.

CLAUSE: Pay Back.
The Arbiter may pay from escrow the Fee to themselves,
and afterwards return the remainder of the escrow to the Payer.
```

### Sentence-by-sentence decomposition

**Definitions (5 sentences): node emission.** Each `"X" is a T` sentence declares a typed node. Person nodes bind to key pairs at first use; amount nodes are values fixed later by a named actor.

| Sentence | Node | Type |
|---|---|---|
| "Payer" is a person. | Payer | Person (key pair) |
| "Payee" is a person. | Payee | Person (key pair) |
| "Arbiter" is a person. | Arbiter | Person (key pair) |
| "Amount" is an amount. | Amount | Amount (number) |
| "Fee" is an amount. | Fee | Amount (number) |

**Recital (1 sentence): 4 operational triples.** One subject, four typed predicates. This is the exact decomposition the 2023 whitepaper draws as its Figure 10 AST.

| Triple | Subject | Predicate | Object |
|---|---|---|---|
| 1 | Payer | pays_into_escrow | Amount |
| 2 | Payer | appoints | Payee |
| 3 | Payer | appoints | Arbiter |
| 4 | Payer | fixes | Fee |

**Clause Pay Out (1 sentence): 2 deontic triples plus 1 temporal edge.** `may` marks the single authorized initiator: a permission edge, not a completed act. `afterwards` is ordering, not a bare triple.

| Triple | Subject | Predicate | Object | Aspect |
|---|---|---|---|---|
| 5 | Arbiter | may_pay(Fee, from escrow) | Arbiter | deontic |
| 6 | Arbiter | may_pay(remainder, from escrow) | Payee | deontic |
| t1 | triple 6 | after | triple 5 | temporal |

**Clause Pay Back (1 sentence): same shape, opposite beneficiary.**

| Triple | Subject | Predicate | Object | Aspect |
|---|---|---|---|---|
| 7 | Arbiter | may_pay(Fee, from escrow) | Arbiter | deontic |
| 8 | Arbiter | may_return(remainder, from escrow) | Payer | deontic |
| t2 | triple 8 | after | triple 7 | temporal |

Total: 5 typed nodes, 8 relation triples, 2 temporal orderings, from 8 sentences. Every edge traceable to one source sentence. Extraction loss: 0.

### The Cypher it emits

```cypher
// TERMS block: node emitter
MERGE (c:LexContract {name: "Escrow", source: $episodeId})
MERGE (payer:Person  {role: "Payer",   contract: c.name})
MERGE (payee:Person  {role: "Payee",   contract: c.name})
MERGE (arb:Person    {role: "Arbiter", contract: c.name})
MERGE (amt:Amount    {name: "Amount",  contract: c.name})
MERGE (fee:Amount    {name: "Fee",     contract: c.name})

// Recital: 4 operational edges, one per predicate
CREATE (payer)-[:PAYS     {into: "escrow", aspect: "operational", sentence: 6}]->(amt)
CREATE (payer)-[:APPOINTS {aspect: "operational", sentence: 6}]->(payee)
CREATE (payer)-[:APPOINTS {aspect: "operational", sentence: 6}]->(arb)
CREATE (payer)-[:FIXES    {aspect: "operational", sentence: 6}]->(fee)

// CLAUSE Pay Out: deontic edges, temporal order as property
CREATE (arb)-[:MAY_PAY {object: "Fee", from: "escrow",
        clause: "Pay Out", aspect: "deontic", step: 1}]->(arb)
CREATE (arb)-[:MAY_PAY {object: "remainder", from: "escrow",
        clause: "Pay Out", aspect: "deontic", step: 2}]->(payee)

// CLAUSE Pay Back: mirror
CREATE (arb)-[:MAY_PAY    {object: "Fee", from: "escrow",
        clause: "Pay Back", aspect: "deontic", step: 1}]->(arb)
CREATE (arb)-[:MAY_RETURN {object: "remainder", from: "escrow",
        clause: "Pay Back", aspect: "deontic", step: 2}]->(payer)
```

Each edge carries its aspect (deontic, operational, temporal), its source clause, and its sentence index. The graph is an audit trail of the text; the text is a rendering of the graph.

## The promise-graph overlay

Lexon's token layer defines a graded obligation ladder, weakest to strongest binding: Approval (spend allowance), Promise (uncovered, amount-specific, non-expiring, forgivable only by the receiver), Commitment (tokens blocked for a named receiver, can time out, releasable by the receiver). Each is party-addressed, dated, and state-bearing. As graph edges:

```cypher
CREATE (a:Person)-[:COMMITMENT {amount: 100, madeAt: $t,
        timeout: $t + 2592000, state: "open"}]->(b:Person)
CREATE (a)-[:PROMISE {amount: 55, madeAt: $t, state: "open"}]->(b)
```

The queries the community gains, verbatim from the primitives:

```cypher
// who committed what to whom
MATCH (a)-[k:COMMITMENT {state: "open"}]->(b)
RETURN a.role, k.amount, b.role, k.timeout

// what timed out
MATCH (a)-[k:COMMITMENT]->(b)
WHERE k.timeout < timestamp() AND k.state = "open"
RETURN a.role, b.role, k.amount

// what was forgiven, and by whom (forgive is the receiver's verb)
MATCH (a)-[p:PROMISE {state: "forgiven"}]->(b)
RETURN b.role AS forgiver, a.role AS released, p.amount
```

This overlay is the layer the computable-contract literature has not shipped: Clack (UCL, 2021) records that action-oriented contract languages demonstrate operational edges but not the deontic layer, obligations over actions. Promise-typed edges over Lexon's operational triples supply exactly that layer, as an overlay, with zero grammar changes. Conjecture, marked as conjecture: the overlay needs no fork of Lexon because Promise and Commitment already constitute a partial deontic vocabulary inside the language.

## Integration: 3 touch points

1. **A `lexon` episode type on the write API.** An episode whose body is a Lexon text bypasses extraction and routes through the compiler's AST emitter. Everything else about the episode (provenance, timestamps, community scoping) stays as is. The 0.2.12 compiler already exists; a triples emitter is a further compile target beside JavaScript and Solidity, not a new parser.
2. **Definitions as labels, enumerations as taxonomies.** The TERMS block emits node labels; Lexon 0.3's means-one-of construction (exhibited in Reyes's U.C.C. statement by a 15-value collateral category list) emits closed controlled vocabularies. Graphiti's probabilistic extractor can then resolve conversational mentions against deterministically minted nodes: the two write-paths meet in the middle, prose pointing at exact anchors.
3. **A canonicalisation pass before deduplication.** Lexon permits differently worded sentences with identical meaning by design. Two texts that mean the same thing may emit different subgraphs, so the emitter needs a normal form before any same-agreement merge. This is a known open problem (Clack's canonical-form criterion), not a solved one: budget for it.

## What the deterministic path does not do

Honest boundaries, so the proposal survives contact.

- **It does not replace extraction.** Conversation stays probabilistic. The deterministic door is for the 3 record classes named at the top: agreements, decisions, commitments. Machine-readable terms for the moments that need them.
- **Order-bearing clauses are not bare triples.** `afterwards` and `therefore` sequences need temporal edges; the pure-triple reading covers only the declarative fraction of a text.
- **Every surveyed system, Lexon included, is contract-scoped.** Memory is per-document. A relationship spine across documents (the same two parties, many agreements, one queryable history) is this note's extension, not any published system's claim. The Bonfire graph is, notably, the natural place to build that spine: the account node persists across contract subgraphs even though no contract knows it.
- **Roles are not identities.** A Lexon person binds a name to a key at first use, per instance. Personhood, key rotation, and cross-instance identity are the graph's job, not the grammar's.

## The position

The contractual privacy paradigm holds that terms should execute as written, not be assented to as fiction. A community's memory has the same requirement one level down: what the community agreed should be stored as uttered, not as extracted. Lexon texts are simultaneously readable prose, executable code, and lossless subgraph. One authoring act, three renderings, and the graph rendering costs an emitter, not a research program. Graph-based grammar for graph-based memory: the agreement ceremony becomes the write ceremony.

---

*Sources: Diedrich, The Holy Grail of Computational Law (2023, lexon.org, CC BY-SA); Diedrich, Legal Smart Contracts whitepaper (2017); Reyes, Creating Cryptolaw for the U.C.C., 78 Wash. & Lee L. Rev. 1521 (2021); Clack, Languages for Smart and Computable Contracts (2021); Idelberger, Merging traditional contracts and e-contracts (2020); escrow.lex and the Lexon 0.3 vocabulary from lexon.org.*
