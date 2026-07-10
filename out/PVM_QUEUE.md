# PVM_QUEUE: Privacy is Value candidates from the Lexon convergence run

Status: proposal queue only. Every entry below is a candidate for register consideration, written in CTR-LEX series form. No entry carries a C-series number and no entry carries a confidence percentage: the live register is canonical and only the operator writes to it. Cluster fits are suggestions by shape; the operator maps them to actual cluster assignments. Every claim in this queue is a conjecture unless its entry says otherwise, and most entries say conjecture explicitly.

Source corpus, so this artefact stands alone: L01 = Diedrich, The Holy Grail of Computational Law, 2023. L02 = Diedrich, Lexon: Legal Smart Contracts whitepaper, 2017. L03 = Reyes, Creating Cryptolaw for the U.C.C., 78 Wash. & Lee L. Rev. 1521, 2021. L04 = Clack, Languages for Smart and Computable Contracts, arXiv:2104.03764, 2021. L05 = Idelberger, Merging traditional contracts and e-contracts, 2020.

Working vocabulary, compressed: Lexon compiles controlled English into executable agreements; a gate is a voluntary per-account restriction on token use; the micro blockchain is a hash-chained signed log held only by the contracting parties; a forum key designates a neutral (court, arbiter, notary) with bounded, time-windowed discretion. On the agentprivacy side: a VRC is a bilateral, co-signed relationship record; R is the reconstruction ceiling, the fraction of a relationship an outside observer can rebuild, with R < 1 the design target; ε(π) is the evidence substrate backing a relationship's integrity fraction; the network value term is stratum-weighted, (1 + Σ wᵢnᵢ/N₀)^k.

## Queue summary

| ID | Candidate | Source axis | Letters |
|----|-----------|-------------|---------|
| CTR-LEX-01 | Gate-web topology raises the scaling exponent | A3 | L01 |
| CTR-LEX-02 | Stratum as promise popcount | A3 | L01 |
| CTR-LEX-03 | Micro blockchain log as the ε(π) evidence substrate | A4 | L01, L03 |
| CTR-LEX-04 | Public subgraph, opaque edges: the reconstruction ceiling drawn as graph | A5 | L03, L01 |
| CTR-LEX-05 | Forum-key and association-set discretion are one accountability primitive | A6 | L02, L01 |
| CTR-LEX-06 | Validation-step reduction is measurable value | A1/A5 | L04 |
| CTR-LEX-07 | The VRC as formation anchor for the contract stack | A1 | L05 |
| CTR-LEX-08 | Bilateral relationship memory is an empty slot in the surveyed field | A5 | L05 |
| CTR-LEX-09 | The meaning triad: ambiguous, vague, relationship-indexed | A5 | L04, L03 |

Nine candidates against the plan's floor of 5. All four expected seeds survived the chronicles and appear as CTR-LEX-01/02 (gate-web scaling and stratum density), CTR-LEX-03 (micro blockchain logs), CTR-LEX-04 (public-subgraph topology), and CTR-LEX-05 (forum-key versus association-set discretion).

---

## CTR-LEX-01: Gate-web topology raises the scaling exponent

**Claim.** Conjecture. Per-account gate webs raise the effective exponent k in the stratum-weighted network value term relative to star-shaped smart-contract topology. The mechanism: each gated account contributes independent promise-making capacity, distributed across N accounts, where a star routes every relationship through one hub's fixed logic. Complex smart contracts empirically centralise into stars; per-account gates dissolve the star into a peer-to-peer web that grows by incremental relationship formation. A rider travels with the claim: the web has a hidden hub, since every gate lives inside one deployed token contract, so the star is removed at the relationship layer and reintroduced one stratum down. The claim is about topology of authority, not topology of infrastructure.

**Evidence pointer.** L01, Decentralization of Logic section, Figures 5 and 6, with fn. 80 grounding the star observation in the author's Ethereum transaction browser at IBM; Dynamic Stacking of Logic, Figure 7, for composition without global standards.

**Falsification condition.** Simulate star and gate-web topologies with equal promise counts and equal stratum weights. Equal value growth falsifies the exponent claim; growth differing only in the multiplier inside the stratum sum demotes the claim from exponent to weight.

**Suggested V6 claim-cluster fit.** The network value cluster: claims governing k and the topology-dependence of (1 + Σ wᵢnᵢ/N₀)^k.

## CTR-LEX-02: Stratum as promise popcount

**Claim.** Conjecture. An account's stratum admits a direct operational measure: the count of active promise-class objects it carries. Lexon's token layer makes the count enumerable, since one account simultaneously holds approvals, at most one commitment, multiple promises, a gate, and reversibility grants, each a typed object with a defined lifecycle. Cross-contract promise density then maps to stratum: the same account is a node in many agreements at once, and its stratum is the popcount of those active bindings. This gives the stratum weights wᵢ an auditable basis instead of an assessed one.

**Evidence pointer.** L01, INTERACTION section (the primitive inventory: Approval, Commitment, Promise, Cheque, Escrow, Reversibility) and Table 3 (a single contract ABI enumerating the promise-class objects and their lifecycle calls).

**Falsification condition.** Exhibit populations of accounts with equal active-promise popcount whose measured contribution to relationship value diverges systematically, controlling for counterparty count. Divergence shows popcount is not the stratum measure and at best one input to it.

**Suggested V6 claim-cluster fit.** The network value cluster, stratum-weighting branch: claims defining and measuring wᵢ and nᵢ.

## CTR-LEX-03: Micro blockchain log as the ε(π) evidence substrate

**Claim.** Conjecture. The micro blockchain's 5-field log entry (hash, timestamp, role, clause, signature), hash-chained by SHA-256 over the whole log and held only by the parties, serves as the ε(π) evidence substrate for VRC integrity fractions without leaking the relationship graph. Relationship state is derivable from, and only from, the record chain; full evidence for the parties, no state reconstruction for outsiders: the reconstruction ceiling R < 1 implemented as bookkeeping. The claim is multiply attested: specified in 2023, design ancestor in the 2017 two-layer record (immutable signed events below, re-derivable business facts above, deprecated truth retained as traces), and independently implemented in the Reyes prototype with per-actor RSA-SHA256 signatures and a rolling chain digest. Known gaps ride with the candidate and belong in any register entry: timestamps are self-declared with no external anchor, roles prove key-continuity rather than personhood, there is no consensus for near-simultaneous acts, and the implementation truncates the carried hash prefix to 48 bits.

**Evidence pointer.** L01, History and The Micro Blockchain section, Figure 2, fn. 55 and fn. 56; L02, Section 4.1.2 (trace retention, the origin statement); L03, Appendix C (the working log implementation, bundle-and-send transport).

**Falsification condition.** A third party reconstructs relationship state, or the relationship graph, from transport metadata alone. The email bundle transport is the live attack surface: content privacy without graph privacy falsifies the substrate claim at the graph layer even while the content claim holds.

**Suggested V6 claim-cluster fit.** The evidence and integrity cluster: claims defining ε(π) and the integrity fraction; secondary fit to the reconstruction ceiling cluster.

## CTR-LEX-04: Public subgraph, opaque edges: the reconstruction ceiling drawn as graph

**Claim.** Conjecture. The reconstruction ceiling has a canonical graph form: a public-legible subgraph with opaque leaf content, exact references, undisclosed referents. Commercial law derives the form independently: the Reyes U.C.C. prototype identifies a filing by a hash of the statement data and collateral by a hash of its serial number, so the public record carries exact, collision-checked edges while content stays outside the record, commitment-without-disclosure inside a public index. The same shape appears at the meaning layer: Lexon keeps meaning computable inside the four corners of the document, the relationship paradigm vests decisive meaning in the bilateral decoder outside any document, so a relationship graph renders as public structural edges plus proverb edges that are present but opaque. Two independent derivations of one topology, from statute and from grammar, is the finding.

**Evidence pointer.** L03, Part III.A.2 (hash-identified collateral) and note 173 with p. 1557 (file number as hash of statement data), Part III.A.1 (the corpus queried as a graph); L01, fn. 3 and the LANGUAGE section (meaning travels in relations, nouns as neutral markers).

**Falsification condition.** Exhibit a query over the public subgraph alone, structure plus indexes, no party cooperation, that recovers the opaque content or the bilateral meaning. Recovery drives R to 1 and collapses the topology into mere delay.

**Suggested V6 claim-cluster fit.** The reconstruction ceiling cluster: R < 1 stated as graph topology rather than as probability.

## CTR-LEX-05: Forum-key and association-set discretion are one accountability primitive

**Claim.** Conjecture. Accountable reversibility reduces to one three-part pattern: name the neutral, bound the window, keep the default final. The 2017 arbitration key (an ordinary published public key, zero-preparation neutral, 30-day gliding window in the example, implicit escrow until the window passes), the 2023 forum key (owner-granted, time-windowed discretion at the token layer), and association-set discretion in accountable-privacy designs are three implementations of this one primitive. The bridging statement is Diedrich's own: "Reversibility is functionally a temporary change in the burden of proof" (L02, Section 4.1.9). Discretion shifts who must prove what; the information layer is never edited. The preserved divergence is part of the claim: trust locus differs (key-holding human institution versus set-membership proof) and scope differs (the 2017 power reaches bounded rewriting of business facts, association-set discretion is disclosure-only), yet the pattern invariants hold across all three.

**Evidence pointer.** L02, Section 1 and Section 4.1.9 (mechanics, window, escrow), Section 4.1.2 (trace retention), Section 3.4 (finality as consumer-protection variable, the DAO's 27-day freeze as empirical anchor); L01, Reversibility section (the 2023 forum key).

**Falsification condition.** Exhibit a deployed accountability mechanism that achieves recoverable-yet-final commerce while violating an invariant: no designated neutral, or unbounded window, or non-final default. Alternatively, exhibit a discretion event correctly described by the pattern that edits history rather than shifting the burden of proof; that breaks the burden-of-proof reduction the equivalence rests on.

**Suggested V6 claim-cluster fit.** The accountable privacy cluster: claims on designated, bounded discretion as the alternative to both backdoors and absolute finality.

## CTR-LEX-06: Validation-step reduction is measurable value

**Claim.** Conjecture. A single-artefact controlled grammar, where the contract is the source code, collapses the validation task from 5 steps to 3, and the 2-step saving is a priceable value term for the contractual privacy paradigm. Validation (building the right code) is the expensive half, harder than verification (building the code right), and each eliminated translation surface removes a fidelity-failure stage where meaning distorts between the parties' agreement and the executed obligation. Machine-readable terms serialised in a controlled grammar therefore carry lower integrity cost than the same terms passed through a specification-then-implementation pipeline. The residual is part of the claim: even the single artefact leaves one validation step open, validating the artefact against the agreement as a whole, and bilateral co-derivation is a candidate mechanism for exactly that residual step, so readability and bilaterality compose rather than compete.

**Evidence pointer.** L04, Section 1 (verification/validation distinction), Section 4 (the 5-step task and its collapse to 3), Section 2.3 (Strategy 4, contract as source code), Section 3.3 (down-stack fidelity failures).

**Falsification condition.** An empirical drafting study in which single-artefact agreements show validation cost and error rates equal to five-layer pipelines for matched complexity. Equality falsifies the value term; it leaves the step count as bookkeeping without price.

**Suggested V6 claim-cluster fit.** The value composition cluster: claims pricing integrity and verification cost inside V(π,t); secondary fit to the agreement ceremony cluster via the residual-step composition rider.

## CTR-LEX-07: The VRC as formation anchor for the contract stack

**Claim.** Conjecture. Under the contract-stack model, where a contract is the whole heap of intent-signifying utterances (text, code, tweets, marketing) with no fixed hierarchy and only case-by-case judicial ranking, a co-signed ceremony record fixes what the heap cannot: formation time, parties, and demonstrated understanding at formation. The stack literature already concedes a derivable hierarchy, text and executable code probably outranking marketing communication; a bilateral ceremony record plausibly dominates marketing-layer utterances in that same derivable sense. The VRC therefore occupies the formation slot the model leaves empty, and collapses the no-clear-hierarchy problem at exactly one node: the binding act. Companion datum: none of the surveyed evaluation criteria require any party to prove understanding at formation, so an artefact can look legal and be honoured unread; a formation anchor is the structural repair for consent theatre, not a cosmetic addition. The consent-theatre paradigm survives legibility; it does not survive demonstrated understanding.

**Evidence pointer.** L05, Section 3 (Allen's contract stack, the derivable-hierarchy concession) and Section 5.3 (the four criteria, none requiring demonstrated understanding).

**Falsification condition.** A jurisdictional analysis showing ceremony records rank no higher than marketing-layer utterances in contract-stack interpretation. One jurisdiction suffices to bound the claim; a pattern across jurisdictions falsifies it.

**Suggested V6 claim-cluster fit.** The agreement ceremony cluster: claims on formation, bilateral binding, and the replacement of the consent-theatre paradigm by the contractual privacy paradigm.

## CTR-LEX-08: Bilateral relationship memory is an empty slot in the surveyed field

**Claim.** The surveyed computable-contract field carries no bilateral relationship memory layer. The 2020 survey stack, legal markup, logic languages with ontologies and knowledge bases, e-contract generations 1 through 3, licensing metadata, application-layer legal tech, blockchain enforcement, is contract-scoped throughout: nothing persists the party-pair relationship across contracts. The gap is visible at grammar level inside the field's own best candidate: per-counterparty instantiation gives per-edge contracting, but memory is per-contract, so two contracts with the same counterparty share nothing. The slot the VRC occupies is empty across the field as surveyed, which makes relationship memory an unclaimed position, and the double gap (no formation layer, no relationship spine) states the two candidates CTR-LEX-07 and CTR-LEX-08 as one structural observation. This is a survey-bounded absence claim, exact as of the 2020 corpus, not a universal.

**Evidence pointer.** L05, Sections 2.1 through 2.5 and 6.1 (the survey stack), Section 6.3 (per-counterparty instantiation with per-contract memory).

**Falsification condition.** Exhibit any surveyed system with cross-contract party-pair memory. Named search space for the attempt: generation 2.5 and generation 3 systems in Wong's taxonomy, and Stanford CDL. One exhibit weakens the claim from absent to rare; the register entry should be worded to survive that downgrade.

**Suggested V6 claim-cluster fit.** The relationship-record uniqueness cluster: claims positioning the VRC as an asset class without an incumbent.

## CTR-LEX-09: The meaning triad: ambiguous, vague, relationship-indexed

**Claim.** Conjecture. The field's text-intrinsic meaning taxonomy is two-valued, ambiguity (a small set of candidate meanings) and vagueness (indeterminate or deferred meaning), and it is missing a third category: relationship-indexed meaning, precise inside the dyad and indeterminate outside it. The bilateral proverb instantiates the category, and R < 1 is its formal statement: the meaning is exact for two parties and ceilinged for everyone else, which neither ambiguity nor vagueness can express because both are properties of the text alone. A deeper rider, marked conjecture: increasing formalization forces implicit context explicit (writing law as code surfaces background relations humans never utter), and the process terminates at a stable opaque remainder, which is exactly the bilateral proverb; that remainder is the floor keeping R below 1.

**Evidence pointer.** L04, Section 3.2 (the ambiguity/vagueness taxonomy and the three semantic-specification problems); L03, note 163 (the puzzling-triviality effect of codifying law, from Diedrich's correspondence reproduced by Reyes).

**Falsification condition.** Exhibit relationship-indexed meaning reduced to ambiguity or vagueness by adding text inside the document alone, no bilateral decoder required. Equivalently for the rider: a formalization process that eliminates the opaque remainder entirely, driving the floor under R to zero.

**Suggested V6 claim-cluster fit.** The reconstruction ceiling cluster, linguistic branch: claims stating R < 1 in meaning-theoretic rather than probabilistic vocabulary.

---

End of queue. Nine candidates, each with claim, evidence pointer, falsification condition, and suggested fit. The operator decides which, if any, enter the register, under what numbers, and at what confidence.
