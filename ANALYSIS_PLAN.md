# Lexon x 0xagentprivacy: Overlap Convergence

**Run plan for autoagent. 5 letters, 8 axes, 3 phases.**
Manifest: `lexon_convergence_manifest.json`. Letter briefs: `letters/L01..L05`.

---

## Mission

Lexon compiles controlled English into executable agreements. 0xagentprivacy compiles bilateral relationships into sovereign value. Both projects claim the same territory from opposite banks: agreement as performative act, obligation as voluntary promise, privacy as structural property rather than policy promise. This run maps the shared riverbed.

The load-bearing thesis of the run: Lexon adds clear grammar structure to agentic compressions. Every Lexon sentence parses to a subject-predicate-object AST, which is a knowledge-graph triple by another name. Contracts therefore compile to subgraphs; promise primitives (gates, commitments, promises) are typed edges; and a corpus of contracts grows a knowledge graph with promise graphs running across it. That structure feeds two downstreams: the Privacy Value Model register pipeline, and graph-native platforms (bonfires.ai) that could adopt Lexon as a deterministic, graph-based grammar.

The output is a matched set: five convergence chronicles (one per letter), one synthesis, three working artefacts.

## Why now

Three anchors make this timely rather than speculative:

1. **The lineage is already live.** Footnote 7 of the 2023 whitepaper credits the Austin performative framing to David Bovill, and the operator has met Diedrich directly. So the run's job is not introduction; it is substance. Every finding should be written to survive a working session with the author: concrete mechanisms, honest divergences, one page each. Frame convergences as plural recognition and independent derivation, never as validation or priority claims.
2. **MyTerms needs an execution layer.** IEEE P7012 defines machine-readable terms. It does not define how a term becomes an enforceable, court-readable obligation. Lexon's entire pitch is "readable by judges." The contractual privacy paradigm gains a compilation target.
3. **Gates are Promise Theory in Solidity.** Lexon's token primitives are literally named Promise and Commitment. Gates are voluntary per-account obligations, which the whitepaper itself calls "the very nature of contracts." The Bergstra/Burgess vocabulary maps almost one-to-one.

## Corpus (the letters)

| ID | Letter | Author | Status |
|----|--------|--------|--------|
| L01 | The Holy Grail of Computational Law (2023) | Diedrich | in hand (uploaded PDF) |
| L02 | Legal Smart Contracts (2017 whitepaper) | Diedrich | fetch |
| L03 | Creating Cryptolaw for the U.C.C. | Reyes, SMU | fetch (SSRN) |
| L04 | Languages for Smart and Computable Contracts | Clack, UCL | fetch (arXiv) |
| L05 | Merging traditional contracts and e-contracts | Idelberger, EUI | fetch |

## The eight axes

**A1. Performative agreement.** Lexon elevates prose to felicitous performative language on an unstoppable substrate: the words become true by uttering them. The agreement ceremony makes the same claim from the identity side: two First Persons utter mutual promises and the VRC binds. Question for the run: is a Lexon contract instantiation an agreement ceremony in the RPP sense, and what does it lack (bilateral proverb, cost signal, personhood grounding)?

**A2. Gates as promises.** A gate is a voluntary, per-account restriction expressing obligation. Promise Theory: only autonomous agents make promises; impositions increase uncertainty. Map gate mechanics (set, keeper, activate, close) to promise polarity (+ gives, - accepts). Map Lexon's Promise and Commitment token primitives to the VRC promise bundle. Flag the divergence: Lexon promises are unilateral and forgivable; VRCs are bilateral and co-signed.

**A3. Topology of trust and promise graphs.** Lexon Figures 5 and 6: smart contracts centralise into star topologies; gates decentralise into peer-to-peer webs. This is the same argument as bilateral VRCs against issuer-centric credentials, and it is also the promise-graph claim: Promise Theory already models cooperation as a directed graph with typed-polarity edges, and Lexon's gate/commitment/promise primitives are exactly such edges, instantiated per account. A corpus of contracts is therefore a promise graph spanning contract boundaries: the same account carries edges from many agreements. Connect to the stratum-weighted network value term (1 + Σ wᵢnᵢ/N₀)^k. Questions: does gate-web topology change the scaling exponent k relative to star topology, and does cross-contract promise density map to stratum (popcount of active promises)?

**A4. Private evidence chains.** The Lexon micro blockchain: hash-chained, signed logs shared only among parties; "the contract state remains perfectly private." This is the reconstruction ceiling R < 1 implemented as bookkeeping. Map log entries (hash, timestamp, role, clause, signature) to ceremony records. Question: can a micro blockchain log serve as the evidence substrate ε(π) for VRC integrity fractions without leaking the relationship graph?

**A5. Grammar to graph (keystone).** Lexon abandons meaning-in-nouns; nouns are neutral markers, meaning travels in the relations between them (late Wittgenstein, meaning as use). The RPP makes the identical structuralist move: the bilateral proverb is meaningless outside the relationship because meaning lives in shared context, not tokens. Now push it one level down: the Lexon compiler's AST decomposes every sentence into binary relations between symbols, subject-predicate-object. That is knowledge-graph grammar, deterministic where LLM entity extraction is probabilistic. So a Lexon text is simultaneously (a) a readable contract, (b) executable code, and (c) a lossless graph serialisation. The keystone claim to test across all letters: controlled grammar is the missing authoring layer between agentic compression and knowledge graph, and promise semantics ride on it for free. Divergence to preserve: Lexon keeps meaning computable inside the four corners of the document; the RPP vests meaning in the bilateral decoder outside any document. Graph consequence: Lexon subgraphs are public-legible; proverb edges are present but opaque, which is exactly the reconstruction ceiling drawn as topology.

**A6. Accountable reversibility.** Lexon's forum-key mechanism: transfers reversible at the discretion of a designated neutral (court, arbiter, notary) within a time window. Map to Accountable Wallet, Watcher Network, and Privacy Pools association sets. Same design instinct: absolute finality is a bug for commerce; accountability requires a designated, bounded discretion, not a backdoor.

**A7. Terms as executable law.** Reyes writes U.C.C. model law in Lexon: the law is the program the office runs. MyTerms defines machine-readable terms the person proffers. Convergence: both replace the consent-theatre paradigm (unread terms, fictional assent) with the contractual privacy paradigm (terms that execute as written). Question for the run: draft the shape of a MyTerms agreement expressed as a Lexon text, Payer/Payee style, with the Swordsman as a named role.

**A8. Anchoring below the agent.** Lexon's argument for token-layer obligations: "what an underlying system does not provide, a language cannot support." Identical to the three-axis separation claim: guarantees must anchor beneath the layer they constrain. The Robotic Laws appendix (plain-text limitations embedded in autonomous machines) is the Swordsman's charter written by someone else's hand. Also flag: Lexon's determinism claim ("unbiased, transparent" symbolic agents) against the probabilistic Mage; Lexon itself positions as complementary to ML.

## Phase plan

**P1: Letters.** For each letter L01..L05, execute its brief in `letters/`. Fetch where status is fetch. Produce `out/{ID}_convergence.md` per the chronicle template below.

**P2: Synthesis.** Merge the five chronicles into `out/SYNTHESIS.md`. For each axis, assign one verdict: *structural convergence* (same mechanism, different vocabulary), *terminological convergence* (same vocabulary, different mechanism; flag as false friend), or *divergence* (genuine disagreement worth preserving). Do not force convergence. A clean divergence is a finding.

**P3: Artefacts.** Three outputs:
1. `out/HENNING_BRIEF.md`: a technical overlap brief for a working session with Diedrich. Structure: one-page convergence table (eight axes, verdicts), then three concrete collaboration probes with effort estimates: (i) Lexon as serialisation grammar for agreement ceremonies and MyTerms agreements, with the Swordsman as a defined noun and a sample three-clause text; (ii) gate event hooks (onSending, onCommitting, onReversing...) as the enforcement surface for Swordsman boundary promises, mapped hook-by-hook to Promise Theory polarity; (iii) a Lexon-to-graph compiler target: AST out as triples (RDF or Cypher), promise primitives as typed edges. Analysis-led throughout; no relationship-building copy.
2. `out/PVM_QUEUE.md`: the Privacy is Value queue. Candidate contributions from this run for register consideration, each written as a CTR-series entry (CTR-LEX-01, CTR-LEX-02, ...) with claim, evidence pointer (letter and section), falsification condition, and suggested V6 claim-cluster fit. Hard rule: the agent proposes candidates only. It assigns no C-series numbers and no confidence percentages; the live register is canonical and only the operator writes to it. Expected seeds: gate-web scaling and stratum density (A3), micro blockchain logs as ε(π) evidence substrate (A4), public-subgraph/opaque-edge topology as the reconstruction ceiling drawn in graph form (A5), forum-key versus association-set discretion (A6).
3. `out/BONFIRES_NOTE.md`: an adoption note for bonfires.ai. Their stack: Graphiti over Neo4j extracting entities, relationships, and episodes from conversations and documents; Weaviate vectors; many agents sharing one Bonfire graph; episode writes via API. The proposal: adopt Lexon's controlled grammar as a deterministic write-path alongside probabilistic extraction. Agents or humans author agreements, decisions, and commitments in Lexon; the AST lands in the graph as exact triples with zero extraction loss; promise primitives become a typed promise-graph overlay the community can query (who committed what to whom, what timed out, what was forgiven). Include one worked example: a small Lexon text and the Cypher or triples it would emit. Position as graph-based grammar for graph-based memory. Privacymage voice, no em dashes.

## Chronicle template (per letter)

```
# {ID}: {Title} x 0xagentprivacy

## What the letter claims (5 sentences maximum, no quotes over 14 words)
## Convergence findings (one subsection per assigned axis)
## Divergences and false friends
## Extractable mechanisms (what ports into agentprivacy V5/V6, concretely)
## Open questions (numbered, maximum 5)
```

## Constraints for the agent

- Privacymage register in artefacts (P3): compressed, declarative, present tense. Chronicles (P1, P2) in plain technical prose.
- No em dashes anywhere. Use colons, commas, or restructure.
- Quote sparingly: under 15 words per quote, one quote per source. Paraphrase by default. Respect CC BY-SA on Diedrich texts, standard copyright on Reyes/Clack/Idelberger.
- Exact numbers. If a count is approximate, say approximately and give the basis.
- Mark every conjecture as conjecture. The V6 discipline applies: proven, conjectured, speculative are three different registers.
- If a fetch fails (SSRN sometimes blocks), record the failure in the chronicle header and proceed on abstract plus secondary sources; do not fabricate content.

## Done means

Nine files in `out/`: five chronicles, one synthesis, three artefacts. The synthesis carries the axis verdict table. The run is complete when every axis has a verdict, the PVM queue has at least five CTR-LEX candidates with falsification conditions, and all three artefacts stand alone without the chronicles.
