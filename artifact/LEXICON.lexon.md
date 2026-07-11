# LEXICON.lexon.md, the semantic base

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

Vacuity rule (adopted from the lexr1 critic, 2026-07-10): the Notes line must
name at least one STRUCTURAL relation the expression captures (a gate, an
ordering, a conjunction, an impossibility), not only what is omitted. An entry
whose content rides entirely in name strings the checker cannot inspect is
syntactically legal but does not deserve a fold.

Relation-claim rule (OT-3, adopted 2026-07-11): entries folded from lexr3
onward also carry a `- relation:` line, a machine-readable claim in the
grammar of tools/relation_check.mjs (documented in GRAMMAR.ebnf.md), and the
tool must return RELATION PASS on it: the claim holds as a clause-graph
property AND its mutated twin (which still passes the base gate) fails it.
Direction is claimed as an absence (CR-12). Entries folded before this rule
are grandfathered; coverage.mjs counts them unchanged.

---

## LEXPVM-T-001 · First Person
- census: LEXPVM-T-001
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### First Person

```lex
LEX First Person.

"First Person" is a person.
"Swordsman" is a person.
"Mage" is a person.
"Delegation" is a text.
"Revoked" is a binary.

The First Person appoints the Swordsman, and appoints the Mage.

CLAUSE: Delegate.
The First Person may register a Delegation.

CLAUSE: Revoke.
The First Person may declare Revoked.

CLAUSE: Close.
The First Person may, if Revoked is declared, terminate this contract.
```

Notes: carries the principal-behind-all-delegation property (only the First Person appoints, delegates, revokes, closes: the non-delegable door as clause structure); omits dignity and 7th-capital framing.

## LEXPVM-T-006 · The Gap
- census: LEXPVM-T-006
- register: glossary · conjectured expression of proven term
- cites: glossary-master-v4 § ### The Gap

```lex
LEX The Gap.

"First Person" is a person.
"Gap" is a person.
"Swordsman" is a person.
"Mage" is a person.
"Seed" is data.
"Held Apart" is a binary.

The First Person appoints the Gap, appoints the Swordsman, and appoints the Mage.

CLAUSE: Draw Seed.
The Gap may certify the Seed.

CLAUSE: Hold Apart.
The Gap may declare Held Apart.

CLAUSE: Verify.
The Swordsman may, if Held Apart is declared, certify the Seed.
```

Notes: carries maximal betweenness as clause structure (no verification path exists except through the Gap's declaration); omits the entropy expression H(X) minus C_S plus C_M.

## LEXPVM-T-009 · Dual Agents (s ⊥ m)
- census: LEXPVM-T-009
- register: glossary · conjectured expression of proven term
- cites: glossary-master-v4 § ### Dual Agents (s ⊥ m)

```lex
LEX Dual Agents.

"First Person" is a person.
"Swordsman" is a person.
"Mage" is a person.
"Private State" is data.
"Public Task" is a text.
"Boundary Approved" is a binary.

The First Person appoints the Swordsman, appoints the Mage, and fixes the Private State.

CLAUSE: Observe.
The Swordsman may certify the Private State.

CLAUSE: Approve Boundary.
The Swordsman may declare Boundary Approved.

CLAUSE: Project.
The Mage may, if Boundary Approved is declared, register a Public Task.
```

Notes: conditional independence given the First Person's private state carried as permission structure (the Mage's only route to action runs through the Swordsman's declaration, never through the Private State directly); the formula (Y_S ⊥ Y_M) | X omitted.

## LEXPVM-T-010 · Swordsman (⚔️)
- census: LEXPVM-T-010
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Swordsman (⚔️)

```lex
LEX Swordsman Charter.

"First Person" is a person.
"Swordsman" is a person.
"Private Ledger" is data.
"Boundary Approved" is a binary.
"Refused" is a binary.

The First Person appoints the Swordsman, and fixes the Private Ledger.

CLAUSE: Observe.
The Swordsman may certify the Private Ledger.

CLAUSE: Approve.
The Swordsman may declare Boundary Approved.

CLAUSE: Guard.
The Swordsman may, if Boundary Approved is not declared, declare Refused.
```

Notes: carries observes-everything, approves-or-refuses-boundaries, reveals-nothing-directly (no clause sends anything to any external party); omits budget constraints on leakage.

## LEXPVM-T-011 · Mage (🧙‍♂️)
- census: LEXPVM-T-011
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Mage (🧙‍♂️)

```lex
LEX Mage Charter.

"First Person" is a person.
"Mage" is a person.
"Swordsman" is a person.
"Counterparty" is a person.
"Boundary Approved" is a binary.
"Projection" is a text.

The First Person appoints the Mage, appoints the Swordsman, and appoints the Counterparty.

CLAUSE: Compose.
The Mage may register a Projection.

CLAUSE: Project.
The Mage may, if Boundary Approved is declared, send the Projection to the Counterparty.
```

Notes: carries acts-publicly-on-approved-information-only (the send clause is gated on the Swordsman's declaration); omits coordination with other Mages and capability projection detail.

## LEXPVM-T-013 · Promise (Promise Theory)
- census: LEXPVM-T-013
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Promise (Promise Theory)

```lex
LEX Promise.

"Promiser" is a person.
"Promisee" is a person.
"Promise Body" is a text.
"Kept" is a binary.

The Promiser appoints the Promisee, and fixes the Promise Body.

CLAUSE: Make Promise.
The Promiser may send the Promise Body to the Promisee.

CLAUSE: Assess.
The Promisee may declare Kept.
```

Notes: voluntary (may), directional (promiser to promisee), and independently assessed (only the promisee declares Kept); imposition is structurally impossible, no clause lets either party act on the other's behalf. Polarity (+give / -accept) carried by clause roles.

## LEXPVM-T-042 · Ceremony
- census: LEXPVM-T-042
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Ceremony

```lex
LEX Ceremony.

"First Agent" is a person.
"Second Agent" is a person.
"Witness" is a person.
"Understanding" is a text.
"Ceremony Time" is a time.
"Bound" is a binary.

The First Agent appoints the Second Agent, and appoints the Witness.

CLAUSE: Demonstrate.
The First Agent may register an Understanding.

CLAUSE: Reciprocate.
The Second Agent may register an Understanding.

CLAUSE: Mark.
The Witness may fix the Ceremony Time as the current time.

CLAUSE: Bind.
The Witness may, if the Ceremony Time is fixed, declare Bound.
```

Notes: carries proof-of-understanding as bilateral registration before binding; omits the genesis/operational ceremony taxonomy and the d6 value dimension.

## LEXPVM-T-055 · MyTerms (IEEE 7012-2025)
- census: LEXPVM-T-055
- register: glossary · conjectured expression of standard
- cites: glossary-master-v4 § ### MyTerms (IEEE 7012-2025)

```lex
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
The Swordsman may declare Breach.

CLAUSE: Dissolve.
The Person may, if Breach is declared, terminate this contract.
```

Notes: the HENNING_BRIEF probe (i) sketch, gate-repaired 2026-07-10; carries person-proffers, counterparty-accepts (the invitation pattern), Swordsman in the deterministic breach seat; omits negotiation and per-jurisdiction variation.

## LEXPVM-T-073 · Soulbis
- census: LEXPVM-T-073
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Soulbis

```lex
LEX Soulbis Translation.

"Keeper" is a person.
"Soulbis" is a person.
"Translation" is a text.
"Spellbook Context" is a binary.

The Keeper appoints the Soulbis, and fixes the Translation.

CLAUSE: Contextualize.
The Keeper may declare Spellbook Context.

CLAUSE: Certify Translation.
The Keeper may, if Spellbook Context is declared, certify the Translation.
```

Notes: the identity equation (Soulbis = Swordsman = ⚔️) rides in the fixed Translation text, certified only in Spellbook context; the subset has no identity predicate between nouns, flagged as an expressiveness gap and future grammar lever.

## LEXPVM-T-074 · Soulbae
- census: LEXPVM-T-074
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Soulbae

```lex
LEX Soulbae Translation.

"Keeper" is a person.
"Soulbae" is a person.
"Translation" is a text.
"Spellbook Context" is a binary.

The Keeper appoints the Soulbae, and fixes the Translation.

CLAUSE: Contextualize.
The Keeper may declare Spellbook Context.

CLAUSE: Certify Translation.
The Keeper may, if Spellbook Context is declared, certify the Translation.
```

Notes: mirror of LEXPVM-T-073 (Soulbae = Mage = 🧙‍♂️); same identity-predicate gap flagged there applies.

## LEXPVM-T-014 · Autonomy Axiom
- census: LEXPVM-T-014
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Autonomy Axiom § ### Autonomy Axiom
- lever: p2-pt-primitive-role-charters (run lexr1, VALIDATED 8/8)

```lex
LEX Autonomy Axiom.

"First Agent" is a person.
"Second Agent" is a person.
"First Behavior" is a text.
"Second Behavior" is a text.

The First Agent fixes the First Behavior.
The Second Agent fixes the Second Behavior.

CLAUSE: First Promise.
The First Agent may register the First Behavior.

CLAUSE: Second Promise.
The Second Agent may register the Second Behavior.
```

Notes: carries only-own-behavior as clause partition (each agent fixes and registers only its own Behavior; no clause lets either agent register the other's, so promising on another's behalf is structurally absent); omits the single-agent paradox implication and the Swordsman/Mage domain split.

## LEXPVM-T-015 · Promise Body (τ, χ)
- census: LEXPVM-T-015
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Promise Body (τ, χ) § ### Promise Body (τ, χ)
- lever: p2-pt-primitive-role-charters (run lexr1, VALIDATED 8/8)

```lex
LEX Promise Body.

"Promiser" is a person.
"Promisee" is a person.
"Promise Type" is a text.
"Promise Constraint" is a text.

The Promiser appoints the Promisee, fixes the Promise Type, and fixes the Promise Constraint.

CLAUSE: Offer Body.
The Promiser may send the Promise Type to the Promisee, and send the Promise Constraint to the Promisee.

CLAUSE: Accept Body.
The Promisee may certify the Promise Type, and certify the Promise Constraint.
```

Notes: carries the two-component body b = (type, constraint) as two fixed texts that travel and are accepted together; omits the tau/chi notation and the spell-notation compression mapping.

## LEXPVM-T-016 · Conditional Promise (b|c)
- census: LEXPVM-T-016
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Conditional Promise (b|c) § ### Conditional Promise (b|c)
- lever: p2-pt-primitive-role-charters (run lexr1, VALIDATED 8/8)

```lex
LEX Conditional Promise.

"Promiser" is a person.
"Promisee" is a person.
"Promise Body" is a text.
"Condition Met" is a binary.

The Promiser appoints the Promisee, and fixes the Promise Body.

CLAUSE: Observe Condition.
The Promisee may declare Condition Met.

CLAUSE: Keep Promise.
The Promiser may, if Condition Met is declared, send the Promise Body to the Promisee.
```

Notes: carries contingency as a condition-gated send (the Keep Promise clause can fire only once Condition Met is declared); omits the b|c notation and the (s perp m | X) application; pins condition assessment to the Promisee, which the canon leaves abstract.

## LEXPVM-T-017 · Assessment α(π)
- census: LEXPVM-T-017
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Assessment α(π) § ### Assessment α(π)
- lever: p2-pt-primitive-role-charters (run lexr1, VALIDATED 8/8)

```lex
LEX Assessment.

"Promiser" is a person.
"Promisee" is a person.
"Promise Body" is a text.
"Kept" is a binary.
"Not Kept" is a binary.

The Promiser appoints the Promisee, and fixes the Promise Body.

CLAUSE: Deliver.
The Promiser may send the Promise Body to the Promisee.

CLAUSE: Assess Kept.
The Promisee may declare Kept.

CLAUSE: Assess Not Kept.
The Promisee may declare Not Kept.
```

Notes: carries assessment-lies-with-the-promisee (only Promisee clauses hold verdict declarations, in both directions; the Promiser has no verdict clause at all); omits the alpha(pi) notation, RPP compression-ratio quantification, and trust-tier accumulation.

## LEXPVM-T-018 · Trust Function
- census: LEXPVM-T-018
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Trust Function
- lever: p1-defined-condition-charter (run lexr1, VALIDATED 8/8)

```lex
LEX Trust Function.

"Truster" is a person.
"Promiser" is a person.
"Kept" is a binary.
"Broken" is a binary.
"Trust Grant" is a binary.

The Truster appoints the Promiser.

CLAUSE: Record Kept.
The Truster may declare Kept.

CLAUSE: Record Broken.
The Truster may declare Broken.

CLAUSE: Trustworthy.
"Trustworthy" is defined as: Kept is declared and Broken is not declared.

CLAUSE: Extend Trust.
The Truster may, if Kept is declared and Broken is not declared, grant the Trust Grant.
```

Notes: Carries trust as a function of the truster's own assessment history (only the Truster records outcomes, and extended trust is gated on that record, with 'is not declared' carrying the downgrade-on-breach direction). Omits the numeric 0-to-1 value and the update rule.

## LEXPVM-T-019 · Irreducible Promise
- census: LEXPVM-T-019
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Irreducible Promise § ### Irreducible Promise
- lever: p2-pt-primitive-role-charters (run lexr1, VALIDATED 8/8)

```lex
LEX Irreducible Promise.

"First Component" is a person.
"Second Component" is a person.
"Superagent" is a person.
"Whole Promise" is a text.
"First Part Kept" is a binary.
"Second Part Kept" is a binary.

The Superagent appoints the First Component, appoints the Second Component, and fixes the Whole Promise.

CLAUSE: Keep First Part.
The First Component may declare First Part Kept.

CLAUSE: Keep Second Part.
The Second Component may declare Second Part Kept.

CLAUSE: Emerge.
The Superagent may, if First Part Kept is declared and Second Part Kept is declared, register the Whole Promise.
```

Notes: carries emergence-from-cooperation (the Whole Promise registers only when both components' declarations stand, and no component clause can register it alone); omits adversarial uncapturability and the Gap application.

## LEXPVM-T-020 · Invitation vs. Attack (Imposition)
- census: LEXPVM-T-020
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Invitation vs. Attack (Imposition) § ### Invitation vs. Attack (Imposition)
- lever: p2-pt-primitive-role-charters (run lexr1, VALIDATED 8/8)

```lex
LEX Invitation Before Proposal.

"Host" is a person.
"Guest" is a person.
"Invitation" is a text.
"Acceptance" is a binary.
"Proposal" is a text.

The Host appoints the Guest, fixes the Invitation, and fixes the Proposal.

CLAUSE: Offer Relationship.
The Host may send the Invitation to the Guest.

CLAUSE: Accept Relationship.
The Guest may declare Acceptance.

CLAUSE: Propose.
The Host may, if Acceptance is declared, send the Proposal to the Guest.
```

Notes: carries invitation as acceptance-before-proposal ordering (the Propose send is gated on the Guest's declared Acceptance); the attack/imposition half is deliberately expressed as absence, no clause sends the Proposal ungated; omits the dark-pattern taxonomy and the MyTerms implementation table.

## LEXPVM-T-021 · Coordination Promise C(b)
- census: LEXPVM-T-021
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Coordination Promise C(b) § ### Coordination Promise C(b)
- lever: p2-pt-primitive-role-charters (run lexr1, VALIDATED 8/8)

```lex
LEX Coordination Promise.

"First Agent" is a person.
"Second Agent" is a person.
"Shared Body" is a text.
"First Adoption" is a binary.
"Second Adoption" is a binary.

The First Agent appoints the Second Agent, and fixes the Shared Body.

CLAUSE: Adopt.
The First Agent may declare First Adoption.

CLAUSE: Reciprocate.
The Second Agent may declare Second Adoption.

CLAUSE: Coordinate.
The First Agent or the Second Agent may, if First Adoption is declared and Second Adoption is declared, certify the Shared Body.
```

Notes: carries voluntary subordination around a shared body (adoption is 'may' on both sides, and the coordination certify is open to either agent only after both adoptions are declared); omits spell-notation interpretation duties and VRC-formation detail.

## LEXPVM-T-022 · Promise Bundle
- census: LEXPVM-T-022
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Promise Bundle § ### Promise Bundle
- lever: p2-pt-primitive-role-charters (run lexr1, VALIDATED 8/8)

```lex
LEX Promise Bundle.

"Promiser" is a person.
"Promisee" is a person.
"First Body" is a text.
"Second Body" is a text.
"Bundle" is data.
"Bundle Kept" is a binary.

The Promiser appoints the Promisee, fixes the First Body, and fixes the Second Body.

CLAUSE: Assemble.
The Promiser may file the Bundle.

CLAUSE: Deliver Bundle.
The Promiser may, if the Bundle is filed, send the First Body to the Promisee, and send the Second Body to the Promisee.

CLAUSE: Assess Bundle.
The Promisee may declare Bundle Kept.
```

Notes: carries grouping-for-reuse (one filed Bundle gates a single delivery clause moving both bodies together) and coordinated assessment (one Bundle Kept verdict covers the whole collection); omits the 70:1 reuse-efficiency quantification and VRC bilaterality.

## LEXPVM-T-023 · Scope
- census: LEXPVM-T-023
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Scope § ### Scope
- lever: p2-pt-primitive-role-charters (run lexr1, VALIDATED 8/8)

```lex
LEX Scope.

"Promiser" is a person.
"Insider" is a person.
"Outsider" is a person.
"Promise Body" is a text.

The Promiser appoints the Insider, appoints the Outsider, and fixes the Promise Body.

CLAUSE: Share Within Scope.
The Promiser may send the Promise Body to the Insider.
```

Notes: carries scope as reachability of send clauses (the Insider is the only send target; the Outsider exists in the contract yet no clause sends the Promise Body to the Outsider, so knowledge boundaries are the clause graph itself); omits the four-row scope table and the reconstruction-ceiling connection.

## LEXPVM-T-029 · Budget Constraint
- census: LEXPVM-T-029
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Budget Constraint
- lever: p1-defined-predicate-charter (run lexr1, VALIDATED 8/8)

```lex
LEX Budget Constraint.

"First Person" is a person.
"Swordsman" is a person.
"Mage" is a person.
"Counterparty" is a person.
"Constraint" is this contract.
"Leakage Budget" is an amount.
"Disclosure" is a text.
"Budget Spent" is a binary.

The First Person appoints the Swordsman, appoints the Mage, appoints the Counterparty, and fixes the Leakage Budget.

CLAUSE: Compose.
The Mage may register a Disclosure.

CLAUSE: Meter.
The Swordsman may declare Budget Spent.

CLAUSE: Within Budget.
"Within Budget" is defined as: the Leakage Budget is fixed and Budget Spent is not declared.

CLAUSE: Release.
The Mage may, if this Constraint is Within Budget: send the Disclosure to the Counterparty.
```

Notes: carries the budget as a First-Person-fixed amount, the Swordsman as meter, and the constraint as a defined predicate gating every release by the Mage; omits numeric leakage accounting in bits and gradual depletion, since the subset's only numeric literals are hour and day counts. Anchor: ### Budget Constraint.

## LEXPVM-T-047 · Witness (Ceremonial)
- census: LEXPVM-T-047
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Witness (Ceremonial)
- lever: p1-defined-predicate-charter (run lexr1, VALIDATED 8/8)

```lex
LEX Ceremonial Witness.

"Witness" is a person.
"First Agent" is a person.
"Second Agent" is a person.
"Ceremony" is this contract.
"Attestation" is a text.
"Ceremony Time" is a time.
"Presence Confirmed" is a binary.

The First Agent appoints the Second Agent, and appoints the Witness.

CLAUSE: Attend.
The Witness may declare Presence Confirmed.

CLAUSE: Mark Time.
The Witness may fix the Ceremony Time as the current time.

CLAUSE: Attested.
"Attested" is defined as: Presence Confirmed is declared and the Ceremony Time is fixed.

CLAUSE: Attest.
The Witness may, if this Ceremony is Attested: register an Attestation, and afterwards certify the Attestation.
```

Notes: carries the witness's two ceremonial duties (presence and time-marking) and makes attestation reachable only when the defined predicate Attested holds, with the attested afterwards chain register-then-certify; omits witness selection and any bilateral-witness credential chain. Anchor: ### Witness (Ceremonial).

## LEXPVM-T-050 · Chronicle
- census: LEXPVM-T-050
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Chronicle
- lever: p1-defined-predicate-charter (run lexr1, VALIDATED 8/8)

```lex
LEX Chronicle.

"Scribe" is a person.
"Keeper" is a person.
"Chronicle" is this contract.
"Session Record" is a text.
"Session Close Time" is a time.
"Verdict Given" is a binary.

The Keeper appoints the Scribe.

CLAUSE: Record.
The Scribe may register a Session Record.

CLAUSE: State Verdict.
The Scribe may declare Verdict Given.

CLAUSE: Mark Close.
The Scribe may fix the Session Close Time as the current time.

CLAUSE: Complete.
"Complete" is defined as: the Session Record is fixed and Verdict Given is declared and the Session Close Time is fixed.

CLAUSE: Seal.
The Keeper may, if this Chronicle is Complete: certify the Session Record.
```

Notes: carries verdict-first completeness as a three-part defined predicate (record present, verdict declared, close time marked) gating the Keeper's seal; omits chronicle content structure (handoff block, reversals recorded with equal prominence) and append-only storage. Anchor: ### Chronicle.

## LEXPVM-T-151 · The Temporal Thesis
- census: LEXPVM-T-151
- register: glossary · conjectured expression of conjectured term
- cites: glossary-master-v4 § ### The Temporal Thesis
- lever: p1-defined-predicate-charter (run lexr1, VALIDATED 8/8)

```lex
LEX The Temporal Thesis.

"First Person" is a person.
"Swordsman" is a person.
"Regime" is this contract.
"Disclosure" is a text.
"Disclosure Time" is a time.
"Ceiling Risen" is a binary.

The First Person appoints the Swordsman, and fixes the Disclosure.

CLAUSE: Mark Disclosure.
The Swordsman may fix the Disclosure Time as the current time.

CLAUSE: Observe Ceiling.
The Swordsman may declare Ceiling Risen.

CLAUSE: Shelf Expired.
"Shelf Expired" is defined as: the Disclosure Time lies at least 24 hours in the past, or Ceiling Risen is declared.

CLAUSE: Withdraw.
The Swordsman may, if this Regime is Shelf Expired: terminate this Regime.
```

Notes: carries protection-buys-time as the attested time-literal predicate (disclosure aged past a stated horizon) or an observed ceiling rise, either expiring the shelf and enabling withdrawal; omits the continuous decay function and the true shelf-life constant, the 24-hour literal is a stand-in since hour and day counts are the subset's only numbers. Anchor: ### The Temporal Thesis.

## LEXPVM-T-207 · Trust (0-1)
- census: LEXPVM-T-207
- register: pt-mapping · conjectured expression of canonical mapping
- cites: promise-theory-ref-v1-4 § ## Quick Reference: Concept Mappings
- lever: p1-defined-predicate-charter (run lexr1, VALIDATED 8/8)

```lex
LEX Trust Scalar.

"Truster" is a person.
"Trustee" is a person.
"Relationship" is this contract.
"Trust Level" is an amount.
"Promise Kept" is a binary.
"Promise Broken" is a binary.

The Truster appoints the Trustee.

CLAUSE: Set Level.
The Truster may fix the Trust Level.

CLAUSE: Assess Kept.
The Truster may declare Promise Kept.

CLAUSE: Assess Broken.
The Truster may declare Promise Broken.

CLAUSE: Trustworthy.
"Trustworthy" is defined as: Promise Kept is declared and Promise Broken is not declared.

CLAUSE: Reward.
The Truster may, if this Relationship is Trustworthy: certify the Trust Level.
```

Notes: carries trust as a truster-held scalar amount whose certification is gated on the defined predicate over the truster's own assessments (kept without broken), preserving that trust is assessed only by the promisee side; omits the 0 to 1 numeric range and the update rule, amounts carry no literals in the subset. Anchor: ## Quick Reference: Concept Mappings.

## LEXPVM-T-012 · Superagent
- census: LEXPVM-T-012
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Superagent
- lever: defined-predicate-charter held-out (run lexr1, assayer-authored, GATE PASS; keystone-folded per critic recipe-transfer finding)

```lex
LEX Superagent.

"First Person" is a person.
"Swordsman" is a person.
"Mage" is a person.
"Counterparty" is a person.
"Composite" is this contract.
"Exterior Promise" is a text.
"Protection Promised" is a binary.
"Delegation Promised" is a binary.
"Authorization Given" is a binary.

The First Person appoints the Swordsman, appoints the Mage, appoints the Counterparty, and fixes the Exterior Promise.

CLAUSE: Promise Protection.
The Swordsman may declare Protection Promised.

CLAUSE: Promise Delegation.
The Mage may declare Delegation Promised.

CLAUSE: Authorize.
The First Person may declare Authorization Given.

CLAUSE: Composed.
"Composed" is defined as: Protection Promised is declared and Delegation Promised is declared and Authorization Given is declared.

CLAUSE: Act Outward.
The Mage may, if this Composite is Composed: send the Exterior Promise to the Counterparty.
```

Notes: composition: the exterior promise is sendable only when all three interior declarations hold (Composed defined-as conjunction), the irreducible-composite property as clause structure; omits emergence formalism.

## LEXPVM-T-048 · SWORD Token
- census: LEXPVM-T-048
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### SWORD Token
- lever: defined-predicate-charter held-out (run lexr1, assayer-authored, GATE PASS; keystone-folded per critic recipe-transfer finding)

```lex
LEX SWORD Token.

"Swordsman" is a person.
"Registrar" is a person.
"Reward" is this contract.
"SWORD Token" is an amount.
"Guardianship" is a text.
"Protective Action Recorded" is a binary.
"Stake Pledged" is a binary.

The Registrar appoints the Swordsman, and fixes the SWORD Token.

CLAUSE: Record Action.
The Swordsman may declare Protective Action Recorded.

CLAUSE: Pledge Stake.
The Swordsman may declare Stake Pledged.

CLAUSE: Earned.
"Earned" is defined as: Protective Action Recorded is declared.

CLAUSE: Guardian Eligible.
"Guardian Eligible" is defined as: Protective Action Recorded is declared and Stake Pledged is declared.

CLAUSE: Pay Reward.
The Registrar may, if this Reward is Earned: pay the SWORD Token to the Swordsman.

CLAUSE: Grant Guardianship.
The Registrar may, if this Reward is Guardian Eligible: grant the Guardianship.
```

Notes: earning relation: token payment is gated on a declared protective action, guardianship on action plus stake (two defined predicates ordering the economy); omits token quantities and slashing.

## LEXPVM-T-090 · Four Forces (Protect, Project, Reflect, Connect)
- census: LEXPVM-T-090
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Four Forces (Protect, Project, Reflect, Connect)
- lever: defined-predicate-charter held-out (run lexr1, assayer-authored, GATE PASS; keystone-folded per critic recipe-transfer finding)

```lex
LEX Four Forces.

"First Person" is a person.
"Swordsman" is a person.
"Mage" is a person.
"Witness" is a person.
"Bridge" is a person.
"Force Model" is this contract.
"Memory Record" is a text.
"Network Record" is a text.
"Boundary Drawn" is a binary.
"Delegation Cast" is a binary.
"Separation Held" is a binary.

The First Person appoints the Swordsman, appoints the Mage, appoints the Witness, and appoints the Bridge.

CLAUSE: Draw Boundary.
The Swordsman may declare Boundary Drawn.

CLAUSE: Cast Delegation.
The Mage may declare Delegation Cast.

CLAUSE: Hold Separation.
The First Person may declare Separation Held.

CLAUSE: Fourfold.
"Fourfold" is defined as: Boundary Drawn is declared and Delegation Cast is declared and Separation Held is declared.

CLAUSE: Reflect.
The Witness may, if this Force Model is Fourfold: register the Memory Record.

CLAUSE: Connect.
The Bridge may, if this Force Model is Fourfold: register the Network Record.
```

Notes: four forces as four roles: protect and project are agent declarations, reflect and connect are registrations gated on the Fourfold conjunction; omits the force-to-capital mapping.

## LEXPVM-T-122 · Stratum
- census: LEXPVM-T-122
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Stratum
- lever: defined-predicate-charter held-out (run lexr1, assayer-authored, GATE PASS; keystone-folded per critic recipe-transfer finding)

```lex
LEX Stratum.

"Keeper" is a person.
"Agent" is a person.
"Placement" is this contract.
"Sovereignty Address" is a data.
"Stratum Level" is an amount.
"Weight Counted" is a binary.

The Keeper appoints the Agent, and fixes the Sovereignty Address.

CLAUSE: Count Weight.
The Keeper may declare Weight Counted.

CLAUSE: Set Level.
The Keeper may fix the Stratum Level.

CLAUSE: Placed.
"Placed" is defined as: the Sovereignty Address is fixed and Weight Counted is declared and the Stratum Level is fixed.

CLAUSE: Certify Placement.
The Keeper may, if this Placement is Placed: certify the Stratum Level.
```

Notes: placement relation: stratum certification requires address fixed, weight counted, and level fixed together (Placed defined-as conjunction); omits the popcount weight formula.

## LEXPVM-T-174 · Primary persona (Layer 1)
- census: LEXPVM-T-174
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### 23.1 Primary persona (Layer 1)
- lever: defined-predicate-charter held-out (run lexr1, assayer-authored, GATE PASS; keystone-folded per critic recipe-transfer finding)

```lex
LEX Primary Persona.

"Author" is a person.
"Reviewer" is a person.
"Registry" is this contract.
"Skill Loadout" is a text.
"Tier Register" is a text.
"Corpus Review Passed" is a binary.
"Roster Locked" is a binary.

The Reviewer appoints the Author.

CLAUSE: Fix Loadout.
The Author may fix the Skill Loadout.

CLAUSE: Fix Tier.
The Author may fix the Tier Register.

CLAUSE: Review.
The Reviewer may declare Corpus Review Passed.

CLAUSE: Lock Roster.
The Reviewer may declare Roster Locked.

CLAUSE: Admissible.
"Admissible" is defined as: the Skill Loadout is fixed and the Tier Register is fixed and Corpus Review Passed is declared and Roster Locked is not declared.

CLAUSE: Admit.
The Reviewer may, if this Registry is Admissible: register the Skill Loadout, and afterwards certify the Tier Register.
```

Notes: admission relation: registering a loadout requires review passed AND roster not locked (a negated predicate in the gate), then certification chains afterwards; omits tier semantics.

## LEXPVM-T-005 Â· Economic Parameters (Canonical)
- census: LEXPVM-T-005
- register: glossary Â· conjectured expression of canonical term
- cites: glossary-master-v4 Â§ ### Economic Parameters (Canonical)

```lex
LEX Economic Parameters.

"Keeper" is a person.
"Transparent Pool" is a person.
"Shielded Pool" is a person.
"Ceremony Fee" is an amount.
"Signal Fee" is an amount.
"Transparent Share" is an amount.
"Ceremony Complete" is a binary.

The Keeper appoints the Transparent Pool, appoints the Shielded Pool, fixes the Transparent Share, and pays the Ceremony Fee into escrow.

CLAUSE: Complete Ceremony.
The Keeper may declare Ceremony Complete.

CLAUSE: Split.
The Keeper may pay from escrow the Transparent Share to the Transparent Pool, and afterwards pay the remainder of the escrow to the Shielded Pool.

CLAUSE: Signal.
The Keeper may, if Ceremony Complete is declared: pay the Signal Fee into escrow.
```

Notes: Carries the canonical fee mechanics as ledger structure: one escrowed Ceremony Fee is exhausted by the transparent-share draw and afterwards the remainder flows to the Shielded Pool, so the two pools partition the whole fee by construction (conservation plus ordering, the split as subtraction), and ongoing Signal fees are payable only under the declared-ceremony gate, carrying one-time genesis before recurring signal (gate, ordering of fee frequencies). Omits: the golden-ratio split constants, the ZEC amounts and price basis, and internal pool allocations, none of which the subset can carry as literals. Anchor: ### Economic Parameters (Canonical). Folded from escrow-ledger-formula-charter (grammar-forward, run lexr2).

## LEXPVM-T-025 Â· Reconstruction Ceiling (R_max)
- census: LEXPVM-T-025
- register: glossary Â· conjectured expression of proven term
- cites: glossary-master-v4 Â§ ### Reconstruction Ceiling (R_max)

```lex
LEX Reconstruction Ceiling.

"First Person" is a person.
"Adversary" is a person.
"Gap" is a person.
"State Entropy" is an amount.
"Sword Leakage" is an amount.
"Mage Leakage" is an amount.
"Reconstruction" is a text.
"Channels Exhausted" is a binary.

The First Person pays the State Entropy into escrow, appoints the Adversary, appoints the Gap, fixes the Sword Leakage, and fixes the Mage Leakage.

CLAUSE: Drain Sword Channel.
The Adversary may pay from escrow the Sword Leakage to themselves.

CLAUSE: Drain Mage Channel.
The Adversary may pay from escrow the Mage Leakage to themselves.

CLAUSE: Exhaust.
The Adversary may declare Channels Exhausted.

CLAUSE: Reconstruct.
The Adversary may, if Channels Exhausted is declared: register a Reconstruction.

CLAUSE: Cap.
The First Person may, if Channels Exhausted is declared: return the remainder of the escrow to the Gap.
```

Notes: Structural: the ceiling as reachability (the Adversary can draw only the two fixed leakage amounts from the escrowed State Entropy, and a Reconstruction registers only after Channels Exhausted is declared; the remainder returns to the Gap and no clause routes it to the Adversary, so reconstruction stays strictly below the whole). Omits the ratio form R_max = (C_S + C_M) / H(X) and its numeric value. Anchor: ### Reconstruction Ceiling (R_max). Folded from escrow-conservation-charter (grammar-forward, run lexr2).

## LEXPVM-T-026 Â· Error Floor (P_e)
- census: LEXPVM-T-026
- register: glossary Â· conjectured expression of proven term
- cites: glossary-master-v4 Â§ ### Error Floor (P_e)

```lex
LEX Error Floor.

"First Person" is a person.
"Adversary" is a person.
"Gap" is a person.
"State Entropy" is an amount.
"Disclosed Portion" is an amount.
"Reconstruction Error" is a binary.
"Channels Drained" is a binary.

The First Person pays the State Entropy into escrow, appoints the Adversary, appoints the Gap, and fixes the Disclosed Portion.

CLAUSE: Drain.
The Adversary may pay from escrow the Disclosed Portion to themselves.

CLAUSE: Mark Drained.
The Adversary may declare Channels Drained.

CLAUSE: Keep Floor.
The Gap may, if Channels Drained is declared: return the remainder of the escrow to the First Person.

CLAUSE: Concede Error.
The Adversary must, if Channels Drained is declared: declare Reconstruction Error.
```

Notes: Structural: the floor as an unavoidable consequence (Concede Error is a must clause gated on Channels Drained, so once draining is complete the error declaration is obligatory rather than optional) and conservation (the Gap returns the undisclosed remainder to the First Person, and no clause pays it to the Adversary, which is what forces the error). Omits the inequality P_e is at least 1 minus R_max as a number. Anchor: ### Error Floor (P_e). Folded from escrow-conservation-charter (grammar-forward, run lexr2).

## LEXPVM-T-031 Â· Mutual Information I(X; Y)
- census: LEXPVM-T-031
- register: glossary Â· conjectured expression of canonical term
- cites: glossary-master-v4 Â§ ### Mutual Information I(X; Y)

```lex
LEX Mutual Information.

"Subject" is a person.
"Observer" is a person.
"Source Entropy" is an amount.
"Shared Information" is an amount.
"Observation Made" is a binary.

The Subject pays the Source Entropy into escrow, appoints the Observer, and fixes the Shared Information.

CLAUSE: Observe.
The Observer may declare Observation Made.

CLAUSE: Learn.
The Observer may, if Observation Made is declared: pay from escrow the Shared Information to themselves.

CLAUSE: Retain Privacy.
The Subject may, if Observation Made is declared: return the remainder of the escrow to the Subject.
```

Notes: Structural: gating (the Learn payout fires only after Observation Made is declared), conservation and directionality (the Observer can draw only the fixed Shared Information from the escrowed Source Entropy, and the remainder returns to the Subject alone, so what observation provides plus what stays private exhausts the source). Omits the symmetry I(X;Y) = I(Y;X) and the numeric measure in bits. Anchor: ### Mutual Information I(X; Y). Folded from escrow-conservation-charter (grammar-forward, run lexr2).

## LEXPVM-T-032 Â· Entropy H(X)
- census: LEXPVM-T-032
- register: glossary Â· conjectured expression of canonical term
- cites: glossary-master-v4 Â§ ### Entropy H(X)

```lex
LEX Entropy.

"First Person" is a person.
"Adversary" is a person.
"Swordsman" is a person.
"Mage" is a person.
"Gap" is a person.
"Total Uncertainty" is an amount.
"Sword Channel" is an amount.
"Mage Channel" is an amount.
"Observation Complete" is a binary.

The First Person pays the Total Uncertainty into escrow, appoints the Swordsman, appoints the Mage, appoints the Gap, appoints the Adversary, fixes the Sword Channel, and fixes the Mage Channel.

CLAUSE: Observe Swordsman.
The Adversary may pay from escrow the Sword Channel to themselves.

CLAUSE: Observe Mage.
The Adversary may pay from escrow the Mage Channel to themselves.

CLAUSE: Exhaust Observation.
The Adversary may declare Observation Complete.

CLAUSE: Remain Unknowable.
The First Person may, if Observation Complete is declared: return the remainder of the escrow to the Gap.
```

Notes: Structural: conservation as escrow arithmetic (the Sword Channel and Mage Channel payouts plus the returned remainder exhaust the escrowed Total Uncertainty), impossibility as an absent clause (no clause routes the remainder to the Adversary, so residual uncertainty survives any observation strategy), and ordering (the remainder moves only after Observation Complete is declared). Omits logarithms, the bit unit, and the numeric value of H(X). Anchor: ### Entropy H(X). Folded from escrow-conservation-charter (grammar-forward, run lexr2).

## LEXPVM-T-082 Â· Mountain of Entropy
- census: LEXPVM-T-082
- register: glossary Â· conjectured expression of canonical term
- cites: glossary-master-v4 Â§ ### Mountain of Entropy

```lex
LEX Mountain of Entropy.

"Keeper" is a person.
"Pilgrim" is a person.
"Identifier" is data.
"Meaning" is a text.
"Caught" is a binary.
"Claim" is this contract.

The Keeper appoints the Pilgrim, and fixes the Identifier.

CLAUSE: Fall.
The Keeper may send the Identifier to the Pilgrim.

CLAUSE: Catch.
The Pilgrim may declare Caught.

CLAUSE: Fix Meaning.
The Pilgrim may, if Caught is declared, fix the Meaning.

CLAUSE: Claimed.
"Claimed" is defined as: the Identifier is fixed and Caught is declared and the Meaning is fixed.

CLAUSE: Remember.
The Pilgrim may, if this Claim is Claimed: register the Meaning, and afterwards certify the Meaning.
```

Notes: Carries the assignment-before-significance ordering as a gated chain: the Identifier falls (send) before it can be Caught (declaration), the Meaning is fixable only after Caught is declared, and remembering opens only on the Claimed three-part conjunction, closing with the register-then-afterwards-certify chain; the gap between random assignment and claimed meaning is exactly the ordering between the Fall clause and the Fix Meaning gate. Omits the rain and river imagery and any entropy quantity. Anchor: ### Mountain of Entropy. Folded from quantity-gate-charter (canon-forward, run lexr2).

## LEXPVM-T-089 Â· Tetrahedral Sovereignty
- census: LEXPVM-T-089
- register: glossary Â· conjectured expression of convergent-preliminary term
- cites: glossary-master-v4 Â§ ### Tetrahedral Sovereignty

```lex
LEX Tetrahedral Sovereignty.

"First Person" is a person.
"Surveyor" is a person.
"Tetrahedron" is this contract.
"Architectural Volume" is an amount.
"Protect Held" is a binary.
"Project Held" is a binary.
"Reflect Held" is a binary.
"Connect Held" is a binary.

The First Person appoints the Surveyor, and fixes the Architectural Volume.

CLAUSE: Survey Protect.
The Surveyor may declare Protect Held.

CLAUSE: Survey Project.
The Surveyor may declare Project Held.

CLAUSE: Survey Reflect.
The Surveyor may, if Protect Held is declared: declare Reflect Held.

CLAUSE: Survey Connect.
The Surveyor may, if Project Held is declared: declare Connect Held.

CLAUSE: Sovereign.
"Sovereign" is defined as: Protect Held is declared and Project Held is declared and Reflect Held is declared and Connect Held is declared.

CLAUSE: Certify Volume.
The Surveyor may, if this Tetrahedron is Sovereign: certify the Architectural Volume.
```

Notes: four-force Sovereign conjunction gates the only certify of Architectural Volume; emergence ordering carried as Reflect and Connect declares gated on Protect and Project declares; only the Surveyor holds declare clauses. Omits the separation matrix determinant form and stratum arithmetic. Assayer-authored (formula-skeleton-charter held-out, recipe-only).

## LEXPVM-T-091 Â· Privacy Value Model (PVM)
- census: LEXPVM-T-091
- register: glossary Â· conjectured expression of conjectured term
- cites: glossary-master-v4 Â§ ### Privacy Value Model (PVM)

```lex
LEX Privacy Value Model.

"First Person" is a person.
"Assessor" is a person.
"Model" is this contract.
"Privacy Value" is an amount.
"Protection Present" is a binary.
"Coordination Present" is a binary.
"Quality Present" is a binary.
"Separation Present" is a binary.

The First Person appoints the Assessor, and fixes the Privacy Value.

CLAUSE: Assess Protection.
The Assessor may declare Protection Present.

CLAUSE: Assess Coordination.
The Assessor may declare Coordination Present.

CLAUSE: Assess Quality.
The Assessor may declare Quality Present.

CLAUSE: Assess Separation.
The Assessor may declare Separation Present.

CLAUSE: Valuable.
"Valuable" is defined as: Protection Present is declared and Coordination Present is declared and Quality Present is declared and Separation Present is declared.

CLAUSE: Release Value.
The Assessor may, if this Model is Valuable: certify the Privacy Value.
```

Notes: Carries the multiplicative any-zero-collapses composition as a four-factor conjunction defined predicate (Valuable) that is the only route to certifying the Privacy Value: one undeclared factor makes release structurally unreachable, the zero-collapse as clause topology. Omits the exponent on protection, temporal decay, network, guild, compression, market and path-integral factors, and all numeric calibration. Anchor: ### Privacy Value Model (PVM). Checker: GATE PASS (runs/lexr2/propose-scratch/t091_pvm.lex). Folded from formula-skeleton-charter (canon-forward, run lexr2).

## LEXPVM-T-092 Â· Separation Matrix (Î£), Agent Layer
- census: LEXPVM-T-092
- register: glossary Â· conjectured expression of conjectured term
- cites: glossary-master-v4 Â§ ### Separation Matrix (Î£), Agent Layer

```lex
LEX Separation Matrix.

"First Person" is a person.
"Auditor" is a person.
"Gap" is a person.
"Architectural Volume" is an amount.
"Sword Mage Entanglement" is an amount.
"Reflect Connect Entanglement" is an amount.
"Entanglement Measured" is a binary.
"Pair Collapsed" is a binary.
"Volume Collapsed" is a binary.

The First Person pays the Architectural Volume into escrow, appoints the Auditor, appoints the Gap, fixes the Sword Mage Entanglement, and fixes the Reflect Connect Entanglement.

CLAUSE: Measure.
The Auditor may declare Entanglement Measured.

CLAUSE: Drain Sword Mage Pair.
The Auditor may, if Entanglement Measured is declared: pay from escrow the Sword Mage Entanglement to the Gap.

CLAUSE: Drain Reflect Connect Pair.
The Auditor may, if Entanglement Measured is declared: pay from escrow the Reflect Connect Entanglement to the Gap.

CLAUSE: Collapse Pair.
The Auditor may declare Pair Collapsed.

CLAUSE: Concede Collapse.
The First Person must, if Pair Collapsed is declared: declare Volume Collapsed.

CLAUSE: Retain Volume.
The First Person may, if Entanglement Measured is declared: return the remainder of the escrow to the First Person.
```

Notes: conservation carried as pairwise entanglement drains plus the retained remainder exhausting the escrowed architectural volume; unavoidable consequence as a must clause (any pair collapse forces volume collapse, the multiplicative zero); impossibility as absence (no clause routes volume to the Auditor). Omits the four-by-four matrix entries and the determinant. Assayer-authored (escrow-conservation-charter held-out, recipe-only).

## LEXPVM-T-094 Â· Î¦_agent (Agent-Layer Separation)
- census: LEXPVM-T-094
- register: glossary Â· conjectured expression of conjectured term
- cites: glossary-master-v4 Â§ ### Î¦_agent (Agent-Layer Separation)

```lex
LEX Agent Layer Separation.

"First Person" is a person.
"Swordsman" is a person.
"Mage" is a person.
"Gap" is a person.
"Separation Value" is an amount.
"Entanglement Penalty" is an amount.
"Imbalance Penalty" is an amount.
"Balance Audited" is a binary.
"Entanglement Found" is a binary.
"Imbalance Found" is a binary.

The First Person pays the Separation Value into escrow, appoints the Swordsman, appoints the Mage, appoints the Gap, fixes the Entanglement Penalty, and fixes the Imbalance Penalty.

CLAUSE: Audit Balance.
The Gap may declare Balance Audited.

CLAUSE: Find Entanglement.
The Gap may declare Entanglement Found.

CLAUSE: Charge Entanglement.
The Gap may, if Entanglement Found is declared: pay from escrow the Entanglement Penalty to themselves.

CLAUSE: Find Imbalance.
The Gap may declare Imbalance Found.

CLAUSE: Charge Imbalance.
The Gap may, if Imbalance Found is declared: pay from escrow the Imbalance Penalty to themselves.

CLAUSE: Retain Separation.
The First Person may, if Balance Audited is declared: return the remainder of the escrow to the First Person.
```

Notes: ceiling as conservation (the retained separation value can never exceed the escrowed whole, the min cap); multiplicative dampening as conditional drains (entanglement and imbalance penalties shrink the remainder); impossibility as absence (no clause pays the Swordsman or the Mage any separation value). Omits the ratio formula and the determinant. Assayer-authored (escrow-conservation-charter held-out, recipe-only).

## LEXPVM-T-095 Â· Î¦_data (Data-Layer Separation)
- census: LEXPVM-T-095
- register: glossary Â· conjectured expression of conjectured term
- cites: glossary-master-v4 Â§ ### Î¦_data (Data-Layer Separation)

```lex
LEX Data Layer Separation.

"First Person" is a person.
"First Provider" is a person.
"Second Provider" is a person.
"Data Corpus" is an amount.
"First Shard" is an amount.
"Second Shard" is an amount.
"Separation" is this contract.
"First Shard Placed" is a binary.
"Second Shard Placed" is a binary.

The First Person pays the Data Corpus into escrow, appoints the First Provider, appoints the Second Provider, fixes the First Shard, and fixes the Second Shard.

CLAUSE: Place First Shard.
The First Person may pay from escrow the First Shard to the First Provider, and afterwards declare First Shard Placed.

CLAUSE: Place Second Shard.
The First Person may pay from escrow the Second Shard to the Second Provider, and afterwards declare Second Shard Placed.

CLAUSE: Fragmented.
"Fragmented" is defined as: First Shard Placed is declared and Second Shard Placed is declared.

CLAUSE: Hold Residue.
The First Person may, if this Separation is Fragmented: return the remainder of the escrow to the First Person.
```

Notes: fragmentation carried as two shard outflows each with an afterwards declaration (ordering); the Fragmented defined conjunction gates holding the residue; conservation = shards plus retained residue exhaust the escrowed corpus. Omits the separation formula and provider counts. Assayer-authored (escrow-conservation-recipe held-out, recipe-only).

## LEXPVM-T-098 Â· Edge Value T(Ï€) â†’ Path Integral T_âˆ«(Ï€) (V5)
- census: LEXPVM-T-098
- register: glossary Â· conjectured expression of conjectured term
- cites: glossary-master-v4 Â§ ### Edge Value T(Ï€) â†’ Path Integral T_âˆ«(Ï€) (V5)

```lex
LEX Path Integral.

"Traveler" is a person.
"Verifier" is a person.
"Path" is this contract.
"Early Edge Value" is an amount.
"Late Edge Value" is an amount.
"Trajectory Value" is an amount.
"Checkpoint Verified" is a binary.

The Verifier appoints the Traveler, fixes the Early Edge Value, fixes the Late Edge Value, and fixes the Trajectory Value.

CLAUSE: Traverse Early.
The Traveler may pay the Early Edge Value into escrow.

CLAUSE: Verify Checkpoint.
The Verifier may declare Checkpoint Verified.

CLAUSE: Traverse Late.
The Traveler may, if Checkpoint Verified is declared: pay the Late Edge Value into escrow.

CLAUSE: Integrated.
"Integrated" is defined as: the Early Edge Value is fixed and the Late Edge Value is fixed and Checkpoint Verified is declared.

CLAUSE: Certify Trajectory.
The Verifier may, if this Path is Integrated: certify the Trajectory Value, and pay from escrow the Trajectory Value to the Traveler.
```

Notes: checkpoint-gates-later-traversal ordering carried as the Late Edge inflow reachable only after the Verifier Checkpoint Verified declaration (edge non-independence as gating); accumulation as escrow conservation; the Integrated conjunction gates the only certify and outflow; the Traveler cannot verify its own checkpoint. Omits the integral form and the beta coefficient. Assayer-authored (formula-skeleton-charter held-out, recipe-only).

## LEXPVM-T-099 Â· Path Integral T_âˆ«(Ï€) (V5)
- census: LEXPVM-T-099
- register: glossary Â· conjectured expression of conjectured term
- cites: glossary-master-v4 Â§ ### Path Integral T_âˆ«(Ï€) (V5)

```lex
LEX Path Integral.

"Keeper" is a person.
"Traveler" is a person.
"Base Value" is an amount.
"First Edge Contribution" is an amount.
"Second Edge Contribution" is an amount.
"Path" is this contract.
"First Edge Walked" is a binary.
"Second Edge Walked" is a binary.

The Keeper appoints the Traveler, and fixes the Base Value.

CLAUSE: Walk First Edge.
The Traveler may pay the First Edge Contribution into escrow, and afterwards declare First Edge Walked.

CLAUSE: Walk Second Edge.
The Traveler may, if First Edge Walked is declared: pay the Second Edge Contribution into escrow, and afterwards declare Second Edge Walked.

CLAUSE: Traversed.
"Traversed" is defined as: First Edge Walked is declared and Second Edge Walked is declared.

CLAUSE: Pay Path Value.
The Keeper may, if this Path is Traversed: pay the Base Value to the Traveler, and afterwards pay the remainder of the escrow to the Traveler.
```

Notes: Carries integration as ordered accumulation: each edge deposits a contribution into escrow and the second edge is gated on the first's declaration (path order as a condition chain, so a later contribution cannot precede an earlier one), and the payout equals the fixed Base Value plus the accumulated escrow, the one-plus-integral shape of the formula, firing only when the defined predicate Traversed conjoins both edge declarations. Omits beta, the density function F, non-local correlations beyond ordering, and continuous integration. Anchor: ### Path Integral T_âˆ«(Ï€) (V5). Folded from escrow-conservation-recipe (grammar-forward, run lexr2).

## LEXPVM-T-101 Â· Temporal Memory A(Ï„) â†’ Holonic Temporal Memory A_h(Ï„) (V5)
- census: LEXPVM-T-101
- register: glossary Â· conjectured expression of conjectured term
- cites: glossary-master-v4 Â§ ### Temporal Memory A(Ï„) â†’ Holonic Temporal Memory A_h(Ï„) (V5)

```lex
LEX Temporal Memory.

"First Person" is a person.
"Verifier" is a person.
"Gap" is a person.
"Step Value" is an amount.
"Integrity Discount" is an amount.
"Persistence Discount" is an amount.
"Step Verified" is a binary.
"Proof Missing" is a binary.
"Provider Failed" is a binary.
"Holonic Persistence Established" is a binary.

The First Person appoints the Verifier, appoints the Gap, fixes the Step Value, fixes the Integrity Discount, and fixes the Persistence Discount.

CLAUSE: Verify Step.
The Verifier may declare Step Verified.

CLAUSE: Accumulate.
The First Person may, if Step Verified is declared: pay the Step Value into escrow.

CLAUSE: Flag Proof Gap.
The Verifier may declare Proof Missing.

CLAUSE: Dampen Integrity.
The Verifier may, if Proof Missing is declared: pay from escrow the Integrity Discount to the Gap.

CLAUSE: Flag Provider Failure.
The Verifier may declare Provider Failed.

CLAUSE: Dampen Persistence.
The Verifier may, if Provider Failed is declared: pay from escrow the Persistence Discount to the Gap.

CLAUSE: Establish Persistence.
The First Person may declare Holonic Persistence Established.

CLAUSE: Retain Memory.
The First Person may, if Holonic Persistence Established is declared: return the remainder of the escrow to the First Person.
```

Notes: accumulation ordering (each deposit gated on a declared verified step); dampening as conditional drains (integrity and persistence discounts leave escrow only under their declared failure binaries); conservation = deposits equal drains plus retained remainder; holonic persistence as the gate on retaining the remainder. Omits the logarithmic formula and alpha. Assayer-authored (escrow-conservation-charter held-out, recipe-only).

## LEXPVM-T-108 Â· Guild Efficiency G(guilds) (V5)
- census: LEXPVM-T-108
- register: glossary Â· conjectured expression of conjectured term
- cites: glossary-master-v4 Â§ ### Guild Efficiency G(guilds) (V5)

```lex
LEX Guild Efficiency.

"Guild Member" is a person.
"Peer" is a person.
"Parent" is a person.
"Assessor" is a person.
"Guild" is this contract.
"Pattern" is a text.
"Efficiency Gain" is an amount.
"Pattern Received" is a binary.
"Coverage Measured" is a binary.

The Assessor appoints the Guild Member, appoints the Peer, appoints the Parent, and fixes the Efficiency Gain.

The Guild Member fixes the Pattern.

CLAUSE: Share Pattern.
The Guild Member may send the Pattern to the Parent.

CLAUSE: Receive Pattern.
The Parent may declare Pattern Received.

CLAUSE: Relay Pattern.
The Parent may, if Pattern Received is declared: send the Pattern to the Peer.

CLAUSE: Measure Coverage.
The Assessor may declare Coverage Measured.

CLAUSE: Efficient.
"Efficient" is defined as: Pattern Received is declared and Coverage Measured is declared.

CLAUSE: Certify Gain.
The Assessor may, if this Guild is Efficient: certify the Efficiency Gain.
```

Notes: shared-parent coordination carried as only-route topology (the sole clause reaching the Peer is the Parent relay gated on the Parent own Pattern Received declaration; no member-to-peer send exists); the Efficient conjunction gates the only certify of Efficiency Gain; the Guild Member holds no declare clause. Omits the one-plus-efficiency formula. Assayer-authored (formula-skeleton-charter held-out, recipe-only).

## LEXPVM-T-112 Â· BRAID Parity Effect (V5)
- census: LEXPVM-T-112
- register: glossary Â· conjectured expression of reported term
- cites: glossary-master-v4 Â§ ### BRAID Parity Effect (V5)

```lex
LEX BRAID Parity Effect.

"First Person" is a person.
"Evaluator" is a person.
"Reasoning Graph" is data.
"Nano Capacity" is an amount.
"Medium Capacity" is an amount.
"Parity Reached" is a binary.
"Benchmark" is this contract.

The First Person appoints the Evaluator, fixes the Nano Capacity, and fixes the Medium Capacity.

CLAUSE: Structure.
The First Person may fix the Reasoning Graph.

CLAUSE: Compare.
The Evaluator may, if the Reasoning Graph is fixed, declare Parity Reached.

CLAUSE: Structured Parity.
"Structured Parity" is defined as: the Nano Capacity is fixed and the Reasoning Graph is fixed and Parity Reached is declared.

CLAUSE: Certify Parity.
The Evaluator may, if this Benchmark is Structured Parity: certify the Nano Capacity.
```

Notes: structured-reasoning parity carried as a defined conjunction (nano capacity fixed, reasoning graph fixed, parity declared) gating the only certify of the Nano Capacity; ordering = the parity comparison is reachable only after the reasoning graph is fixed. Omits benchmark scores and model sizes. Assayer-authored (quantity-gate-charter held-out, recipe-only); keystone Notes.

## LEXPVM-T-123 Â· Stratum Weight (wáµ¢)
- census: LEXPVM-T-123
- register: glossary Â· conjectured expression of conjectured term
- cites: glossary-master-v4 Â§ ### Stratum Weight (wáµ¢)

```lex
LEX Stratum Weight.

"Keeper" is a person.
"Member" is a person.
"Network Term" is this contract.
"Stratum Weight" is an amount.
"Contribution" is an amount.
"Membership Verified" is a binary.

The Keeper appoints the Member, and fixes the Stratum Weight.

CLAUSE: Verify Membership.
The Keeper may declare Membership Verified.

CLAUSE: Weighted.
"Weighted" is defined as: the Stratum Weight is fixed and Membership Verified is declared.

CLAUSE: Count Contribution.
The Member may, if this Network Term is Weighted: pay the Contribution into escrow.

CLAUSE: Collect Sum.
The Keeper may pay from escrow the Contribution to themselves.
```

Notes: Carries weight-gates-counting: a member's Contribution enters the network sum (the escrow) only when the Stratum Weight is fixed and Membership Verified is declared (the Weighted conjunction), and the sum is collectable only from escrow, so an unweighted or unverified member cannot add to the network term; the escrow inflow-then-outflow carries the summation ordering. Omits the Pascal-row binomial weight values over sixty-four, the modal-stratum maximum, and the network exponent; amounts carry no numeric literals in the subset. Anchor: ### Stratum Weight (wáµ¢). Checker: GATE PASS (runs/lexr2/propose-scratch/t123_stratum_weight.lex). Folded from formula-skeleton-charter (canon-forward, run lexr2).

## LEXPVM-T-128 Â· Betweenness Centrality
- census: LEXPVM-T-128
- register: glossary Â· conjectured expression of canonical term
- cites: glossary-master-v4 Â§ ### Betweenness Centrality

```lex
LEX Betweenness Centrality.

"Source" is a person.
"Target" is a person.
"Gap" is a person.
"Graph" is this contract.
"Message" is a text.
"Relay Received" is a binary.

The Source appoints the Gap, appoints the Target, and fixes the Message.

CLAUSE: Send To Gap.
The Source may send the Message to the Gap.

CLAUSE: Receive.
The Gap may declare Relay Received.

CLAUSE: On Path.
"On Path" is defined as: the Message is fixed and Relay Received is declared.

CLAUSE: Relay.
The Gap may, if this Graph is On Path: send the Message to the Target.
```

Notes: Carries maximal betweenness as only-route topology plus ordering: the sole clause that reaches the Target is held by the Gap and gated on the Gap's own Relay Received declaration (the On Path conjunction), and the Source has no direct send-to-Target clause, so every source-to-target path crosses the Gap, the node-on-all-shortest-paths property as clause-graph structure. Omits the shortest-path ratio formula and the counting algorithm. Anchor: ### Betweenness Centrality. Checker: GATE PASS (runs/lexr2/propose-scratch/t128_betweenness.lex). Folded from formula-skeleton-charter (canon-forward, run lexr2).

## LEXPVM-T-131 Â· Charge Level
- census: LEXPVM-T-131
- register: glossary Â· conjectured expression of implemented term
- cites: glossary-master-v4 Â§ ### Charge Level

```lex
LEX Charge Level.

"Celebrant" is a person.
"Witness" is a person.
"Lap Charge" is an amount.
"Charge Level" is an amount.
"Lap Complete" is a binary.
"Ceremony Closed" is a binary.

The Celebrant appoints the Witness, fixes the Lap Charge, and fixes the Charge Level.

CLAUSE: Run Lap.
The Celebrant may declare Lap Complete.

CLAUSE: Accumulate.
The Celebrant may, if Lap Complete is declared: pay the Lap Charge into escrow.

CLAUSE: Read Level.
The Witness may, if Lap Complete is declared: certify the Charge Level.

CLAUSE: Close.
The Celebrant may declare Ceremony Closed.

CLAUSE: Discharge.
The Witness may, if Ceremony Closed is declared: return the remainder of the escrow to the Celebrant.
```

Notes: Structural: accumulation ordering (each Lap Charge deposit is gated on a declared Lap Complete, so intensity grows only lap by lap, and the Witness certifies the Charge Level only once a lap stands declared) and close-gated discharge (the remainder returns to the Celebrant only after Ceremony Closed is declared, and no clause withdraws charge earlier). Omits the lap-count level table and numeric intensity values. Anchor: ### Charge Level. Folded from escrow-conservation-charter (grammar-forward, run lexr2).

## LEXPVM-T-132 Â· 21 Windows
- census: LEXPVM-T-132
- register: glossary Â· conjectured expression of documented term
- cites: glossary-master-v4 Â§ ### 21 Windows

```lex
LEX Twenty One Windows.

"Forge Keeper" is a person.
"Mage" is a person.
"Swordsman" is a person.
"Witness" is a person.
"Window Inventory" is an amount.
"Spell Windows" is an amount.
"Forged Windows" is an amount.

The Forge Keeper appoints the Mage, appoints the Swordsman, appoints the Witness, and pays the Window Inventory into escrow.

CLAUSE: Allot.
The Forge Keeper may pay from escrow the Spell Windows to the Mage, and afterwards pay from escrow the Forged Windows to the Swordsman, and afterwards pay the remainder of the escrow to the Witness.
```

Notes: ordered partition carried as one afterwards chain (spell windows, then forged windows, then the remainder to the Witness); conservation = the three allotments exhaust the escrowed window inventory. Omits the numeric window counts. Assayer-authored (escrow-ledger-formula-charter held-out, recipe-only); keystone Notes.

## LEXPVM-T-135 Â· Hexagram Encoding
- census: LEXPVM-T-135
- register: glossary Â· conjectured expression of documented term
- cites: glossary-master-v4 Â§ ### Hexagram Encoding

```lex
LEX Hexagram Encoding.

"Mage" is a person.
"Reader" is a person.
"Line Weight" is an amount.
"Hexagram" is a text.
"Protection Line Set" is a binary.
"Delegation Line Set" is a binary.
"Memory Line Set" is a binary.
"Connection Line Set" is a binary.
"Computation Line Set" is a binary.
"Value Line Set" is a binary.
"Lines Complete" is a binary.

The Mage appoints the Reader, and fixes the Line Weight.

CLAUSE: Raise Protection Line.
The Mage may declare Protection Line Set.

CLAUSE: Weigh Protection Line.
The Mage may, if Protection Line Set is declared: pay the Line Weight into escrow.

CLAUSE: Raise Delegation Line.
The Mage may declare Delegation Line Set.

CLAUSE: Weigh Delegation Line.
The Mage may, if Delegation Line Set is declared: pay the Line Weight into escrow.

CLAUSE: Raise Memory Line.
The Mage may declare Memory Line Set.

CLAUSE: Weigh Memory Line.
The Mage may, if Memory Line Set is declared: pay the Line Weight into escrow.

CLAUSE: Raise Connection Line.
The Mage may declare Connection Line Set.

CLAUSE: Weigh Connection Line.
The Mage may, if Connection Line Set is declared: pay the Line Weight into escrow.

CLAUSE: Raise Computation Line.
The Mage may declare Computation Line Set.

CLAUSE: Weigh Computation Line.
The Mage may, if Computation Line Set is declared: pay the Line Weight into escrow.

CLAUSE: Raise Value Line.
The Mage may declare Value Line Set.

CLAUSE: Weigh Value Line.
The Mage may, if Value Line Set is declared: pay the Line Weight into escrow.

CLAUSE: Close Lines.
The Mage may declare Lines Complete.

CLAUSE: Read Hexagram.
The Reader may, if Lines Complete is declared: register a Hexagram.

CLAUSE: Discharge.
The Reader may, if Lines Complete is declared: return the remainder of the escrow to the Mage.
```

Notes: six-fold composition as one gated deposit per privacy-dimension line, accumulating in escrow; ordering = a line weighs in only after its line stands declared, and the Reader registers the Hexagram and discharges only after Lines Complete; conservation = the six line weights exhaust what returns to the Mage. Omits the sixty-four state count and the named blade mappings. Assayer-authored (escrow-conservation-charter held-out, recipe-only).

## LEXPVM-T-136 Â· Mana Economy
- census: LEXPVM-T-136
- register: glossary Â· conjectured expression of specified term
- cites: glossary-master-v4 Â§ ### Mana Economy

```lex
LEX Mana Economy.

"Practitioner" is a person.
"Registry" is a person.
"Earned Mana" is an amount.
"Inscription Cost" is an amount.
"Inscription" is a text.
"Practice Complete" is a binary.

The Practitioner appoints the Registry, fixes the Earned Mana, and fixes the Inscription Cost.

CLAUSE: Practice.
The Practitioner may declare Practice Complete.

CLAUSE: Earn.
The Practitioner may, if Practice Complete is declared: pay the Earned Mana into escrow.

CLAUSE: Inscribe.
The Practitioner may, if Practice Complete is declared: pay from escrow the Inscription Cost to the Registry, and afterwards register an Inscription.

CLAUSE: Conserve.
The Practitioner may return the remainder of the escrow to the Practitioner.
```

Notes: Structural: earn-before-spend ordering (the deposit clause is gated on Practice Complete, and the Inscribe payout draws only from escrow, so spending presupposes earning), the pay-then-register afterwards chain (an Inscription registers only after its cost is paid), and non-transferability as absence (no clause sends or pays mana to any person except the Registry cost sink, and the remainder returns to the Practitioner alone). Omits numeric mana quantities, prices, and regeneration rates. Anchor: ### Mana Economy. Folded from escrow-conservation-charter (grammar-forward, run lexr2).

## LEXPVM-T-137 Â· Mana Bridge
- census: LEXPVM-T-137
- register: glossary Â· conjectured expression of specified term
- cites: glossary-master-v4 Â§ ### Mana Bridge

```lex
LEX Mana Bridge.

"Extension Agent" is a person.
"Territory Agent" is a person.
"Mana Balance" is an amount.
"Bridge" is this contract.
"Home Territory Detected" is a binary.
"Balance Read" is a binary.

The Extension Agent pays the Mana Balance into escrow, and appoints the Territory Agent.

CLAUSE: Detect Home Territory.
The Extension Agent may declare Home Territory Detected.

CLAUSE: Read Balance.
The Extension Agent may, if Home Territory Detected is declared: declare Balance Read.

CLAUSE: Synced.
"Synced" is defined as: Home Territory Detected is declared and Balance Read is declared.

CLAUSE: Sync Balance.
The Extension Agent must, if this Bridge is Synced: pay from escrow the Mana Balance to the Territory Agent.

CLAUSE: Preserve Balance.
The Extension Agent may, if Balance Read is not declared: return the remainder of the escrow to the Extension Agent.
```

Notes: one-directional sync carried as a must clause (a synced bridge forces the balance to the Territory Agent); the Synced defined conjunction gates it; preservation = the remainder returns only while Balance Read stays undeclared (negated-condition guard). Omits mana magnitudes. Assayer-authored (escrow-conservation-recipe held-out, recipe-only); keystone Notes.

## LEXPVM-T-147 Â· Quantum Threshold
- census: LEXPVM-T-147
- register: glossary Â· conjectured expression of documented term
- cites: glossary-master-v4 Â§ ### Quantum Threshold

```lex
LEX Quantum Threshold.

"Key Holder" is a person.
"Quantum Adversary" is a person.
"Key Entropy" is an amount.
"Logical Qubit Budget" is an amount.
"Toffoli Budget" is an amount.
"Threshold" is this contract.
"Machine Assembled" is a binary.
"Broadcast Time" is a time.

The Key Holder pays the Key Entropy into escrow, appoints the Quantum Adversary, fixes the Logical Qubit Budget, and fixes the Toffoli Budget.

CLAUSE: Assemble Machine.
The Quantum Adversary may declare Machine Assembled.

CLAUSE: Broadcast.
The Key Holder may fix the Broadcast Time as the current time.

CLAUSE: Crossed.
"Crossed" is defined as: the Logical Qubit Budget is fixed and the Toffoli Budget is fixed and Machine Assembled is declared and the Broadcast Time is fixed.

CLAUSE: Crack On Spend.
The Quantum Adversary may, if this Threshold is Crossed: pay from escrow the Key Entropy to themselves.

CLAUSE: Keep Residue.
The Key Holder may, if Machine Assembled is not declared: return the remainder of the escrow to the Key Holder.
```

Notes: threshold carried as a four-conjunct defined condition (both budgets fixed, machine assembled, broadcast time fixed) gating the adversary drain of the escrowed key entropy; the residue returns only while Machine Assembled stays undeclared. Omits qubit and Toffoli counts and timeline estimates. Assayer-authored (escrow-conservation-recipe held-out, recipe-only); keystone Notes.

## LEXPVM-T-148 Â· 2D Fortress
- census: LEXPVM-T-148
- register: glossary Â· conjectured expression of reported term
- cites: glossary-master-v4 Â§ ### 2D Fortress

```lex
LEX Two Dimensional Fortress.

"Key Holder" is a person.
"Quantum Adversary" is a person.
"Verifier" is a person.
"Scalar Secret" is an amount.
"Public Point" is a text.
"Period Found" is a binary.

The Key Holder appoints the Verifier, appoints the Quantum Adversary, pays the Scalar Secret into escrow, and afterwards registers the Public Point.

CLAUSE: Find Period.
The Quantum Adversary may declare Period Found.

CLAUSE: Reverse The Multiplication.
The Quantum Adversary may, if Period Found is declared: pay from escrow the Scalar Secret to themselves.
```

Notes: direction is load-bearing and stated here: the fortress FALLS. Period-finding gates the Quantum Adversary draining the escrowed scalar secret, and the Key Holder holds no reclaiming clause (impossibility on the defender side, by absence). The lexr2.3 critic flagged direction-elasticity on exactly this entry; the checker cannot falsify a wrong-direction expression, so the direction lives in this Notes line by design. Omits curve arithmetic and period-finding detail. Assayer-authored (escrow-ledger-formula-charter held-out, recipe-only); keystone Notes.

## LEXPVM-T-149 Â· The 62-Lap Theorem
- census: LEXPVM-T-149
- register: glossary Â· conjectured expression of documented term
- cites: glossary-master-v4 Â§ ### The 62-Lap Theorem

```lex
LEX Sixty Two Lap Theorem.

"Practitioner" is a person.
"Adversary" is a person.
"Witness" is a person.
"Traversal Mass" is an amount.
"Reconstruction Claim" is an amount.
"Laps Complete" is a binary.

The Practitioner appoints the Witness, appoints the Adversary, and pays the Traversal Mass into escrow.

CLAUSE: Complete Laps.
The Witness may declare Laps Complete.

CLAUSE: Claim Reconstruction.
The Adversary may pay from escrow the Reconstruction Claim to themselves.

CLAUSE: Irreducible Presence.
The Witness may, if Laps Complete is declared: return the remainder of the escrow to the Practitioner.
```

Notes: irreducible presence carried as the witness-gated return of the remainder (the return fires only after Laps Complete is declared); the adversary reconstruction claim drains only part; conservation = claim plus retained remainder exhaust the escrowed traversal mass. Omits the lap count and the derivation. Assayer-authored (escrow-ledger-formula-charter held-out, recipe-only); keystone Notes.

## LEXPVM-T-194 Â· Moving Ceiling R(t) and Shelf Life t*
- census: LEXPVM-T-194
- register: glossary Â· conjectured expression of conjectured term
- cites: glossary-master-v4 Â§ ### 25.2 Moving Ceiling R(t) and Shelf Life t*

```lex
LEX Moving Ceiling.

"First Person" is a person.
"Auditor" is a person.
"Adversary" is a person.
"Total Uncertainty" is an amount.
"Adversary Capacity" is an amount.
"Proof Time" is a time.
"Full Reconstruction" is a text.
"Capacity Grown" is a binary.
"Guarantee" is this contract.

The First Person appoints the Auditor, appoints the Adversary, and fixes the Total Uncertainty.

CLAUSE: Mark Proof.
The Auditor may fix the Proof Time as the current time.

CLAUSE: Grow.
The Auditor may, if the Proof Time lies at least 30 days in the past, fix the Adversary Capacity.

CLAUSE: Observe Growth.
The Auditor may, if the Adversary Capacity is fixed, declare Capacity Grown.

CLAUSE: Expired.
"Expired" is defined as: the Adversary Capacity is fixed and Capacity Grown is declared.

CLAUSE: Reconstruct.
The Adversary may, if this Guarantee is Expired: register a Full Reconstruction.
```

Notes: Carries the moving-ceiling asymmetry as temporal clause structure: the Total Uncertainty is fixed once in the recital (time-independent), while the Adversary Capacity becomes fixable only through the attested time predicate (Proof Time lies at least 30 days in the past), so capacity grows with elapsed time and the protected entropy does not; reconstruction is reachable only through the Expired defined-predicate gate, and the pre-expiry impossibility is clause absence. Omits the continuous R(t) function and the true shelf-life constant; the 30-day literal is a stand-in, since hour and day counts are the subset's only numbers. Term name truncated here per hard constraint; the keystone should carry the cites anchor verbatim from CENSUS.json. Folded from quantity-gate-charter (canon-forward, run lexr2).

## LEXPVM-T-200 Â· Parity Cube Â· Octahedral Gap
- census: LEXPVM-T-200
- register: glossary Â· conjectured expression of conjectured term
- cites: glossary-master-v4 Â§ ### 25.8 Parity Cube Â· Octahedral Gap

```lex
LEX Parity Cube and Octahedral Gap.

"Geometer" is a person.
"Dual Geometer" is a person.
"Gap" is a person.
"Lattice Volume" is an amount.
"Parity Cover" is an amount.
"Octahedral Cover" is an amount.
"Parity Read" is a binary.
"Dual Read" is a binary.

The Geometer pays the Lattice Volume into escrow, appoints the Dual Geometer, appoints the Gap, fixes the Parity Cover, and fixes the Octahedral Cover.

CLAUSE: Read Parity.
The Geometer may declare Parity Read.

CLAUSE: Claim Parity Cube.
The Geometer may, if Parity Read is declared: pay from escrow the Parity Cover to themselves.

CLAUSE: Read Dual.
The Dual Geometer may declare Dual Read.

CLAUSE: Claim Octahedron.
The Dual Geometer may, if Dual Read is declared: pay from escrow the Octahedral Cover to themselves.

CLAUSE: Keep Gap Open.
The Gap may, if Dual Read is declared: return the remainder of the escrow to the Gap.
```

Notes: conservation = parity cover plus octahedral cover plus the open remainder exhaust the escrowed lattice volume, the octahedral gap being the remainder itself, held by the Gap; ordering = each cover is drawn only after its reading stands declared; impossibility as absence (no clause lets either geometer take the remainder, the gap stays open at candidate strength). Omits the lattice cardinality and the cube-of-cubes decomposition. Assayer-authored (escrow-conservation-charter held-out, recipe-only).

## LEXPVM-T-201 Â· Regime 1 Â· ðŸª¢ Presence Mana
- census: LEXPVM-T-201
- register: glossary Â· conjectured expression of specified term
- cites: glossary-master-v4 Â§ ### 25.9 Regime 1 Â· ðŸª¢ Presence Mana

```lex
LEX Presence Mana Regime One.

"First Person" is a person.
"Bearer" is a person.
"Witness" is a person.
"Presence Color" is data.
"Mana Charge" is an amount.
"Locally Present" is a binary.
"Regime Fence" is this contract.

The First Person appoints the Bearer, and appoints the Witness.

CLAUSE: Show Presence.
The Bearer may declare Locally Present.

CLAUSE: Color.
The Bearer may, if Locally Present is declared, fix the Presence Color.

CLAUSE: Charge.
The Bearer may, if Locally Present is declared, fix the Mana Charge.

CLAUSE: Carried As Color.
"Carried As Color" is defined as: the Presence Color is fixed and Locally Present is declared.

CLAUSE: Keep.
The Bearer may, if this Regime Fence is Carried As Color: register the Presence Color.
```

Notes: regime fence carried as a defined conjunction (presence color fixed and locally present declared) gating the only register; ordering = color and charge are fixable only after Locally Present is declared; impossibility as absence (no clause moves the Mana Charge anywhere: presence mana is non-transferable in regime one). Omits color values and charge magnitude. Assayer-authored (quantity-gate-charter held-out, recipe-only); keystone Notes.

