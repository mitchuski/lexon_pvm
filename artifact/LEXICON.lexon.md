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

Vacuity rule (adopted from the lexr1 critic, 2026-07-10): the Notes line must
name at least one STRUCTURAL relation the expression captures (a gate, an
ordering, a conjunction, an impossibility), not only what is omitted. An entry
whose content rides entirely in name strings the checker cannot inspect is
syntactically legal but does not deserve a fold.

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
