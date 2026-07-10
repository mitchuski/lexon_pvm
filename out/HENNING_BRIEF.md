# HENNING_BRIEF: Lexon x 0xagentprivacy, technical overlap for a working session

Prepared 2026-07-10. Corpus: 5 sources (Diedrich 2023 "The Holy Grail of Computational Law", Diedrich 2017 Lexon whitepaper, Reyes 2021 "Creating Cryptolaw for the U.C.C.", Clack 2021 "Languages for Smart and Computable Contracts", Idelberger 2020 "Merging traditional contracts and e-contracts"). Method: 8 convergence axes, each assigned one of three verdicts: structural convergence (same mechanism, different vocabulary), terminological convergence (same vocabulary, different mechanism, a false friend), divergence (genuine disagreement, preserved). The lineage is already live: footnote 7 of the 2023 paper credits the Austin performative framing to David Bovill, and the two projects share that root. Everything below is plural recognition and independent derivation. Nothing here is a validation claim or a priority claim in either direction.

Working vocabulary, so this document stands alone. **RPP**: the Relationship Privacy Paradigm; privacy as a structural property of bilateral relationships, not a policy promise. **VRC**: a bilateral, co-signed relationship credential; both parties hold full copies; the strongest binding in the 0xagentprivacy stack. **Agreement ceremony**: two First Persons utter mutual promises and the VRC binds; formation is a discrete constitutive event. **Swordsman**: the deterministic boundary agent of a person's agent pair; its counterpart, the Mage, is probabilistic; guarantees anchor on the Swordsman side. **MyTerms**: IEEE P7012 machine-readable terms that the person proffers to the counterparty, inverting the consent-theatre paradigm; the contractual privacy paradigm is the frame in which those terms execute as written. **R < 1**: the reconstruction ceiling; no outside party can fully reconstruct relationship state from what leaks. **Promise Theory**: Bergstra/Burgess; only autonomous agents make promises, impositions raise uncertainty, polarity is (+) gives and (-) accepts.

---

## 1. Convergence table

| Axis | Verdict | One line |
|------|---------|----------|
| A1. Performative agreement | terminological convergence (false friend) | The word performative names two felicity conditions: substrate-borne and unilateral in Lexon (one constructor call, an unstoppable chain), counterparty-borne and bilateral in the agreement ceremony (two First Persons, mutual promises); same Austin root via Bovill, different mechanism. |
| A2. Gates as promises | structural convergence | A gate is a voluntary, per-account self-restriction accepted only by the autonomous owner: Promise Theory stated in token vocabulary, with the gate lifecycle mapping to polarity; the internal false friend is the primitive named Promise, Lexon's weakest binding and agentprivacy's strongest. |
| A3. Topology of trust | structural convergence | Per-account gates dissolve star-shaped smart contracts into a peer-to-peer web with authority accruing to edge stakeholders: the bilateral-VRC argument against issuer-centric credentials made from the token side; preserved caveat, the single deployed token contract is a hidden hub one stratum down. |
| A4. Private evidence chains | structural convergence | The micro blockchain, a hash-chained signed log held only by the parties (hash, timestamp, role, clause, signature), implements the reconstruction ceiling R < 1 as bookkeeping: full evidence for the parties, no state reconstruction for outsiders; gaps are identity anchoring, external time, and transport metadata. |
| A5. Grammar to graph (keystone) | structural convergence, held at the conjectured register | Every Lexon sentence parses to subject-predicate-object; two independent scholars (Reyes, Idelberger) name the direct AST mapping as the lossless meaning carrier, so a Lexon text is readable contract, executable code, and exact subgraph at once; Clack's canonical-form and deontic gaps keep the claim conjectured; preserved divergence, Lexon keeps meaning inside the four corners, the RPP vests it in the bilateral decoder outside any document. |
| A6. Accountable reversibility | structural convergence | Name the neutral by published key, bound the window, keep the default final: the 2017 arbitration key and 2023 forum key converge with Accountable Wallet and Privacy Pools bounded discretion; preserved divergences, trusted human key versus trustless set membership, and 2017's bounded history-rewriting versus disclosure-only scope. |
| A7. Terms as executable law | structural convergence | Reyes compiles U.C.C. Article 9 so the statute restates and performs itself in one text, and 2017 joint composition makes negotiation computable counter-offers: both replace the consent-theatre paradigm with terms that execute as written; preserved divergence, direction of authorship, state and profession versus the person proffering. |
| A8. Anchoring below the agent | structural convergence | "What an underlying system does not provide, a language cannot support": obligations enforced at layer n require primitives at layer n-1, identical in form to the three-axis separation claim; preserved divergence, the Robotic Laws are state-authored and universal, the Swordsman charter is sovereign-authored and per-person. |

Tally: 7 structural convergences, 1 terminological convergence, 0 whole-axis divergences. The zero is honest, not forced: every axis carries at least one preserved internal divergence, and the deepest disagreements (felicity condition, meaning location, authorship direction, discretion scope) run through the axes, not along them. Two independently derived anchors deserve note: the 2017 paper's own Section 3.2.1 states the consent-theatre diagnosis in cypherpunk terms, metadata profiling against informational self-determination, consent given without protest; and Reyes derives commitment-without-disclosure (hash-as-reference inside a public record) inside commercial law with no privacy vocabulary at all. Same riverbed, opposite banks.

---

## 2. Probe (i): Lexon as serialisation grammar for agreement ceremonies and MyTerms agreements

**Claim.** MyTerms (IEEE P7012) defines machine-readable terms but no execution layer; Lexon's entire pitch is readability by judges. A MyTerms agreement serialised as a Lexon text closes that gap: one artefact that is the proffered terms, the executable obligation, and the court-readable document. Of the surveyed field only Lexon clears the counsel-legibility gate (Idelberger's negative controls: Solidity unintelligible to lawyers and laypersons alike, Prolog expert-legible but not contract-shaped). A MyTerms term-set serialised in anything else predictably fails with counsel.

**The Swordsman as a defined noun.** Idelberger's evaluation-license contract defines its ARBITER to admit a natural person, a legal person, or a machine, and gives the Arbiter the only two power clauses, Examine for Breach and Declare Breach. That machine-admitting seat is exactly Swordsman-shaped: deterministic boundary checks in, human judgment reserved. The design split proposed here: the Swordsman holds Examine for Breach; Declare Breach stays with a human or a named neutral. Lexon roles bind by first use and compile to key pairs, so the Swordsman is a key-holding role like Payer or Arbiter, no grammar change required.

**Sample text.** Three clauses, modeled on the escrow example's Payer/Payee style (definitions block, constructor sentence, named clauses with one permitted initiator each). Design-register conjecture: drafted for this brief, not yet compile-checked against the 0.3 grammar; the compile check is the first work item.

```lexon
LEX MyTerms Agreement.

"Person" is a person.
"Counterparty" is a person.
"Swordsman" is a person.
"Purpose" is a text.
"Breach" is a binary.

The Person fixes the Purpose, appoints the Counterparty,
and appoints the Swordsman.

CLAUSE: Accept Terms.
The Counterparty may certify the Purpose.

CLAUSE: Examine for Breach.
The Swordsman may declare the Breach.

CLAUSE: Dissolve.
The Person may terminate this contract, given that the Breach
has been declared.
```

The shape matters more than the wording: the Person proffers (constructor), the Counterparty accepts by certifying (the machine-readable-terms handshake), the Swordsman holds the deterministic breach seat, and dissolution is conditioned on a declared breach. The choice-of-venue slot fills by key inclusion, 2017-style: a neutral is designated by embedding a published public key, no onboarding, possibly unaware until invoked.

**Method behind the draft.** Reyes triaged 21 U.C.C. sections into three registers: 9 implemented, 6 reduced in risk, 6 left untouched as adjudicative prose. That triage is the method for a MyTerms term sheet: classify each P7012 term as executable, prose, or adjudicative before drafting its clause. Her four-step compatibility ladder (mirror the accepted form, execute rules with definitions unchanged, name the single amendment, offer dual adoption routes) is the argument skeleton for court-readability; the open question is what plays the safe-harbor role, since P7012 conformance has no 9-521 analogue yet.

**What the ceremony adds, stated in the field's own vocabulary.** Idelberger's thesis is that "the machine does not actually have to understand anything to be useful"; his four criteria maximise the audience of understanding, yet none requires any party to prove understanding at formation, so a text that looks legal can be honoured unread. Fifth criterion, proposed: demonstrated understanding at formation. None of his three implementations can satisfy it; a Lexon text signed inside an agreement ceremony can. In Clack's vocabulary: Lexon collapses his 5-step validation task to 3, and bilateral co-derivation is a candidate for the residual step even the single-artefact strategy leaves open, validating the artefact against the agreement as a whole. Conjecture: readability and bilaterality attack different fidelity-failure stages and compose rather than compete.

**Honest divergences carried into the probe.** Every Lexon may-clause has exactly one permitted initiator; nothing in the surveyed corpus is co-signed at formation, and the closest native mechanisms are keeper activation (bilateral consent to gate a kept account) and Reyes's PIP-list countersignature (counterparty key release gating a unilateral act). Whether the Multi-Signature account feature already permits a bilateral constructor without grammar changes is session question 3 below. And jurisdiction-as-framework makes one contract behave differently per jurisdiction, while machine-readable terms want the person's terms invariant with enforcement varying; the inversion question (can the person's proffered terms be the framework a counterparty's contract must instantiate) is genuinely open.

**Effort.** 2 days: compile-check the sample against Lexon 0.3 and repair to grammar. 5 days: triage the P7012 term sheet through the three-register method, producing the executable/prose/adjudicative split. 13 days: full draft agreement through the four-step ladder, with the safe-harbor question documented rather than solved. Total path: 21 days to a court-readable candidate artefact.

---

## 3. Probe (ii): Gate event hooks as the enforcement surface for Swordsman boundary promises

**Claim.** The Programmable Token's Gate Interface exposes 24 on* event hooks (2023 paper, Table 4): a complete, named enforcement surface at exactly the layer the anchoring principle requires (A8: interventions must anchor at the token-implementation level). A Swordsman boundary promise compiled to a gate is a promise kept by the substrate, not a policy asserted by an agent. The 2023 paper's own footnote 75 describes gates as voluntary restrictions an owner accepts for one account and calls that the very nature of contracts: Promise Theory arrived at independently, in token vocabulary.

**Lifecycle polarity.** gate_set and gate_prepare: the owner's (+) promise about its own behaviour. gate_activate by the optional keeper: the (-) acceptance; activation with a keeper requires consent of both owner and keeper, the one genuinely bilateral moment in the 2023 system and the natural splice point for full VRC co-signing. gate_close under pre-declared rules: revocation. The graded strength ladder (Approval, Commitment, Promise) gives three canonical strength classes for promise typing; note the false friend, Lexon's Promise is the weakest rung (uncovered, unblocked, non-expiring, forgivable only by the receiver) while the VRC promise bundle is agentprivacy's strongest binding. Same word, opposite position in the ordering. The mapping must type by mechanism, not by name.

**Hook-by-hook polarity map.** The 8 hooks named in the 2023 text, mapped; the remaining 16 complete against Table 4 in session.

| Hook | Promise Theory reading | Swordsman use |
|------|------------------------|---------------|
| onSending | (-) assessment point: the boundary evaluates an outbound act against standing promises | primary egress check, the charter's main seat |
| onReceiving | (-) assessment point: acceptance of an inbound act is itself a promise | ingress filter, refuse what the charter never accepted |
| onMaking | (+) emission: a new promise is uttered | log the utterance into the ceremony record |
| onCommitting | (+) emission with backing: tokens blocked for a named receiver | strongest unilateral bind, require charter clearance |
| onForgiving | dissolution by the promisee: receiver-side unilateral release | template for VRC release ceremonies |
| onReleasing | dissolution by performance: commitment completes | close the promise edge, update integrity accounting |
| onReversing | accountability: designated-neutral discretion inside the bounded window | the A6 surface, evidence duties trigger here |
| onAcceding | accountability: a party joins an existing arrangement | bilateralisation hook, candidate co-signature entry |

**The keeper question, as the Promise Theory opener.** The keeper can update parameters and close the gate, so a gated obligation is co-administered, unlike a Swordsman boundary promise held by the sovereign alone. Open: is the keeper's power a (-) acceptance-promise to administer, or a standing imposition the owner pre-accepted? The answer decides whether a gated account is autonomous in the Bergstra/Burgess sense, and whether gate re-use across unlimited accounts makes gates the natural VRC-template mechanism.

**The coexistence test.** Gates stack, remain mutually oblivious, and carry an engineered containment rule preventing a deeper gate from vetoing a transfer for everyone involved. Concrete joint experiment: one account carrying both a state-authored Robotic-Law gate and a sovereign-authored Swordsman charter gate. If both hold simultaneously, the A8 divergence (who writes the boundary) becomes a composition question rather than a fork: public law anchored below private agents and private boundaries anchored below public exposure, on one account.

**Effort.** 2 days: complete the 24-hook polarity table against Table 4 and the 0.3 signatures. 5 days: specify a Swordsman charter gate, boundary promises expressed as hook handlers with polarity types. 8 days: prototype the stacked-gate coexistence test on a testnet deployment of the Programmable Token. Total path: 13 days plus 2 days of shared review.

---

## 4. Probe (iii): A Lexon-to-graph compiler target, AST out as triples

**Claim.** The Lexon compiler already decomposes every sentence into binary relations between symbols; the 2023 paper's Figure 10 escrow AST fans one subject into four typed predicates, 4 triples. A triples emitter (RDF or Cypher) is therefore a further normative target for an AST that exists in the shipped compiler: EVM, rule engine, graph store; same AST, three emitters. Idelberger already notes retargetability to other normative systems; this extends his observation by one target. The differential against LLM entity extraction: deterministic, zero extraction loss, and the puzzling-triviality effect (writing law as code forces explicit formalization of relations humans never utter), so controlled grammar surfaces structure probabilistic extraction systematically misses.

**Emitter design, from the corpus.** The definitions block emits typed nodes: person compiles to a key pair, data to a hash, plus time, amount, binary, text; Reyes's type vocabulary is a graph schema in miniature. Clause sentences emit typed edges of the form actor, may, verb, object. Closed enumerations (her 15-value collateral category list) become first-class node-label taxonomies. Cross-record references (her List of Amendments linking statements by filing number) become typed edges spanning contract instances.

**Promise primitives as typed edges, and the gap they fill.** Clack characterises Lexon as "automation of performance rather than analysis of contract semantics": its triples are operational edges, and the deontic layer, obligations over actions, is what no action-oriented controlled language has yet demonstrated. The proposal: three-aspect edge typing (deontic, operational, temporal), with Promise and Commitment primitives emitted as deontic meta-edges pointing at operational action edges. Promise-typed edges supply the deontic meta-layer as an overlay, not a language fork: zero grammar changes, one new emitter. Open sub-question: do the Promise and Commitment primitives already constitute a partial deontic layer inside the language?

**Three hard requirements, inherited from Clack.** Separability: edges need the three aspect types, because deontic, operational, and temporal aspects intertwine in real clauses. Isomorphism: clause-to-subgraph mapping is many-to-many; do not promise one-clause-one-subgraph. Canonical form: semantically equal contracts may emit different subgraphs, so deduplication and same-meaning queries need a canonicalisation pass; whether the 0.3 grammar admits a canonical form is testable against the fixtures and is session question 4. Order-bearing clause sequences take temporal edges, not bare triples; the bare-triple reading covers only the declarative fraction.

**Fixtures, all in hand.** The escrow example (Figure 10 AST, 4 triples from one subject). Reyes Appendix A (complete U.C.C.-1 financing statement, a full triple serialisation of a statutory instrument) and Appendix D (closed enumerations, cross-record amendment edges). Idelberger Listing 3 (evaluation license, verified word-verbatim, third-party published). Acceptance test: round-trip each fixture to triples with zero loss, then query back the actor-may-verb-object set and diff against the source.

**Downstream, stated as claims not commitments.** A corpus of Lexon contracts grows a knowledge graph with a promise graph running across it: who committed what to whom, what timed out, what was forgiven. One divergence labels itself here: every surveyed system, Lexon included, is contract-scoped; two contracts with the same counterparty share nothing. The relationship spine across documents (the same account carrying edges from many agreements, VRC-style persistence) is this side's extension, not any letter's claim, and the graph target keeps the two layers separable: public-legible operational subgraphs, opaque relationship edges. That separation is the reconstruction ceiling R < 1 drawn as topology; Reyes's hash-as-reference derives the same pattern independently inside a public record.

**Effort.** 3 days: spike a Cypher emitter over the escrow fixture, 4 triples plus role nodes, hand-verified. 8 days: the three-fixture emitter with typed nodes, closed enumerations, and the deontic overlay for Promise and Commitment. 13 days, bounded: canonicalisation exploration, same-meaning-same-subgraph tested against grammar variants of one fixture, with a negative result documented as a finding. Total path: 21 days to a defensible prototype plus a written canonical-form verdict.

---

## 5. Five session questions

1. **Forum-key power diff.** Which 2017 arbitration powers did the 2023 forum key drop: event-list rewriting, retroactive code amendment, the fractional-reserve clawback? The 2017 compression still holds either way: "Reversibility is functionally a temporary change in the burden of proof."
2. **Hash-prefix width.** The micro blockchain carries a truncated 12-hex-character (48-bit) hash prefix into the next entry; is the collision margin intended, and does the planned peer-to-peer microclient close the transport-metadata leak of the email bundle path?
3. **Bilateral constructor.** Can the Multi-Signature account feature give a two-party constructor today, making formation co-signed without grammar changes, and what is the keeper's promise polarity (acceptance or pre-accepted imposition)?
4. **Canonical form.** Does the 0.3 grammar admit a canonical AST form, same meaning implies same subgraph, testable against the escrow, Reyes, and Idelberger fixtures?
5. **Stacked-gate coexistence.** Will a state-authored Robotic-Law gate and a sovereign-authored charter gate hold on one account under the containment rule, and which one answers onSending first?

---

*Register note. Verdicts above follow the run's three-register discipline; everything marked conjecture stays conjecture until tested. Quotes: 1 per source, none over 14 words. Effort figures anchor on 2, 3, 5, 8, 13, 21 working days and are estimates, not commitments.*
