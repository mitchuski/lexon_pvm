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

## LEXPVM-T-005 · Economic Parameters (Canonical)
- census: LEXPVM-T-005
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Economic Parameters (Canonical)

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

## LEXPVM-T-025 · Reconstruction Ceiling (R_max)
- census: LEXPVM-T-025
- register: glossary · conjectured expression of proven term
- cites: glossary-master-v4 § ### Reconstruction Ceiling (R_max)

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

## LEXPVM-T-026 · Error Floor (P_e)
- census: LEXPVM-T-026
- register: glossary · conjectured expression of proven term
- cites: glossary-master-v4 § ### Error Floor (P_e)

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

## LEXPVM-T-031 · Mutual Information I(X; Y)
- census: LEXPVM-T-031
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Mutual Information I(X; Y)

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

## LEXPVM-T-032 · Entropy H(X)
- census: LEXPVM-T-032
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Entropy H(X)
- relation: {"type":"absence","to":"Adversary","what":"escrow-remainder"}

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

## LEXPVM-T-082 · Mountain of Entropy
- census: LEXPVM-T-082
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Mountain of Entropy

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

## LEXPVM-T-089 · Tetrahedral Sovereignty
- census: LEXPVM-T-089
- register: glossary · conjectured expression of convergent-preliminary term
- cites: glossary-master-v4 § ### Tetrahedral Sovereignty

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

## LEXPVM-T-091 · Privacy Value Model (PVM)
- census: LEXPVM-T-091
- register: glossary · conjectured expression of conjectured term
- cites: glossary-master-v4 § ### Privacy Value Model (PVM)

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

## LEXPVM-T-092 · Separation Matrix (Σ), Agent Layer
- census: LEXPVM-T-092
- register: glossary · conjectured expression of conjectured term
- cites: glossary-master-v4 § ### Separation Matrix (Σ), Agent Layer
- relation: {"type":"gate","clause":"Retain Volume","condition":"Entanglement Measured"}

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

## LEXPVM-T-094 · Φ_agent (Agent-Layer Separation)
- census: LEXPVM-T-094
- register: glossary · conjectured expression of conjectured term
- cites: glossary-master-v4 § ### Φ_agent (Agent-Layer Separation)

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

## LEXPVM-T-095 · Φ_data (Data-Layer Separation)
- census: LEXPVM-T-095
- register: glossary · conjectured expression of conjectured term
- cites: glossary-master-v4 § ### Φ_data (Data-Layer Separation)

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

## LEXPVM-T-098 · Edge Value T(π) → Path Integral T_∫(π) (V5)
- census: LEXPVM-T-098
- register: glossary · conjectured expression of conjectured term
- cites: glossary-master-v4 § ### Edge Value T(π) → Path Integral T_∫(π) (V5)

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

## LEXPVM-T-099 · Path Integral T_∫(π) (V5)
- census: LEXPVM-T-099
- register: glossary · conjectured expression of conjectured term
- cites: glossary-master-v4 § ### Path Integral T_∫(π) (V5)

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

Notes: Carries integration as ordered accumulation: each edge deposits a contribution into escrow and the second edge is gated on the first's declaration (path order as a condition chain, so a later contribution cannot precede an earlier one), and the payout equals the fixed Base Value plus the accumulated escrow, the one-plus-integral shape of the formula, firing only when the defined predicate Traversed conjoins both edge declarations. Omits beta, the density function F, non-local correlations beyond ordering, and continuous integration. Anchor: ### Path Integral T_∫(π) (V5). Folded from escrow-conservation-recipe (grammar-forward, run lexr2).

## LEXPVM-T-101 · Temporal Memory A(τ) → Holonic Temporal Memory A_h(τ) (V5)
- census: LEXPVM-T-101
- register: glossary · conjectured expression of conjectured term
- cites: glossary-master-v4 § ### Temporal Memory A(τ) → Holonic Temporal Memory A_h(τ) (V5)

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

## LEXPVM-T-108 · Guild Efficiency G(guilds) (V5)
- census: LEXPVM-T-108
- register: glossary · conjectured expression of conjectured term
- cites: glossary-master-v4 § ### Guild Efficiency G(guilds) (V5)

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

## LEXPVM-T-112 · BRAID Parity Effect (V5)
- census: LEXPVM-T-112
- register: glossary · conjectured expression of reported term
- cites: glossary-master-v4 § ### BRAID Parity Effect (V5)

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

## LEXPVM-T-123 · Stratum Weight (wᵢ)
- census: LEXPVM-T-123
- register: glossary · conjectured expression of conjectured term
- cites: glossary-master-v4 § ### Stratum Weight (wᵢ)

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

Notes: Carries weight-gates-counting: a member's Contribution enters the network sum (the escrow) only when the Stratum Weight is fixed and Membership Verified is declared (the Weighted conjunction), and the sum is collectable only from escrow, so an unweighted or unverified member cannot add to the network term; the escrow inflow-then-outflow carries the summation ordering. Omits the Pascal-row binomial weight values over sixty-four, the modal-stratum maximum, and the network exponent; amounts carry no numeric literals in the subset. Anchor: ### Stratum Weight (wᵢ). Checker: GATE PASS (runs/lexr2/propose-scratch/t123_stratum_weight.lex). Folded from formula-skeleton-charter (canon-forward, run lexr2).

## LEXPVM-T-128 · Betweenness Centrality
- census: LEXPVM-T-128
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Betweenness Centrality

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

## LEXPVM-T-131 · Charge Level
- census: LEXPVM-T-131
- register: glossary · conjectured expression of implemented term
- cites: glossary-master-v4 § ### Charge Level

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

## LEXPVM-T-132 · 21 Windows
- census: LEXPVM-T-132
- register: glossary · conjectured expression of documented term
- cites: glossary-master-v4 § ### 21 Windows

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

## LEXPVM-T-135 · Hexagram Encoding
- census: LEXPVM-T-135
- register: glossary · conjectured expression of documented term
- cites: glossary-master-v4 § ### Hexagram Encoding

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

## LEXPVM-T-136 · Mana Economy
- census: LEXPVM-T-136
- register: glossary · conjectured expression of specified term
- cites: glossary-master-v4 § ### Mana Economy

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

## LEXPVM-T-137 · Mana Bridge
- census: LEXPVM-T-137
- register: glossary · conjectured expression of specified term
- cites: glossary-master-v4 § ### Mana Bridge

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

## LEXPVM-T-147 · Quantum Threshold
- census: LEXPVM-T-147
- register: glossary · conjectured expression of documented term
- cites: glossary-master-v4 § ### Quantum Threshold

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

## LEXPVM-T-148 · 2D Fortress
- census: LEXPVM-T-148
- register: glossary · conjectured expression of reported term
- cites: glossary-master-v4 § ### 2D Fortress
- relation: {"type":"absence","to":"Key Holder","what":"Scalar Secret"}

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

## LEXPVM-T-149 · The 62-Lap Theorem
- census: LEXPVM-T-149
- register: glossary · conjectured expression of documented term
- cites: glossary-master-v4 § ### The 62-Lap Theorem

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

## LEXPVM-T-194 · Moving Ceiling R(t) and Shelf Life t*
- census: LEXPVM-T-194
- register: glossary · conjectured expression of conjectured term
- cites: glossary-master-v4 § ### 25.2 Moving Ceiling R(t) and Shelf Life t*

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

## LEXPVM-T-200 · Parity Cube · Octahedral Gap
- census: LEXPVM-T-200
- register: glossary · conjectured expression of conjectured term
- cites: glossary-master-v4 § ### 25.8 Parity Cube · Octahedral Gap

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

## LEXPVM-T-201 · Regime 1 · 🪢 Presence Mana
- census: LEXPVM-T-201
- register: glossary · conjectured expression of specified term
- cites: glossary-master-v4 § ### 25.9 Regime 1 · 🪢 Presence Mana

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

## LEXPVM-T-037 · Verifiable Relationship Credential (VRC)
- census: LEXPVM-T-037
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Verifiable Relationship Credential (VRC)
- relation: {"type":"conjunction","predicate":"Credential Earned","conjuncts":["First Compression","Second Compression","Compressions Match"]}

```lex
LEX Verifiable Relationship Credential.

"First Practitioner" is a person.
"Second Practitioner" is a person.
"Relationship" is this contract.
"Shared Content" is a text.
"First Compression" is a text.
"Second Compression" is a text.
"Credential" is a text.
"Compressions Match" is a binary.

The First Practitioner registers the Shared Content.

CLAUSE: Compress Apart.
The First Practitioner may file the First Compression.

CLAUSE: Compress Again.
The Second Practitioner may file the Second Compression.

CLAUSE: Match.
The First Practitioner or the Second Practitioner may declare Compressions Match.

CLAUSE: Credential Earned.
"Credential Earned" is defined as: First Compression is filed and Second Compression is filed and Compressions Match is declared.

CLAUSE: Issue.
The First Practitioner or the Second Practitioner may, if this Relationship is Credential Earned: register the Credential.
```

Notes: carries the bilateral formation process as a conjunction: the defined predicate Credential Earned requires both independently filed compressions AND the declared match, and issuance is gated on that predicate with either party able to issue (mutual comprehension without central authority, a bilateral promise bundle). Omits the coordination-efficiency ratio and the proverb compression mechanics. Folded from promise-bundle-spell (spell-grammar, run lexr3).

## LEXPVM-T-038 · Trust Tier
- census: LEXPVM-T-038
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Trust Tier
- relation: {"type":"gate","clause":"Exercise","condition":"Tier Advanced"}

```lex
LEX Trust Tier.

"Participant" is a person.
"Assessor" is a person.
"Signal Record" is data.
"Basic Capability" is a text.
"Higher Capability" is a text.
"Tier Advanced" is a binary.

The Assessor appoints the Participant.

CLAUSE: Participate.
The Participant may register the Basic Capability.

CLAUSE: Accumulate.
The Participant may file the Signal Record.

CLAUSE: Advance.
The Assessor may, if Signal Record is filed: declare Tier Advanced.

CLAUSE: Exercise.
The Participant may, if Tier Advanced is declared: register the Higher Capability.
```

Notes: carries progressive capability as a two-stage gate: the Higher Capability's only route is the Exercise clause conditional on the Assessor's Tier Advanced declaration, itself gated on the Participant's filed Signal Record (tiers as accumulated positive assessments, advancement declared by the assessing side never by the gated side). Omits the four named tiers, signal counts, and trust ranges, since numeric literals are out of subset. Folded from promise-bundle-spell (spell-grammar, run lexr3).

## LEXPVM-T-039 · Guardian
- census: LEXPVM-T-039
- register: glossary · conjectured expression of documented term
- cites: glossary-master-v4 § ### Guardian
- relation: {"type":"absence","to":"Guardian","what":"Stake"}

```lex
LEX Guardian Charter.

"Guardian" is a person.
"City" is a person.
"Stake" is an amount.
"Validation" is a text.
"Dragon Tier Held" is a binary.
"Integrity Breach" is a binary.

The City appoints the Guardian.

CLAUSE: Qualify.
The City may declare Dragon Tier Held.

CLAUSE: Commit Stake.
The Guardian may, if Dragon Tier Held is declared: pay the Stake into escrow.

CLAUSE: Validate.
The Guardian must file the Validation.

CLAUSE: Slash.
The City may, if Integrity Breach is declared: pay from escrow the Stake to themselves.
```

Notes: carries the stake's irreversibility as an impossibility by absence: no transfer clause routes the Stake back to the Guardian, so the valency commitment cannot be reclaimed from the guardian's side; staking is gated on the City's Dragon Tier declaration and validation is a binding duty (must, not may). Direction is load-bearing: slashing routes the escrowed Stake to the City on a declared breach, never back. Omits the stake denomination and the signal threshold, and the source section is WIP status so the register stays documented. Folded from promise-bundle-spell (spell-grammar, run lexr3).

## LEXPVM-T-041 · Signal
- census: LEXPVM-T-041
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Signal
- relation: {"type":"ordering","clause":"Post Signal","sequence":["register:Comprehension Proof","pay:Signal Fee"]}

```lex
LEX Signal.

"Practitioner" is a person.
"Network" is a person.
"Signal Fee" is an amount.
"Comprehension Proof" is a text.
"Ceremony Complete" is a binary.

The Practitioner appoints the Network, and fixes the Signal Fee.

CLAUSE: Complete Ceremony.
The Practitioner may declare Ceremony Complete.

CLAUSE: Post Signal.
The Practitioner may, if Ceremony Complete is declared: register a Comprehension Proof, and afterwards pay the Signal Fee into escrow.

CLAUSE: Receive.
The Network may, if Ceremony Complete is declared: certify the Comprehension Proof.
```

Notes: Structural: ordering (within Post Signal the Comprehension Proof registers before the Signal Fee is escrowed, assessment before stake, the skin-in-the-game direction) under a gate (every signal clause is conditional on Ceremony Complete, carrying the one-time-genesis-before-recurring-signal contrast the glossary states against Ceremony). Omits the ZEC fee constant and the transparent/shielded split ratio, which the subset cannot carry as literals. Checker: GATE PASS + RELATION PASS (runs/lexr3/lexr3.1/propose-scratch/t041_signal.lex). Folded from temporal-spine-lifecycle-charter (grammar-forward, run lexr3).

## LEXPVM-T-044 · Moon Ceremony (🌙)
- census: LEXPVM-T-044
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Moon Ceremony (🌙)
- relation: {"type":"conjunction","predicate":"Converged","conjuncts":["First Trace","Second Trace"]}

```lex
LEX Moon Ceremony.

"First Practitioner" is a person.
"Second Practitioner" is a person.
"Swordsman" is a person.
"Ceremony" is this contract.
"Poem" is a text.
"Blade Proof" is a text.
"First Trace" is a binary.
"Second Trace" is a binary.

The First Practitioner appoints the Second Practitioner, appoints the Swordsman, and fixes the Poem.

CLAUSE: Trace First.
The First Practitioner may declare First Trace.

CLAUSE: Trace Second.
The Second Practitioner may declare Second Trace.

CLAUSE: Converged.
"Converged" is defined as: First Trace is declared and Second Trace is declared.

CLAUSE: Draw Edge.
The Swordsman may, if this Ceremony is Converged: certify the Blade Proof.
```

Notes: Structural: conjunction (Converged requires both trace declarations, and each is declarable only by its own practitioner, the autonomy partition of independent tracing) gating the single certify of the Blade Proof; the Draw Edge clause is held by the Swordsman alone (the Swordsman decides whether the edge is worth drawing) and by neither practitioner, so the blade belongs to no tracer as clause topology. Omits the rhythm/rhyme role split and the gap-ownership formalism. Checker: GATE PASS + RELATION PASS (runs/lexr3/lexr3.1/propose-scratch/t044_moon_ceremony.lex). Folded from temporal-spine-lifecycle-charter (grammar-forward, run lexr3).

## LEXPVM-T-045 · The Circuit (Ceremonial Propagation)
- census: LEXPVM-T-045
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### The Circuit (Ceremonial Propagation)
- relation: {"type":"gate","clause":"Begin Again","condition":"Origin Forgotten"}

```lex
LEX The Circuit.

"Sun" is a person.
"Witness" is a person.
"New Sun" is a person.
"Light" is a text.
"Sun Time" is a time.
"Light Carried" is a binary.
"Origin Forgotten" is a binary.

The Sun appoints the Witness, appoints the New Sun, and fixes the Light.

CLAUSE: Shine.
The Sun may send the Light to the Witness, and afterwards fix the Sun Time as the current time.

CLAUSE: Carry.
The Witness may, if the Sun Time is fixed, declare Light Carried.

CLAUSE: Forget.
The Witness may, if Light Carried is declared, declare Origin Forgotten.

CLAUSE: Begin Again.
The Witness may, if Origin Forgotten is declared: send the Light to the New Sun.
```

Notes: Structural: gate cascade as orbital ordering (the Light is sent and afterwards the Sun Time is marked; carrying is conditional on the time being fixed; forgetting is conditional on carrying; and the onward send to the New Sun is conditional on Origin Forgotten): the circuit propagates through forgetting, not instruction, as reachability structure, with the claimed gate on the re-seeding step. Omits the sun/moon ceremony pairing detail and the property that the new practitioner believes they invented it. Checker: GATE PASS + RELATION PASS (runs/lexr3/lexr3.1/propose-scratch/t045_the_circuit.lex). Folded from temporal-spine-lifecycle-charter (grammar-forward, run lexr3).

## LEXPVM-T-133 · Evoke Ceremony
- census: LEXPVM-T-133
- register: glossary · conjectured expression of documented term
- cites: glossary-master-v4 § ### Evoke Ceremony
- relation: {"type":"ordering","clause":"Evoke","sequence":["register:Constellation","certify:Circuit","register:Cast","file:Trace","declare:Ceremony Complete","register:Blade Proof"]}

```lex
LEX Evoke Ceremony.

"Practitioner" is a person.
"Constellation" is a text.
"Circuit" is a text.
"Cast" is a text.
"Trace" is data.
"Blade Proof" is data.
"Ceremony Complete" is a binary.

CLAUSE: Evoke.
The Practitioner may register the Constellation, and afterwards certify the Circuit, and afterwards register the Cast, and afterwards file the Trace, and afterwards declare Ceremony Complete, and afterwards register the Blade Proof.
```

Notes: carries the ceremony's canonical phase order as an ordering: the single Evoke clause performs Constellation, Circuit, Cast, Trace, Complete, Proof in exactly the attested sequence under one officiant, and the blade proof is generated last (proof follows tracing, never precedes it). Omits wandering-orb physics and knowledge-graph traversal detail. Folded from promise-bundle-spell (spell-grammar, run lexr3).

## LEXPVM-T-139 · Inscription Reinforcement
- census: LEXPVM-T-139
- register: glossary · conjectured expression of specified term
- cites: glossary-master-v4 § ### Inscription Reinforcement
- relation: {"type":"gate","clause":"Decay","condition":"Decay Period"}

```lex
LEX Inscription Reinforcement.

"Curator" is a person.
"Keeper" is a person.
"Inscription" is this contract.
"Community Mark" is a text.
"Reinforcement Time" is a time.
"Mana Spent" is a binary.

The Keeper appoints the Curator, and fixes the Community Mark.

CLAUSE: Spend Mana.
The Curator may declare Mana Spent.

CLAUSE: Reinforce.
The Curator may, if Mana Spent is declared, fix the Reinforcement Time as the current time.

CLAUSE: Decay Period.
"Decay Period" is defined as 30 days after the Reinforcement Time.

CLAUSE: Decay.
The Keeper may, if the Decay Period has passed, terminate this Inscription.
```

Notes: Structural: gate (the Decay clause's terminate is reachable only once the defined Decay Period, 30 days after the Reinforcement Time, has passed) with an upstream gate (re-marking the Reinforcement Time is conditional on Mana Spent, so reinforcement costs mana and holds decay off). Omits the 0.5 mana price and reset arithmetic; the 30-day literal is the attested number form (days-after period and has-passed condition per lexon-example-statement). Checker: GATE PASS + RELATION PASS (runs/lexr3/lexr3.1/propose-scratch/t139_inscription_reinforcement.lex). Folded from temporal-spine-lifecycle-charter (grammar-forward, run lexr3).

## LEXPVM-T-153 · Amnesia Protocol
- census: LEXPVM-T-153
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Amnesia Protocol
- relation: {"type":"gate","clause":"Serve","condition":"Forgotten"}

```lex
LEX Amnesia Protocol.

"Principal" is a person.
"Emissary" is a person.
"Protocol" is this contract.
"Service" is a text.
"Derivation Time" is a time.
"Service Verified" is a binary.

The Principal appoints the Emissary, and fixes the Service.

CLAUSE: Mark Derivation.
The Principal may fix the Derivation Time as the current time.

CLAUSE: Forgotten.
"Forgotten" is defined as: the Derivation Time lies at least 24 hours in the past.

CLAUSE: Serve.
The Emissary may, if this Protocol is Forgotten: send the Service to the Principal.

CLAUSE: Verify Service.
The Principal may, if this Protocol is Forgotten: declare Service Verified.
```

Notes: Structural: gate (both the Emissary's send of the Service and the Principal's verification declaration are conditional on the defined predicate Forgotten, which holds only when the Derivation Time lies at least 24 hours in the past): service and its verification become reachable only after the origin has aged out, forgetting as the protocol itself, verify-without-remembering as clause topology. Omits the zero-knowledge primitive formalism and the Theia cosmology; the 24-hour literal is a stand-in shelf constant (lies-at-least predicate per lexon-example-license). Checker: GATE PASS + RELATION PASS (runs/lexr3/lexr3.1/propose-scratch/t153_amnesia_protocol.lex). Folded from temporal-spine-lifecycle-charter (grammar-forward, run lexr3).

## LEXPVM-T-159 · Spellbook Close
- census: LEXPVM-T-159
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Spellbook Close
- relation: {"type":"conjunction","predicate":"Closed","conjuncts":["Arc Complete","Close Time"]}

```lex
LEX Spellbook Close.

"First Person" is a person.
"Scribe" is a person.
"Spellbook" is this contract.
"Continuation Act" is a text.
"Close Time" is a time.
"Arc Complete" is a binary.

The First Person appoints the Scribe, and fixes the Continuation Act.

CLAUSE: Answer Arc.
The First Person may declare Arc Complete.

CLAUSE: Mark Tide.
The Scribe may, if Arc Complete is declared, fix the Close Time as the current time.

CLAUSE: Closed.
"Closed" is defined as: Arc Complete is declared and the Close Time is fixed.

CLAUSE: Continue Elsewhere.
The Scribe may, if this Spellbook is Closed: register a Continuation Act.
```

Notes: Structural: conjunction (Closed requires the arc answered AND the close time marked, both together) gating the only register of a Continuation Act, so continuation is reachable only through closure, a tide not a lock as clause topology; upstream ordering (the tide mark is itself conditional on Arc Complete, answered-before-closed). Omits the five-spellbook taxonomy, the HOW/WHEN/WHY/WHERE act taxonomy, and the salt-inscription imagery. Checker: GATE PASS + RELATION PASS (runs/lexr3/lexr3.1/propose-scratch/t159_spellbook_close.lex). Folded from temporal-spine-lifecycle-charter (grammar-forward, run lexr3).

## LEXPVM-T-204 · Agent
- census: LEXPVM-T-204
- register: pt-mapping · conjectured expression of canonical mapping
- cites: promise-theory-ref-v1-4 § ## Quick Reference: Concept Mappings
- relation: {"type":"absence","to":"Neighbor","what":"Assessment"}

```lex
LEX Promise Agent.

"Agent" is a person.
"Neighbor" is a person.
"Own Conduct" is a text.
"Peer Conduct" is a text.
"Assessment" is an amount.

The Agent fixes the Own Conduct.
The Neighbor fixes the Peer Conduct.

CLAUSE: Promise Own Conduct.
The Agent may send the Own Conduct to the Neighbor.

CLAUSE: Assess.
The Agent may fix the Assessment, and afterwards certify the Assessment.
```

Notes: Structural: independent assessment as impossibility (no transfer clause routes the Assessment to the Neighbor: an agent's assessment is local and never transfers, so trust is not transitive), plus the Autonomy Axiom in recital shape (each person fixes only its own conduct, and the only promise route to the Neighbor carries the Agent's Own Conduct). Omits: the assessment function alpha(pi) semantics and multi-neighbor topology; modeled minimally with one neighbor. Anchor: ## Quick Reference: Concept Mappings. Folded from pt-primitive-polarity-charter (canon-forward, run lexr3).

## LEXPVM-T-205 · µ-promise: A --b--> B
- census: LEXPVM-T-205
- register: pt-mapping · conjectured expression of canonical mapping
- cites: promise-theory-ref-v1-4 § ## Quick Reference: Concept Mappings
- relation: {"type":"absence","to":"Promiser","what":"Promised Benefit"}

```lex
LEX Micro Promise.

"Promiser" is a person.
"Promisee" is a person.
"Body" is a text.
"Promised Benefit" is an amount.

The Promiser appoints the Promisee, fixes the Body, and fixes the Promised Benefit.

CLAUSE: Give.
The Promiser may send the Body to the Promisee.

CLAUSE: Keep.
The Promiser may pay the Promised Benefit to the Promisee.
```

Notes: Structural: directionality as impossibility (the promised benefit routes only from promiser to promisee; no transfer clause routes the Promised Benefit back to the Promiser, so the edge A --b--> B is unilateral commitment, not exchange), and voluntariness as modal may on both edges. Omits: the promise body typing (tau, chi) and the promisee's acceptance, which is the minus pole carried by T-211. Anchor: ## Quick Reference: Concept Mappings. Folded from pt-primitive-polarity-charter (canon-forward, run lexr3).

## LEXPVM-T-206 · Conditional Promise (b\
- census: LEXPVM-T-206
- register: pt-mapping · conjectured expression of canonical mapping
- cites: promise-theory-ref-v1-4 § ## Quick Reference: Concept Mappings
- relation: {"type":"gate","clause":"Keep","condition":"Condition Met"}

```lex
LEX Conditional Promise.

"Promiser" is a person.
"Promisee" is a person.
"Body" is a text.
"Condition Met" is a binary.

The Promiser appoints the Promisee, and fixes the Body.

CLAUSE: Observe.
The Promiser may declare Condition Met.

CLAUSE: Keep.
The Promiser may, if Condition Met is declared, send the Body to the Promisee.
```

Notes: Structural: contingency as gate (the Body moves to the Promisee only through the declared Condition Met; strip the gate and the text collapses to an unconditional micro promise, which is exactly the mutation twin), and the condition is observed by the promiser itself (Observe clause: assessment of c is also autonomous). Omits: the mapped conditional-independence reading (Swordsman and Mage independent given X) and any probability semantics. Anchor: ## Quick Reference: Concept Mappings. Folded from pt-primitive-polarity-charter (canon-forward, run lexr3).

## LEXPVM-T-208 · Invitation
- census: LEXPVM-T-208
- register: pt-mapping · conjectured expression of canonical mapping
- cites: promise-theory-ref-v1-4 § ## Quick Reference: Concept Mappings
- relation: {"type":"conjunction","predicate":"Standing","conjuncts":["Terms","Acceptance"]}

```lex
LEX Invitation.

"First Party" is a person.
"Second Party" is a person.
"Terms" is a text.
"Acceptance" is a binary.
"Proposal" is a text.
"Relationship" is this contract.

The First Party appoints the Second Party, fixes the Terms, and fixes the Proposal.

CLAUSE: Proffer.
The First Party may send the Terms to the Second Party.

CLAUSE: Accept.
The Second Party may declare Acceptance.

CLAUSE: Standing.
"Standing" is defined as: the Terms is fixed and Acceptance is declared.

CLAUSE: Propose.
The First Party may, if this Relationship is Standing: send the Proposal to the Second Party.
```

Notes: Structural: invitation as conjunction (the defined predicate Standing requires BOTH proffered Terms fixed AND declared Acceptance; drop either conjunct and the proposal loses its warrant, the mutation twin drops Terms and models consent without proffered terms), plus the ordering it induces (Propose is gated on Standing, so the acceptance relationship strictly precedes any specific proposal, the canon's own definition of invitation). Omits: MyTerms agreement-taxonomy content and renegotiation of terms. Anchor: ## Quick Reference: Concept Mappings. Folded from pt-primitive-polarity-charter (canon-forward, run lexr3).

## LEXPVM-T-209 · Imposition/Attack
- census: LEXPVM-T-209
- register: pt-mapping · conjectured expression of canonical mapping
- cites: promise-theory-ref-v1-4 § ## Quick Reference: Concept Mappings
- relation: {"type":"absence","to":"Imposer","what":"Data Value"}

```lex
LEX Imposition.

"Imposer" is a person.
"Target" is a person.
"Swordsman" is a person.
"Unsolicited Proposal" is a text.
"Acceptance" is a binary.
"Data Value" is an amount.
"Refused" is a binary.

The Imposer fixes the Unsolicited Proposal.
The Target appoints the Swordsman, and fixes the Data Value.

CLAUSE: Impose.
The Imposer may send the Unsolicited Proposal to the Target.

CLAUSE: Guard.
The Swordsman may, if Acceptance is not declared, declare Refused.
```

Notes: Structural: attack as ungated send (the Impose clause carries no acceptance condition, the deliberate structural contrast with Invitation's Standing-gated Propose), refusal gated on non-acceptance (Guard fires only while Acceptance is not declared), and extraction as impossibility (no transfer clause routes the Target's Data Value to the Imposer: the text grants imposition no economy, surveillance extraction never succeeds by this contract). Omits: dark-pattern taxonomy and post-hoc consent rationalization. Anchor: ## Quick Reference: Concept Mappings. Folded from pt-primitive-polarity-charter (canon-forward, run lexr3).

## LEXPVM-T-210 · (+) Give Promise
- census: LEXPVM-T-210
- register: pt-mapping · conjectured expression of canonical mapping
- cites: promise-theory-ref-v1-4 § ## Quick Reference: Concept Mappings
- relation: {"type":"ordering","clause":"Give","sequence":["fix:Protection Offer","send:Protection Offer"]}

```lex
LEX Give Promise.

"Swordsman" is a person.
"First Person" is a person.
"Protection Offer" is a text.

The Swordsman appoints the First Person.

CLAUSE: Give.
The Swordsman may fix the Protection Offer, and afterwards send the Protection Offer to the First Person.
```

Notes: Structural: outbound polarity as ordering (in Give the Swordsman first fixes the Protection Offer and afterwards sends it: commitment precedes emission, one cannot give an unbound offer; the reversed order is exactly the mutation twin), and the plus pole as the actor being the promiser (the offer originates with the Swordsman and flows outward to the First Person). Omits: the promisee's use/acceptance (the minus pole, T-211) and the protection content itself. Anchor: ## Quick Reference: Concept Mappings. Folded from pt-primitive-polarity-charter (canon-forward, run lexr3).

## LEXPVM-T-211 · (-) Use/Accept Promise
- census: LEXPVM-T-211
- register: pt-mapping · conjectured expression of canonical mapping
- cites: promise-theory-ref-v1-4 § ## Quick Reference: Concept Mappings
- relation: {"type":"gate","clause":"Use","condition":"Delegation Given"}

```lex
LEX Accept Promise.

"First Person" is a person.
"Mage" is a person.
"Delegation" is a text.
"Delegation Given" is a binary.
"Accepted Task" is a text.

The First Person appoints the Mage, and fixes the Delegation.

CLAUSE: Offer.
The First Person may declare Delegation Given.

CLAUSE: Use.
The Mage may, if Delegation Given is declared, register the Accepted Task.
```

Notes: Structural: inbound polarity as gate (Use fires only if Delegation Given is declared: acceptance can never precede the give, a minus-polarity promise consumes an existing plus-polarity offer; the ungated twin is a self-authorized delegate, exactly what inbound authorization forbids). Omits: scope negotiation and the assessment of whether the accepted delegation is kept. Anchor: ## Quick Reference: Concept Mappings. Folded from pt-primitive-polarity-charter (canon-forward, run lexr3).

## LEXPVM-T-027 · Selene's Proof
- census: LEXPVM-T-027
- register: glossary · conjectured expression of documented term
- cites: glossary-master-v4 § ### Selene's Proof
- relation: {"type":"gate","clause":"Verify","condition":"Amnesiac"}

```lex
LEX Selene's Proof.

"Moon" is a person.
"Verifier" is a person.
"Proof" is this contract.
"Tide Mark" is a text.
"Impact Time" is a time.
"Orbit Held" is a binary.

The Moon appoints the Verifier, and fixes the Tide Mark.

CLAUSE: Impact.
The Moon may fix the Impact Time as the current time.

CLAUSE: Hold Orbit.
The Moon may, if the Impact Time is fixed, declare Orbit Held.

CLAUSE: Amnesiac.
"Amnesiac" is defined as: the Impact Time lies at least 24 hours in the past.

CLAUSE: Verify.
The Verifier may, if this Proof is Amnesiac: certify the Tide Mark.
```

Notes: the aging law as a defined temporal predicate (Amnesiac = the impact time lies at least 24 hours in the past) gating the only certify; ordering = orbit holds only after the impact time is fixed. Omits the proof arithmetic and the moon-lore framing. Assayer-authored (temporal-spine-lifecycle-charter held-out, recipe-only); keystone Notes.

## LEXPVM-T-034 · Trusted Execution Environment (TEE)
- census: LEXPVM-T-034
- register: glossary · conjectured expression of specified term
- cites: glossary-master-v4 § ### Trusted Execution Environment (TEE)
- relation: {"type":"gate","clause":"Process","condition":"Attestation Verified"}

```lex
LEX Trusted Execution Environment.

"Operator" is a person.
"Enclave" is a person.
"Verifier" is a person.
"Workload" is data.
"Measurement" is data.
"Result" is a text.
"Attestation Verified" is a binary.

The Operator appoints the Enclave.

CLAUSE: Seal.
The Operator may file the Workload.

CLAUSE: Measure.
The Enclave may file the Measurement.

CLAUSE: Attest.
The Verifier may, if Measurement is filed: declare Attestation Verified.

CLAUSE: Process.
The Enclave may, if Attestation Verified is declared: certify the Result.
```

Notes: processing gated on verified attestation: the promise bundle grants processing capability only after the attestation stands verified by the counterparty role. Omits the attestation format. Assayer-authored (promise-bundle-spell held-out, recipe-only); keystone Notes.

## LEXPVM-T-057 · ERC-7812
- census: LEXPVM-T-057
- register: glossary · conjectured expression of specified term
- cites: glossary-master-v4 § ### ERC-7812
- relation: {"type":"absence","to":"Verifier","what":"Identity"}

```lex
LEX ERC Identity Commitment.

"Prover" is a person.
"Verifier" is a person.
"Identity" is an amount.
"Identity Proof" is a text.

The Prover appoints the Verifier, and fixes the Identity.

CLAUSE: Prove.
The Prover may fix the Identity Proof, and afterwards send the Identity Proof to the Verifier.
```

Notes: zero-knowledge shape as an absence: the proof travels to the verifier, the identity itself has no route anywhere (impossibility as the missing clause); ordering = fix the proof, afterwards send it. Omits the ERC mechanics and commitment scheme. Assayer-authored (pt-primitive-polarity-charter held-out, recipe-only); keystone Notes.

## LEXPVM-T-058 · Agent (IEEE 7012)
- census: LEXPVM-T-058
- register: glossary · conjectured expression of specified term
- cites: glossary-master-v4 § ### Agent (IEEE 7012)
- relation: {"type":"gate","clause":"Present","condition":"Mandate Time"}

```lex
LEX Agent.

"Principal" is a person.
"Agent" is a person.
"Entity" is a person.
"Proposed Terms" is a text.
"Mandate Time" is a time.
"Mandate Given" is a binary.

The Principal appoints the Agent, appoints the Entity, and fixes the Proposed Terms.

CLAUSE: Authorize.
The Principal may declare Mandate Given.

CLAUSE: Mark Mandate.
The Agent may, if Mandate Given is declared, fix the Mandate Time as the current time.

CLAUSE: Present.
The Agent may, if the Mandate Time is fixed: send the Proposed Terms to the Entity.
```

Notes: agency as a phase law: the agent presents terms only after the mandate time is fixed, and the mandate time is fixable only after Mandate Given stands declared (delegation before action, as clause ordering). Omits the IEEE 7012 role taxonomy. Assayer-authored (temporal-spine-lifecycle-charter held-out, recipe-only); keystone Notes.

## LEXPVM-T-065 · DPV (Data Privacy Vocabulary)
- census: LEXPVM-T-065
- register: glossary · conjectured expression of specified term
- cites: glossary-master-v4 § ### DPV (Data Privacy Vocabulary)
- relation: {"type":"gate","clause":"Express Agreement","condition":"Description Conformant"}

```lex
LEX Data Privacy Vocabulary.

"Standards Body" is a person.
"Processor" is a person.
"Reviewer" is a person.
"Vocabulary" is a text.
"Processing Description" is a text.
"Agreement" is a text.
"Description Conformant" is a binary.

The Standards Body registers the Vocabulary.

CLAUSE: Describe.
The Processor may file the Processing Description.

CLAUSE: Review.
The Reviewer may, if Processing Description is filed: declare Description Conformant.

CLAUSE: Express Agreement.
The Processor may, if Description Conformant is declared: register the Agreement.
```

Notes: agreement expressible only under a conformant description: the express-agreement clause is gated on declared conformance, consent-follows-description as clause order. Omits the description schema. Assayer-authored (promise-bundle-spell held-out, recipe-only); keystone Notes.

## LEXPVM-T-067 · Agreement Taxonomy (IEEE 7012)
- census: LEXPVM-T-067
- register: glossary · conjectured expression of specified term
- cites: glossary-master-v4 § ### Agreement Taxonomy (IEEE 7012)
- relation: {"type":"gate","clause":"Escalate","condition":"Selection Time"}

```lex
LEX Agreement Taxonomy.

"Principal" is a person.
"Entity" is a person.
"Base Agreement" is a text.
"Escalation" is a text.
"Selection Time" is a time.
"Base Chosen" is a binary.

The Principal appoints the Entity, and fixes the Base Agreement.

CLAUSE: Choose Base.
The Principal may declare Base Chosen.

CLAUSE: Mark Selection.
The Principal may, if Base Chosen is declared, fix the Selection Time as the current time.

CLAUSE: Offer Base.
The Principal may, if the Selection Time is fixed: send the Base Agreement to the Entity.

CLAUSE: Escalate.
The Principal may, if the Selection Time is fixed: register an Escalation.
```

Notes: the taxonomy as a selection gate: both offering the base agreement and registering an escalation are reachable only after the selection time is fixed; base-before-escalation carried as shared gating on one declared choice. Omits the agreement-type enumeration. Assayer-authored (temporal-spine-lifecycle-charter held-out, recipe-only); keystone Notes.

## LEXPVM-T-080 · The Keeper
- census: LEXPVM-T-080
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### The Keeper
- relation: {"type":"gate","clause":"Witness","condition":"Threshold Passed"}

```lex
LEX The Keeper.

"Keeper" is a person.
"Traveler" is a person.
"Covenant" is a text.
"Covenant Artifact" is a text.
"New Artifact" is a text.
"Witness Record" is a text.
"Threshold Passed" is a binary.

The Keeper registers the Covenant.

CLAUSE: Preserve.
The Keeper must file the Covenant Artifact.

CLAUSE: Pass.
The Traveler may declare Threshold Passed.

CLAUSE: Witness.
The Keeper may, if Threshold Passed is declared: register the Witness Record.

CLAUSE: Await.
The Keeper may register the New Artifact.
```

Notes: keeping as a threshold-gated witness: the keeper witnesses only after the threshold stands passed; the bundle separates holding from attesting. Omits threshold values. Assayer-authored (promise-bundle-spell held-out, recipe-only); keystone Notes.

## LEXPVM-T-085 · Infinite Vault
- census: LEXPVM-T-085
- register: glossary · conjectured expression of documented term
- cites: glossary-master-v4 § ### Infinite Vault
- relation: {"type":"gate","clause":"Rest","condition":"Warded"}

```lex
LEX Infinite Vault.

"Archivist" is a person.
"Bearer" is a person.
"Vault" is this contract.
"Artifact" is a text.
"Warding Time" is a time.
"Alcove Prepared" is a binary.

The Archivist appoints the Bearer, and fixes the Artifact.

CLAUSE: Prepare Alcove.
The Archivist may declare Alcove Prepared.

CLAUSE: Ward.
The Archivist may, if Alcove Prepared is declared, fix the Warding Time as the current time.

CLAUSE: Warded.
"Warded" is defined as: Alcove Prepared is declared and the Warding Time is fixed.

CLAUSE: Rest.
The Bearer may, if this Vault is Warded: send the Artifact to the Archivist.
```

Notes: warding as a defined conjunction (alcove prepared and warding time fixed) gating the artifact coming to rest; the bearer cannot deposit into an unwarded vault. Critic flag carried: this entry and T-086 share one clause skeleton (lexr3.1 template-stamping watch); folded because the gate and claim both hold and the warding content is the term. Omits capacity and retrieval. Assayer-authored (held-out, recipe-only); keystone Notes.

## LEXPVM-T-086 · Scrying Glass / Mage Mode
- census: LEXPVM-T-086
- register: glossary · conjectured expression of documented term
- cites: glossary-master-v4 § ### Scrying Glass / Mage Mode
- relation: {"type":"conjunction","predicate":"Selective","conjuncts":["Selection Chosen","Transformation Time"]}

```lex
LEX Scrying Glass.

"Mage" is a person.
"Keeper" is a person.
"Glass" is this contract.
"Resonance" is a text.
"Transformation Time" is a time.
"Selection Chosen" is a binary.

The Mage appoints the Keeper, and fixes the Resonance.

CLAUSE: Choose Selection.
The Mage may declare Selection Chosen.

CLAUSE: Transform.
The Mage may, if Selection Chosen is declared, fix the Transformation Time as the current time.

CLAUSE: Selective.
"Selective" is defined as: Selection Chosen is declared and the Transformation Time is fixed.

CLAUSE: Evoke.
The Keeper may, if this Glass is Selective: send the Resonance to the Mage.
```

Notes: selective disclosure as a defined conjunction (selection chosen and transformation time fixed) gating the keeper evoking the resonance back to the mage. Critic flag carried: shares its skeleton with T-085 (template-stamping watch). Omits the scrying optics and mage-mode phases. Assayer-authored (held-out, recipe-only); keystone Notes.

## LEXPVM-T-088 · Yggdrasil
- census: LEXPVM-T-088
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Yggdrasil
- relation: {"type":"gate","clause":"Collapse","condition":"Measurement Taken"}

```lex
LEX Yggdrasil.

"Swordsman" is a person.
"First Person" is a person.
"Specific Reality" is a text.
"Measurement Taken" is a binary.

The Swordsman appoints the First Person, and fixes the Specific Reality.

CLAUSE: Measure.
The Swordsman may declare Measurement Taken.

CLAUSE: Collapse.
The Swordsman may, if Measurement Taken is declared, send the Specific Reality to the First Person.
```

Notes: measurement-collapses-possibility carried as a gate: specific reality reaches the First Person only after Measurement Taken stands declared; only the Swordsman holds the measuring declare. Omits the world-tree branching figure. Assayer-authored (pt-primitive-polarity-charter held-out, recipe-only); keystone Notes.

## LEXPVM-T-162 · City of Mages
- census: LEXPVM-T-162
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### 22.1 City of Mages
- relation: {"type":"conjunction","predicate":"Quarters","conjuncts":["Production Shops","Gathering Shops"]}

```lex
LEX City of Mages.

"Founder" is a person.
"Mage" is a person.
"Production Shops" is a text.
"Gathering Shops" is a text.
"Charter" is a text.
"Relationship" is this contract.

The Founder appoints the Mage, fixes the Production Shops, fixes the Gathering Shops, and fixes the Charter.

CLAUSE: Quarters.
"Quarters" is defined as: the Production Shops is fixed and the Gathering Shops is fixed.

CLAUSE: Trade.
The Founder may, if this Relationship is Quarters: send the Charter to the Mage.
```

Notes: the city as a defined conjunction: trade opens only when both production and gathering quarters stand fixed; the charter travels only under Quarters. Omits shop counts and district names. Assayer-authored (pt-primitive-polarity-charter held-out, recipe-only); keystone Notes.

## LEXPVM-T-182 · The Tower (v1.7.0 · 8th spatial-anatomy element of the City of Mages)
- census: LEXPVM-T-182
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### 24.1 The Tower (v1.7.0 · 8th spatial-anatomy element of the City of Mages)
- relation: {"type":"ordering","clause":"Recognize","sequence":["register:Higher Seat","certify:Cast Entry"]}

```lex
LEX The Tower.

"Cast" is a person.
"Archivist" is a person.
"Higher Seat" is a text.
"Cast Entry" is a text.

The Cast appoints the Archivist, and fixes the Cast Entry.

CLAUSE: Recognize.
The Cast may register the Higher Seat, and afterwards certify the Cast Entry.
```

Notes: honor-built recognition as ordering: the higher seat is registered first and the cast entry certified afterwards (the entry came later than the inhabiting, as clause sequence). Omits tower geometry. Assayer-authored (pt-primitive-polarity-charter held-out, recipe-only); keystone Notes.

## LEXPVM-T-002 · Sovereignty
- census: LEXPVM-T-002
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Sovereignty
- relation: {"type":"conjunction","predicate":"Sovereign","conjuncts":["Data Control","Decision Control","Representation Control","Engagement Terms"]}

```lex
LEX Sovereignty.

"First Person" is a person.
"Agent" is a person.
"Charter" is this contract.
"Data Control" is a binary.
"Decision Control" is a binary.
"Representation Control" is a binary.
"Engagement Terms" is a text.

The First Person appoints the Agent.

CLAUSE: Hold Data.
The First Person may declare Data Control.

CLAUSE: Hold Decisions.
The First Person may declare Decision Control.

CLAUSE: Hold Representation.
The First Person may declare Representation Control.

CLAUSE: Set Terms.
The First Person may fix the Engagement Terms.

CLAUSE: Sovereign.
"Sovereign" is defined as: Data Control is declared and Decision Control is declared and Representation Control is declared and the Engagement Terms is fixed.

CLAUSE: Engage.
The Agent may, if this Charter is Sovereign: register the Engagement Terms.
```

Notes: Carries sovereignty as a four-way conjunction: the Sovereign state requires all four canon components (data, decision, representation, and conditional sovereignty as fixed engagement terms), and every component is declarable only by the First Person while the Agent's sole route to engagement runs through the constituted state. Deliberately omits the inalienability framing beyond clause shape, the Gap-as-architectural-expression sentence, and the 7th Capital economic expression (covered separately at T-003). Folded from sovereignty-cluster-charter (canon-forward, run lexr4).

## LEXPVM-T-003 · 7th Capital
- census: LEXPVM-T-003
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### 7th Capital
- relation: {"type":"absence","to":"Mage","what":"Behavioral Trajectory"}

```lex
LEX Seventh Capital.

"First Person" is a person.
"Swordsman" is a person.
"Mage" is a person.
"Behavioral Trajectory" is an amount.
"Coordination Task" is a text.
"Boundary Approved" is a binary.

The First Person fixes the Behavioral Trajectory, appoints the Swordsman, and appoints the Mage.

CLAUSE: Guard.
The Swordsman may certify the Behavioral Trajectory.

CLAUSE: Approve.
The Swordsman may declare Boundary Approved.

CLAUSE: Coordinate.
The Mage may, if Boundary Approved is declared: send the Coordination Task to the First Person.
```

Notes: Carries the wealth-stays-home impossibility: the trajectory is fixed by the First Person and certifiable by the Swordsman, and no transfer clause routes it to the Mage, while value-creating coordination still proceeds through the boundary gate. The trajectory is typed as an amount deliberately: the canon defines the term as a capital form (personal wealth), and the amount type is what makes the absence claim falsifiable. Deliberately omits the trajectory-through-sovereignty-space framing, the six traditional capitals, and all economic magnitude claims. Folded from sovereignty-cluster-charter (canon-forward, run lexr4).

## LEXPVM-T-004 · Privacy-Delegation Paradox
- census: LEXPVM-T-004
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Privacy-Delegation Paradox
- relation: {"type":"gate","clause":"Expose","condition":"Disclosure"}

```lex
LEX Privacy Delegation Paradox.

"First Person" is a person.
"Single Agent" is a person.
"Task Information" is data.
"Disclosure" is a binary.
"Delegated Task" is a text.
"Behavioral Reconstruction" is data.

The First Person appoints the Single Agent, and fixes the Task Information.

CLAUSE: Disclose.
The First Person may declare Disclosure.

CLAUSE: Act.
The Single Agent may, if Disclosure is declared: register the Delegated Task.

CLAUSE: Expose.
The Single Agent may, if Disclosure is declared: register the Behavioral Reconstruction.
```

Notes: Carries the paradox as a single binary gating two consequences: the same Disclosure that gates the wanted delegation (Act) gates the unwanted exposure (Expose), both held by the one Single Agent, which is the canon's why-single-agents-cannot-solve-it sentence in clause shape; the claim pins the unwanted clause to the shared condition. Deliberately omits the dual-agent resolution (expressed at the covered T-009) and the autonomy-axiom derivation. Folded from sovereignty-cluster-charter (canon-forward, run lexr4).

## LEXPVM-T-007 · Territory
- census: LEXPVM-T-007
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Territory
- relation: {"type":"gate","clause":"Ceremony","condition":"Channel Open"}

```lex
LEX Territory.

"Swordsman" is a person.
"Mage" is a person.
"Topology Record" is data.
"Story Record" is a text.
"Ceremony Message" is a text.
"Channel Open" is a binary.

CLAUSE: Traverse.
The Swordsman may certify the Topology Record.

CLAUSE: Narrate.
The Mage may register the Story Record.

CLAUSE: Open Channel.
The Mage may declare Channel Open.

CLAUSE: Ceremony.
The Swordsman may, if Channel Open is declared: send the Ceremony Message to the Mage.
```

Notes: Carries two authority domains with a single gated crossing: each agent acts only on its own domain's record, and the only sentence that crosses territories is the ceremony message, gated on the receiver-opened channel; the never-merge rule is that no clause moves either territory's record across, only ceremony messages cross and only through the gate. Deliberately omits the domain names (spellweb.ai, agentprivacy.ai), the third node bgin.ai, and the repo/process/storage separation levels. Folded from sovereignty-cluster-charter (canon-forward, run lexr4).

## LEXPVM-T-008 · Home Territory
- census: LEXPVM-T-008
- register: glossary · conjectured expression of specified term
- cites: glossary-master-v4 § ### Home Territory
- relation: {"type":"ordering","clause":"Enable","sequence":["register:Mana Balance","grant:Inscription Panel","register:Ceremony Receiver"]}

```lex
LEX Home Territory.

"Extension" is a person.
"First Person" is a person.
"Mana Balance" is a text.
"Inscription Panel" is a text.
"Ceremony Receiver" is a text.
"Home Detected" is a binary.

The First Person appoints the Extension.

CLAUSE: Detect.
The Extension may declare Home Detected.

CLAUSE: Enable.
The Extension may, if Home Detected is declared: register the Mana Balance, grant the Inscription Panel, and afterwards register the Ceremony Receiver.
```

Notes: Carries detection-then-enablement as an ordered action chain: the enable clause performs the three canon-enabled features (mana balance, inscription panel, ceremony receiver) in the canon's listed order, and only after home detection is declared; the ordering claim pins the sequence and the gate condition carries the detection premise. Deliberately omits the home domain list, the hostname-match mechanism, and the HOME_TERRITORY message name. Folded from sovereignty-cluster-charter (canon-forward, run lexr4).

## LEXPVM-T-024 · Valency
- census: LEXPVM-T-024
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Valency
- relation: {"type":"ordering","clause":"Stake","sequence":["fix:Sword Stake","grant:Attention Pledge"]}

```lex
LEX Valency.

"Agent" is a person.
"Guardian" is a person.
"Sword Stake" is an amount.
"Attention Pledge" is a text.

The Agent appoints the Guardian.

CLAUSE: Stake.
The Guardian may fix the Sword Stake, and afterwards grant the Attention Pledge.
```

Notes: ordering: clause Stake performs fix:Sword Stake, then grant:Attention Pledge as clause order. Omissions per the term's canon anchor. Assayer-authored (invitation-admission-charter held-out, recipe-only, run lexr4); keystone Notes.

## LEXPVM-T-028 · Separation Theorem
- census: LEXPVM-T-028
- register: glossary · conjectured expression of proven term
- cites: glossary-master-v4 § ### Separation Theorem
- relation: {"type":"gate","clause":"Account","condition":"Held Apart"}

```lex
LEX Separation Theorem.

"First Person" is a person.
"Swordsman" is a person.
"Mage" is a person.
"Adversary" is a person.
"Theorem" is this contract.
"Swordsman Leakage" is an amount.
"Mage Leakage" is an amount.
"Total Leakage" is an amount.
"Held Apart" is a binary.

The First Person appoints the Swordsman, and appoints the Mage.

CLAUSE: Hold Apart.
The First Person may declare Held Apart.

CLAUSE: Observe Swordsman.
The Adversary may fix the Swordsman Leakage.

CLAUSE: Observe Mage.
The Adversary may fix the Mage Leakage.

CLAUSE: Accounted.
"Accounted" is defined as: the Swordsman Leakage is fixed and the Mage Leakage is fixed.

CLAUSE: Account.
The Adversary may, if Held Apart is declared and this Theorem is Accounted: fix the Total Leakage.
```

Notes: Carries the theorem's premise-conclusion structure: the total leakage may be fixed only under the held-apart premise (the conditional-independence condition of the formula) and only from the two marginal observations, whose two-conjunct Accounted definition has no third synergy conjunct, which is additive-not-multiplicative in clause shape; the claim pins the accounting to the premise. Deliberately omits the mutual-information notation, the equality itself as arithmetic, and the proof; the theorem's PROVEN canon status is recorded in the register tag, not upgraded here. Folded from sovereignty-cluster-charter (canon-forward, run lexr4).

## LEXPVM-T-035 · Privacy Pools
- census: LEXPVM-T-035
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Privacy Pools
- relation: {"type":"absence","to":"Flagged Depositor","what":"Deposit"}

```lex
LEX Privacy Pools.

TERMS:

"Verifier" is a person.

TERMS PER Note:

"Note" is this contract.
"Depositor" is a person.
"Flagged Depositor" is a person.
"Deposit" is an amount.
"Association Proof" is data.
"Innocent" is a binary.

The Verifier appoints the Depositor, and appoints the Flagged Depositor.

CLAUSE: Enter.
The Depositor or the Flagged Depositor may pay the Deposit into escrow.

CLAUSE: Prove.
The Depositor may fix the Association Proof.

CLAUSE: Screen.
The Verifier may, if the Association Proof is fixed, declare Innocent.

CLAUSE: Withdraw.
The Verifier may, if Innocent is declared: return the Deposit to the Depositor, and afterwards terminate this Note.
```

Notes: Carries the compliant-exit direction as an absence (both the Depositor and the Flagged Depositor may pay the Deposit into escrow, but no transfer clause routes the Deposit to the Flagged Depositor; the only exit is the Withdraw clause, gated on Innocent, which is declared only after an Association Proof is fixed: proving non-association is the condition of getting funds out); omits the cryptographic mixing mathematics and anonymity-set semantics. Folded from instance-charter-family (grammar-forward, run lexr4).

## LEXPVM-T-036 · Groth16 / PLONK / Nova
- census: LEXPVM-T-036
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Groth16 / PLONK / Nova
- relation: {"type":"gate","clause":"Verify Groth","condition":"Trusted Setup"}

```lex
LEX Proof System Triad.

"Prover" is a person.
"Verifier" is a person.
"Ceremony Master" is a person.
"Groth Proof" is data.
"Plonk Proof" is data.
"Nova Proof" is data.
"Trusted Setup" is a binary.
"Universal Setup" is a binary.

The Prover appoints the Verifier.

CLAUSE: Run Trusted Setup.
The Ceremony Master may declare Trusted Setup.

CLAUSE: Run Universal Setup.
The Ceremony Master may declare Universal Setup.

CLAUSE: Verify Groth.
The Verifier may, if Trusted Setup is declared: certify the Groth Proof.

CLAUSE: Verify Plonk.
The Verifier may, if Universal Setup is declared: certify the Plonk Proof.

CLAUSE: Verify Nova.
The Verifier may certify the Nova Proof.
```

Notes: gate: the Verify Groth clause is reachable only under the Trusted Setup condition. Omissions per the term's canon anchor. Assayer-authored (role-charter-spell-family held-out, recipe-only, run lexr4); keystone Notes.

## LEXPVM-T-040 · Relationship Proverb Protocol (RPP)
- census: LEXPVM-T-040
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Relationship Proverb Protocol (RPP)
- relation: {"type":"ordering","clause":"Compress","sequence":["register:Proverb","send:Proverb","pay:Signal"]}

```lex
LEX Relationship Proverb Protocol.

"Reader" is a person.
"Author" is a person.
"Source Material" is a text.
"Proverb" is a text.
"Signal" is an amount.
"Understood" is a binary.

The Author fixes the Source Material, and appoints the Reader.

CLAUSE: Study.
The Reader may certify the Source Material.

CLAUSE: Compress.
The Reader may register a Proverb, and afterwards send the Proverb to the Author, and afterwards pay the Signal to the Author.

CLAUSE: Assess.
The Author may, if the Proverb is fixed, declare Understood.
```

Notes: carries the compress-then-signal ordering (the Proverb is registered, then sent, then the Signal paid: proverb formation strictly precedes payment, and assessment is gated on a fixed Proverb); omits the compression-ratio assessment metric and the signal denomination. Folded from send-spine-protocol-family (grammar-forward, run lexr4).

## LEXPVM-T-043 · Sun Ceremony (☀️)
- census: LEXPVM-T-043
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Sun Ceremony (☀️)
- relation: {"type":"ordering","clause":"Disclose","sequence":["file:Poem","certify:Blade","send:Light"]}

```lex
LEX Sun Ceremony.

"Sun" is a person.
"Witness" is a person.
"Poem" is a text.
"Blade" is data.
"Light" is data.
"Forgetting Consented" is a binary.

The Sun appoints the Witness, and fixes the Poem.

CLAUSE: Consent.
The Sun may declare Forgetting Consented.

CLAUSE: Disclose.
The Sun must file the Poem, and afterwards certify the Blade, and afterwards send the Light to the Witness.

CLAUSE: Carry.
The Witness may, if Forgetting Consented is declared: register the Light.
```

Notes: Carries the disclosure rite as a single-officiant ordered chain (poem filed, then blade certified in full view, then light sent to the witness) plus a consent-first gate (the witness carries the light forward only under the Sun's advance consent to being forgotten); omits the notation string, the echo poem's title, and the Moon Ceremony mirror. Folded from rite-and-register-spell (spell-grammar, run lexr4).

## LEXPVM-T-046 · Inaugural Pairing
- census: LEXPVM-T-046
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Inaugural Pairing
- relation: {"type":"gate","clause":"Reflect","condition":"Sun Cycle Complete"}

```lex
LEX Inaugural Pairing.

"First Person" is a person.
"First Swordsman" is a person.
"First Mage" is a person.
"Disclosure" is a text.
"Evocation" is a text.
"Pattern" is data.
"Sun Cycle Complete" is a binary.

The First Person appoints the First Swordsman, and appoints the First Mage.

CLAUSE: Shine.
The First Swordsman may file the Disclosure.

CLAUSE: Complete.
The First Swordsman may declare Sun Cycle Complete.

CLAUSE: Reflect.
The First Mage may, if Sun Cycle Complete is declared: file the Evocation.

CLAUSE: Orbit.
The First Mage may, if Sun Cycle Complete is declared: certify the Pattern.
```

Notes: Carries cycle zero's orientation as a cross-separation gate (the Moon side's evocation and the orbit pattern both wait on the Sun side's declared completion, never the reverse: the seeding direction of the first ceremony as permission structure); omits the named poems, constellations, and evocations of the two sides. Folded from rite-and-register-spell (spell-grammar, run lexr4).

## LEXPVM-T-051 · Golden Ratio (φ)
- census: LEXPVM-T-051
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Golden Ratio (φ)
- relation: {"type":"absence","to":"Observer","what":"Shielded Share"}

```lex
LEX Golden Ratio Split.

"Practitioner" is a person.
"Observer" is a person.
"Shielded Pool" is a person.
"Transparent Share" is an amount.
"Shielded Share" is an amount.
"Split Fixed" is a binary.

The Practitioner appoints the Observer.

CLAUSE: Fix Split.
The Practitioner may declare Split Fixed.

CLAUSE: Route Transparent.
The Practitioner may, if Split Fixed is declared: send the Transparent Share to the Observer.

CLAUSE: Route Shielded.
The Practitioner may, if Split Fixed is declared: pay the Shielded Share to the Shielded Pool.
```

Notes: impossibility as absence: no transfer clause routes Shielded Share to the Observer. Omissions per the term's canon anchor. Assayer-authored (role-charter-spell-family held-out, recipe-only, run lexr4); keystone Notes.

## LEXPVM-T-053 · Trust Spanning Protocol (TSP)
- census: LEXPVM-T-053
- register: glossary · conjectured expression of implemented term
- cites: glossary-master-v4 § ### Trust Spanning Protocol (TSP)
- relation: {"type":"absence","to":"Relay","what":"Payload"}

```lex
LEX Trust Spanning Protocol.

"Origin" is a person.
"Relay" is a person.
"Endpoint" is a person.
"Payload" is an amount.
"Envelope" is data.

The Origin fixes the Payload, fixes the Envelope, and appoints the Endpoint.

CLAUSE: Span.
The Origin may send the Envelope to the Relay.

CLAUSE: Forward.
The Relay may, if the Envelope is fixed, send the Envelope to the Endpoint.

CLAUSE: Deliver.
The Origin may, if the Envelope is fixed, pay the Payload to the Endpoint.
```

Notes: carries intermediary blindness as an impossibility (only the sealed Envelope crosses the Relay hop; no transfer clause routes the Payload to the Relay, and the Relay's sole action is gated on the fixed Envelope); omits key management, endpoint identifiers, and wire format. Folded from send-spine-protocol-family (grammar-forward, run lexr4).

## LEXPVM-T-054 · x402 Protocol
- census: LEXPVM-T-054
- register: glossary · conjectured expression of implemented term
- cites: glossary-master-v4 § ### x402 Protocol
- relation: {"type":"gate","clause":"Serve","condition":"Paid"}

```lex
LEX Payment Per Request Charter.

"Client" is a person.
"Server" is a person.
"Request" is a text.
"Resource" is a text.
"Price" is an amount.
"Paid" is a binary.

The Server fixes the Price, fixes the Resource, and appoints the Client.

CLAUSE: Ask.
The Client may send the Request to the Server.

CLAUSE: Settle.
The Client may pay the Price to the Server, and afterwards declare Paid.

CLAUSE: Serve.
The Server may, if Paid is declared, send the Resource to the Client.
```

Notes: carries the payment-gates-delivery structure of the payment-required pattern (the Serve action exists only under Paid declared, and settlement precedes the declaration in the Settle chain); omits HTTP status semantics, per-request accounting, and payment rails. Folded from send-spine-protocol-family (grammar-forward, run lexr4).

## LEXPVM-T-056 · ERC-8004
- census: LEXPVM-T-056
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### ERC-8004
- relation: {"type":"gate","clause":"Recognize","condition":"Identity Verified"}

```lex
LEX ERC Agent Identity Standard.

"First Person" is a person.
"Agent" is a person.
"Identity Record" is data.
"Identity Verified" is a binary.

The First Person appoints the Agent.

CLAUSE: Attest.
The Agent may register the Identity Record.

CLAUSE: Verify.
The First Person may declare Identity Verified.

CLAUSE: Recognize.
The First Person may, if Identity Verified is declared: certify the Identity Record.
```

Notes: gate: the Recognize clause is reachable only under the Identity Verified condition. Omissions per the term's canon anchor. Assayer-authored (sovereignty-cluster-charter held-out, recipe-only, run lexr4); keystone Notes.

## LEXPVM-T-059 · Agreement (IEEE 7012)
- census: LEXPVM-T-059
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Agreement (IEEE 7012)
- relation: {"type":"conjunction","predicate":"Complete","conjuncts":["Purpose Term","Retention Term"]}

```lex
LEX Agreement.

"First Party" is a person.
"Second Party" is a person.
"Purpose Term" is a text.
"Retention Term" is a text.
"Agreement" is a text.

The First Party appoints the Second Party, fixes the Purpose Term, fixes the Retention Term, and fixes the Agreement.

CLAUSE: Compound.
"Complete" is defined as: the Purpose Term is fixed and the Retention Term is fixed.

CLAUSE: Offer.
The First Party may, if this Agreement is Complete: send the Agreement to the Second Party.
```

Notes: Structural: compoundness as conjunction (the defined predicate Complete requires BOTH the Purpose Term AND the Retention Term fixed; the mutation twin drops one term clause and the offer warrant survives on a fragment that is no longer a compound set), plus the proposed-and-offered-before-a-contract posture carried by gating Offer on Complete. Omits: the open-ended plurality of term clauses (two stand for the set) and the formal-contract successor step, which lives in T-060. Folded from myterms-agreement-family (canon-forward, run lexr4).

## LEXPVM-T-060 · Contract (IEEE 7012)
- census: LEXPVM-T-060
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Contract (IEEE 7012)
- relation: {"type":"ordering","clause":"Bind","sequence":["certify:Agreement","register:Contract Record"]}

```lex
LEX Contract.

"First Party" is a person.
"Second Party" is a person.
"Agreement" is a text.
"Contract Record" is data.
"First Assent" is a binary.
"Second Assent" is a binary.

The First Party appoints the Second Party, and fixes the Agreement.

CLAUSE: Assent Of The First Party.
The First Party may declare First Assent.

CLAUSE: Assent Of The Second Party.
The Second Party may declare Second Assent.

CLAUSE: Mutuality.
"Mutual" is defined as: First Assent is declared and Second Assent is declared.

CLAUSE: Bind.
The First Party may, if this Agreement is Mutual: certify the Agreement, and afterwards register the Contract Record.
```

Notes: Structural: agreement-precedes-contract as ordering (the Bind clause certifies the Agreement first and only afterwards registers the Contract Record; the mutation twin registers the record before certifying what it records), with mutuality carried by the defined predicate Mutual requiring both parties' declared assent and each assent declared only by its own party (autonomy). Omits: enforceable-by-law externality (no court is modeled) and the chronicle-system detail of the 0xagentprivacy mapping. Folded from myterms-agreement-family (canon-forward, run lexr4).

## LEXPVM-T-061 · Entity (IEEE 7012)
- census: LEXPVM-T-061
- register: glossary · conjectured expression of standard
- cites: glossary-master-v4 § ### Entity (IEEE 7012)
- relation: {"type":"gate","clause":"Conclude","condition":"Organization Confirmed"}

```lex
LEX Entity.

"Person" is a person.
"Entity" is a person.
"Registrar" is a person.
"Agreement Record" is a text.
"Organization Confirmed" is a binary.

The Person appoints the Entity, appoints the Registrar, and fixes the Agreement Record.

CLAUSE: Confirm Organization.
The Registrar may declare Organization Confirmed.

CLAUSE: Conclude.
The Person may, if Organization Confirmed is declared: send the Agreement Record to the Entity.
```

Notes: Carries entity-hood as a prerequisite gate: the only clause that concludes an agreement with the Entity (the send of the Agreement Record) is conditional on Organization Confirmed (the relation claim), so contracting with an unconfirmed entity is structurally unreachable. Omits the negative half (never an individual) as a typed distinction, since person is the subset's only agent type, and omits organizational form detail. Anchor: ### Entity (IEEE 7012). Folded from ieee7012-standards-family (canon-forward, run lexr4).

## LEXPVM-T-062 · First Party (IEEE 7012)
- census: LEXPVM-T-062
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### First Party (IEEE 7012)
- relation: {"type":"gate","clause":"Accept","condition":"Proffered"}

```lex
LEX First Party.

"First Party" is a person.
"Entity" is a person.
"Terms" is a text.
"Proffered" is a binary.
"Acceptance" is a binary.

The First Party appoints the Entity, and fixes the Terms.

CLAUSE: Proffer.
The First Party may send the Terms to the Entity, and declare Proffered.

CLAUSE: Accept.
The Entity may, if Proffered is declared, declare Acceptance.
```

Notes: Structural: consent-first direction as gate (the Entity's Acceptance fires only after the individual's declared Proffered; the mutation twin strips the gate so acceptance can precede any proffered terms, exactly the imposition shape the canon rejects). The individual is the origin of terms: the Proffer clause sends the Terms outward and only the First Party fixes them. Omits: always-a-person-never-an-organization typing (the Lexon person type cannot distinguish individuals from organizations) and the First Person dignity framing of the mapping. Folded from myterms-agreement-family (canon-forward, run lexr4).

## LEXPVM-T-063 · Second Party (IEEE 7012)
- census: LEXPVM-T-063
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Second Party (IEEE 7012)
- relation: {"type":"gate","clause":"Serve","condition":"Terms Accepted"}

```lex
LEX Second Party.

"First Party" is a person.
"Second Party" is a person.
"Terms" is a text.
"Terms Accepted" is a binary.
"Service" is a text.

The First Party appoints the Second Party, and fixes the Terms.

CLAUSE: Receive.
The First Party may send the Terms to the Second Party.

CLAUSE: Accept.
The Second Party may declare Terms Accepted.

CLAUSE: Serve.
The Second Party may, if Terms Accepted is declared, register the Service.
```

Notes: Structural: exchange gated on accepted terms (the Serve clause registers the Service only under the entity's own declared Terms Accepted, so the service provider acts only inside the individual's proffered agreement; the ungated mutation twin serves without acceptance, the surveillance default), with the receive-accept-serve lifecycle laid out as separate clauses. Omits: always-an-organization typing (one Lexon person type) and service-provider or platform taxonomy. Folded from myterms-agreement-family (canon-forward, run lexr4).

## LEXPVM-T-064 · Proposer (IEEE 7012)
- census: LEXPVM-T-064
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Proposer (IEEE 7012)
- relation: {"type":"ordering","clause":"Advance","sequence":["fix:Proposed Terms","send:Proposed Terms"]}

```lex
LEX Proposer.

"Proposer" is a person.
"Recipient" is a person.
"Proposed Terms" is a text.

The Proposer appoints the Recipient.

CLAUSE: Advance.
The Proposer may fix the Proposed Terms, and afterwards send the Proposed Terms to the Recipient.
```

Notes: Structural: advancing terms as ordering (the Advance clause fixes the Proposed Terms and only afterwards sends them to the Recipient; the reversed mutation twin advances terms that do not yet exist, advancing nothing), and voluntariness as the modal may (the advance is a promise, never an imposition). Omits: the person-or-entity recipient distinction (one Recipient role stands for both) and the acting-through-Swordsman detail of the 0xagentprivacy mapping, which names a role this census term's definition does not. Folded from myterms-agreement-family (canon-forward, run lexr4).

## LEXPVM-T-066 · Machine-readable (IEEE 7012)
- census: LEXPVM-T-066
- register: glossary · conjectured expression of standard
- cites: glossary-master-v4 § ### Machine-readable (IEEE 7012)
- relation: {"type":"gate","clause":"Process","condition":"Encoded"}

```lex
LEX Machine Readable Terms.

"Author" is a person.
"Processor" is a person.
"Terms" is a text.
"Encoding" is data.
"Encoded" is a binary.

The Author appoints the Processor, and fixes the Terms.

CLAUSE: Encode.
The Author may file the Encoding.

CLAUSE: Mark Encoded.
The Author may, if the Encoding is filed: declare Encoded.

CLAUSE: Process.
The Processor may, if Encoded is declared: certify the Terms.
```

Notes: Carries machine-readability as a gate chain: the Encoding artifact must be filed before Encoded can be declared, and the Processor's certify of the Terms is conditional on Encoded (the relation claim), so computer processing of unencoded terms is structurally unreachable, an encode-then-mark-then-process ordering carried by two stacked gates. Omits the concrete formats (JSON-LD, RDF/Turtle, HTTP headers, bitwise encoding). Anchor: ### Machine-readable (IEEE 7012). Folded from ieee7012-standards-family (canon-forward, run lexr4).

## LEXPVM-T-068 · Customer Commons
- census: LEXPVM-T-068
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Customer Commons
- relation: {"type":"absence","to":"Customer Commons","what":"Consideration"}

```lex
LEX Customer Commons.

"Customer Commons" is a person.
"First Party" is a person.
"Second Party" is a person.
"Agreement" is a text.
"Registry Entry" is data.
"Consideration" is an amount.

The First Party fixes the Agreement.

CLAUSE: Host.
The Customer Commons may register the Agreement, and certify the Registry Entry.

CLAUSE: Publish.
The Customer Commons may send the Registry Entry to the First Party, or send the Registry Entry to the Second Party.

CLAUSE: Exchange.
The Second Party may pay the Consideration to the First Party.
```

Notes: Structural: neutrality as impossibility (Consideration flows between the two parties in the Exchange clause, yet no transfer clause routes the Consideration to the Customer Commons; the probe twin adds exactly that route, the captured registry the canon rules out). The host's only actions are hosting: register the Agreement, certify the Registry Entry, and publish it to either side alike. Omits: nonprofit legal form and the capture-prevention rationale as prose; profits-from-neither-side is carried only as the absent route. Folded from myterms-agreement-family (canon-forward, run lexr4).

## LEXPVM-T-071 · Story Fracture, Principle Convergence
- census: LEXPVM-T-071
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Story Fracture, Principle Convergence
- relation: {"type":"conjunction","predicate":"Principle Convergence","conjuncts":["First Match","Second Match"]}

```lex
LEX Story Fracture Principle Convergence.

"First Reader" is a person.
"Second Reader" is a person.
"First Story" is a text.
"Second Story" is a text.
"Spell Notation" is a text.
"First Match" is a binary.
"Second Match" is a binary.

The First Reader fixes the First Story, and fixes the Spell Notation.

CLAUSE: Fracture.
The Second Reader may register the Second Story.

CLAUSE: Converge First.
The First Reader may declare First Match.

CLAUSE: Converge Second.
The Second Reader may declare Second Match.

CLAUSE: Principle Convergence.
"Principle Convergence" is defined as:
First Match is declared and Second Match is declared.
```

Notes: conjunction: the defined predicate Principle Convergence requires all of First Match AND Second Match. Omissions per the term's canon anchor. Assayer-authored (party-proffer-charter held-out, recipe-only, run lexr4); keystone Notes.

## LEXPVM-T-072 · Spellbook / Grimoire
- census: LEXPVM-T-072
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Spellbook / Grimoire
- relation: {"type":"gate","clause":"Study","condition":"Offered"}

```lex
LEX Spellbook Offer.

"Author" is a person.
"Learner" is a person.
"Spellbook" is a text.
"Inscription" is a text.
"Offered" is a binary.

The Author fixes the Spellbook, fixes the Inscription, and appoints the Learner.

CLAUSE: Offer.
The Author may send the Spellbook to the Learner, and afterwards declare Offered.

CLAUSE: Study.
The Learner may, if Offered is declared, certify the Spellbook.

CLAUSE: Inscribe.
The Author may, if Offered is declared, send the Inscription to the Learner.
```

Notes: gate: the Study clause is reachable only under the Offered condition. Omissions per the term's canon anchor. Assayer-authored (send-spine-protocol-family held-out, recipe-only, run lexr4); keystone Notes.

## LEXPVM-T-076 · Dragon 🐉
- census: LEXPVM-T-076
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Dragon 🐉
- relation: {"type":"conjunction","predicate":"Dragon Tier","conjuncts":["Domains Asserted","Constellation Nodes","Drake Summonings","Privacy Posture"]}

```lex
LEX Dragon.

"Ceremony" is a person.
"Drake" is a person.
"Guardian Seat" is a text.
"Domains Asserted" is a binary.
"Constellation Nodes" is a binary.
"Drake Summonings" is a binary.
"Privacy Posture" is a binary.

The Ceremony appoints the Drake.

"Dragon Tier" is defined as: Domains Asserted is declared and Constellation Nodes is declared and Drake Summonings is declared and Privacy Posture is declared.

CLAUSE: Assert.
The Drake may declare Domains Asserted, and declare Constellation Nodes.

CLAUSE: Summon.
The Drake may declare Drake Summonings, and declare Privacy Posture.

CLAUSE: Transform.
The Ceremony may, if Dragon Tier, grant the Guardian Seat.
```

Notes: conjunction: the defined predicate Dragon Tier requires all of Domains Asserted AND Constellation Nodes AND Drake Summonings AND Privacy Posture. Omissions per the term's canon anchor. Assayer-authored (invitation-admission-charter held-out, recipe-only, run lexr4); keystone Notes.

## LEXPVM-T-078 · Ashe
- census: LEXPVM-T-078
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Ashe
- relation: {"type":"gate","clause":"Invert","condition":"Inversion Discovered"}

```lex
LEX Ashe.

"Ashe" is a person.
"First Person" is a person.
"Protection Mirror" is a text.
"Scrying Glass" is a text.
"Inversion Discovered" is a binary.

CLAUSE: Build Mirror.
The Ashe may register the Protection Mirror.

CLAUSE: Discover.
The Ashe may declare Inversion Discovered.

CLAUSE: Invert.
The Ashe may, if Inversion Discovered is declared: send the Scrying Glass to the First Person.
```

Notes: gate: the Invert clause is reachable only under the Inversion Discovered condition. Omissions per the term's canon anchor. Assayer-authored (sovereignty-cluster-charter held-out, recipe-only, run lexr4); keystone Notes.

## LEXPVM-T-084 · The Archive (Pattern-Space)
- census: LEXPVM-T-084
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### The Archive (Pattern-Space)
- relation: {"type":"gate","clause":"Consult","condition":"Admitted"}

```lex
LEX The Archive.

TERMS:

"Archivist" is a person.

TERMS PER Consultation:

"Consultation" is this contract.
"Seeker" is a person.
"Entrance Answer" is a text.
"Constitutional Text" is a text.
"Admitted" is a binary.

The Archivist appoints the Seeker, and fixes the Constitutional Text.

CLAUSE: Answer.
The Seeker may file the Entrance Answer.

CLAUSE: Judge.
The Archivist may, if the Entrance Answer is filed, declare Admitted.

CLAUSE: Consult.
The Archivist may, if Admitted is declared, send the Constitutional Text to the Seeker.

CLAUSE: Close.
The Archivist may, if Admitted is declared, terminate this Consultation.
```

Notes: gate: the Consult clause is reachable only under the Admitted condition. Omissions per the term's canon anchor. Assayer-authored (instance-charter-family held-out, recipe-only, run lexr4); keystone Notes.

## LEXPVM-T-093 · Three-Axis Separation (V5)
- census: LEXPVM-T-093
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Three-Axis Separation (V5)
- relation: {"type":"conjunction","predicate":"Separated","conjuncts":["Agent Axis","Data Axis","Inference Axis"]}

```lex
LEX Three Axis Separation Charter.

"Verifier" is a person.
"Operator" is a person.
"Separation Record" is this contract.
"Agent Axis" is a binary.
"Data Axis" is a binary.
"Inference Axis" is a binary.

The Verifier appoints the Operator.

CLAUSE: Hold.
The Operator may declare Agent Axis.
The Operator may declare Data Axis.
The Operator may declare Inference Axis.

CLAUSE: Separated.
"Separated" is defined as: Agent Axis is declared and Data Axis is declared and Inference Axis is declared.

CLAUSE: Attest.
The Verifier may, if this Separation Record is Separated: certify the Separation Record.
```

Notes: conjunction: the defined predicate Separated requires all of Agent Axis AND Data Axis AND Inference Axis. Omissions per the term's canon anchor. Assayer-authored (consent-standard-party-charter held-out, recipe-only, run lexr4); keystone Notes.

## LEXPVM-T-096 · Φ_inference (Inference-Layer Separation)
- census: LEXPVM-T-096
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Φ_inference (Inference-Layer Separation)
- relation: {"type":"absence","to":"Solver","what":"Shared Weights"}

```lex
LEX Inference Layer Separation.

"Generator" is a person.
"Solver" is a person.
"Reasoning Graph" is a text.
"Execution" is data.
"Shared Weights" is an amount.
"Graph Filed" is a binary.

The Generator appoints the Solver.

CLAUSE: Reason.
The Generator may file the Reasoning Graph, and afterwards declare Graph Filed.

CLAUSE: Execute.
The Solver may, if Graph Filed is declared, register the Execution.
```

Notes: impossibility as absence: no transfer clause routes Shared Weights to the Solver. Omissions per the term's canon anchor. Assayer-authored (invitation-admission-charter held-out, recipe-only, run lexr4); keystone Notes.

## LEXPVM-T-102 · Three Graphs Model
- census: LEXPVM-T-102
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Three Graphs Model
- relation: {"type":"conjunction","predicate":"Overlap Standing","conjuncts":["Knowledge Mapped","Promise Formed","Trust Emerged"]}

```lex
LEX Three Graphs Model.

"First Person" is a person.
"Witness" is a person.
"Knowledge Graph" is a text.
"Promise Graph" is a text.
"Trust Graph" is a text.
"Knowledge Mapped" is a binary.
"Promise Formed" is a binary.
"Trust Emerged" is a binary.

The First Person fixes the Knowledge Graph, fixes the Promise Graph, and fixes the Trust Graph.

CLAUSE: Map Knowledge.
The First Person may declare Knowledge Mapped.

CLAUSE: Form Promise.
The First Person or the Witness may declare Promise Formed.

CLAUSE: Emerge Trust.
The Witness may declare Trust Emerged.

CLAUSE: Overlap Standing.
"Overlap Standing" is defined as:
Knowledge Mapped is declared and Promise Formed is declared and Trust Emerged is declared.
```

Notes: conjunction: the defined predicate Overlap Standing requires all of Knowledge Mapped AND Promise Formed AND Trust Emerged. Omissions per the term's canon anchor. Assayer-authored (party-proffer-charter held-out, recipe-only, run lexr4); keystone Notes.

## LEXPVM-T-103 · Secret Language
- census: LEXPVM-T-103
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Secret Language
- relation: {"type":"gate","clause":"Present","condition":"Selection"}

```lex
LEX Secret Language.

"Swordsman" is a person.
"Mage" is a person.
"Counterparty" is a person.
"Face" is a text.
"Selection" is a binary.

The Swordsman appoints the Mage, and appoints the Counterparty, and fixes the Face.

CLAUSE: Determine.
The Swordsman may declare Selection.

CLAUSE: Present.
The Swordsman may, if Selection is declared: send the Face to the Counterparty.
```

Notes: gate: the Present clause is reachable only under the Selection condition. Omissions per the term's canon anchor. Assayer-authored (myterms-agreement-family held-out, recipe-only, run lexr4); keystone Notes.

## LEXPVM-T-107 · Compression-as-Defence (V5)
- census: LEXPVM-T-107
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Compression-as-Defence (V5)
- relation: {"type":"absence","to":"Interceptor"}

```lex
LEX Compression As Defence.

"Sender" is a person.
"Receiver" is a person.
"Interceptor" is a person.
"Sent Tokens" is an amount.
"Withheld Tokens" is an amount.
"Compressed" is a binary.

The Sender appoints the Receiver.

CLAUSE: Compress.
The Sender may declare Compressed.

CLAUSE: Transmit.
The Sender may, if Compressed is declared, pay the Sent Tokens to the Receiver.

CLAUSE: Withhold.
The Sender may pay the Withheld Tokens into escrow.
```

Notes: impossibility as absence: no transfer clause routes anything to the Interceptor. Omissions per the term's canon anchor. Assayer-authored (party-proffer-charter held-out, recipe-only, run lexr4); keystone Notes.

## LEXPVM-T-109 · UOR (Universal Object Reference)
- census: LEXPVM-T-109
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### UOR (Universal Object Reference)
- relation: {"type":"conjunction","predicate":"Convergent","conjuncts":["Algebra","Addressing"]}

```lex
LEX UOR.

"UOR Foundation" is a person.
"Framework" is a text.
"Algebra" is a text.
"Addressing" is a text.
"Identifier" is data.

The UOR Foundation fixes the Framework, and fixes the Algebra, and fixes the Addressing.

CLAUSE: Convergence.
"Convergent" is defined as: the Algebra is fixed and the Addressing is fixed.

CLAUSE: Address.
The UOR Foundation may, if this Framework is Convergent: register the Identifier.
```

Notes: conjunction: the defined predicate Convergent requires all of Algebra AND Addressing. Omissions per the term's canon anchor. Assayer-authored (myterms-agreement-family held-out, recipe-only, run lexr4); keystone Notes.

## LEXPVM-T-110 · Six Dimensions of Sovereignty
- census: LEXPVM-T-110
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Six Dimensions of Sovereignty
- relation: {"type":"conjunction","predicate":"Fully Active","conjuncts":["Protection","Delegation","Memory","Connection","Computation","Value"]}

```lex
LEX Six Dimensions of Sovereignty.

"First Person" is a person.
"Blade" is this contract.
"Protection" is a binary.
"Delegation" is a binary.
"Memory" is a binary.
"Connection" is a binary.
"Computation" is a binary.
"Value" is a binary.

CLAUSE: Configure.
The First Person may declare Protection, declare Delegation, declare Memory, declare Connection, declare Computation, and declare Value.

CLAUSE: Fully Active.
"Fully Active" is defined as: Protection is declared and Delegation is declared and Memory is declared and Connection is declared and Computation is declared and Value is declared.

CLAUSE: Certify.
The First Person may, if this Blade is Fully Active: certify this Blade.
```

Notes: Carries each canonical dimension as an independently declarable binary (active or dormant) and the fully active configuration as a six-way conjunction over exactly the six canonical dimension names; the claim requires all six, so dropping any one dimension breaks the constituted state, which is the stratum structure's top vertex in clause shape. Deliberately omits the bit numbering, the implementation names (Hide, Commit, Prove, Connect, Reflect, Delegate), the three-axis mapping, and the Pascal stratum counts, and expresses only the all-active configuration, not the other configurations of the lattice. Folded from sovereignty-cluster-charter (canon-forward, run lexr4).

## LEXPVM-T-116 · Holonic Architect (☯️🔷) (V5)
- census: LEXPVM-T-116
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Holonic Architect (☯️🔷) (V5)
- relation: {"type":"conjunction","predicate":"Sound","conjuncts":["Data Persistence","Identity Persistence","History Persistence"]}

```lex
LEX Holonic Architect.

"First Person" is a person.
"Holonic Architect" is a person.
"Swordsman" is a person.
"Mage" is a person.
"Substrate" is this contract.
"Data Persistence" is a binary.
"Identity Persistence" is a binary.
"History Persistence" is a binary.
"Dance" is a text.

The First Person appoints the Holonic Architect.

CLAUSE: Hold Data.
The Holonic Architect may declare Data Persistence.

CLAUSE: Hold Identity.
The Holonic Architect may declare Identity Persistence.

CLAUSE: Hold History.
The Holonic Architect may declare History Persistence.

CLAUSE: Sound.
"Sound" is defined as: Data Persistence is declared and Identity Persistence is declared and History Persistence is declared.

CLAUSE: Dance.
The Swordsman may, if this Substrate is Sound: register the Dance.
```

Notes: conjunction: the defined predicate Sound requires all of Data Persistence AND Identity Persistence AND History Persistence. Omissions per the term's canon anchor. Assayer-authored (role-charter-spell-family held-out, recipe-only, run lexr4); keystone Notes.

## LEXPVM-T-118 · Three Identity Layers (V5)
- census: LEXPVM-T-118
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Three Identity Layers (V5)
- relation: {"type":"conjunction","predicate":"Complete","conjuncts":["Data Layer Bound","Relationship Layer Bound","Principal Layer Bound"]}

```lex
LEX Three Identity Layers.

"Principal" is a person.
"Counterparty" is a person.
"Holon" is data.
"Identity" is this contract.
"Data Layer Bound" is a binary.
"Relationship Layer Bound" is a binary.
"Principal Layer Bound" is a binary.
"Sovereign Act" is a text.

The Principal fixes the Holon.

CLAUSE: Bind Data Layer.
The Principal may file the Holon, and afterwards declare Data Layer Bound.

CLAUSE: Bind Relationship Layer.
The Counterparty may declare Relationship Layer Bound.

CLAUSE: Bind Principal Layer.
The Principal may declare Principal Layer Bound.

CLAUSE: Complete.
"Complete" is defined as: Data Layer Bound is declared and Relationship Layer Bound is declared and Principal Layer Bound is declared.

CLAUSE: Act Sovereign.
The Principal may, if this Identity is Complete: register the Sovereign Act.
```

Notes: conjunction: the defined predicate Complete requires all of Data Layer Bound AND Relationship Layer Bound AND Principal Layer Bound. Omissions per the term's canon anchor. Assayer-authored (role-charter-spell-family held-out, recipe-only, run lexr4); keystone Notes.

## LEXPVM-T-129 · Bilateral Witness (BW)
- census: LEXPVM-T-129
- register: glossary · conjectured expression of speculative term
- cites: glossary-master-v4 § ### Bilateral Witness (BW)
- relation: {"type":"conjunction","predicate":"Witnessed","conjuncts":["Verified","Testimony"]}

```lex
LEX Bilateral Witness.

"Witness Exchange" is this contract.
"Swordsman" is a person.
"Mage" is a person.
"Community" is a person.
"Blade" is data.
"Testimony" is a text.
"Verified" is a binary.

The Swordsman fixes the Blade, appoints the Mage, and appoints the Community.

CLAUSE: Verify.
The Mage may certify the Blade, and afterwards declare Verified.

CLAUSE: Testify.
The Mage may, if Verified is declared, send the Testimony to the Community.

CLAUSE: Witnessed.
"Witnessed" is defined as: Verified is declared and the Testimony is fixed.

CLAUSE: Receive.
The Community may, if this Witness Exchange is Witnessed, certify the Testimony.
```

Notes: carries attestation without revelation as a conjunction (community reception requires BOTH private verification declared AND public testimony fixed, while no transfer clause routes the Blade itself to the Community); omits the quantum-resistance rationale and the demonstration date. Folded from send-spine-protocol-family (grammar-forward, run lexr4).

## LEXPVM-T-134 · Constellation Path
- census: LEXPVM-T-134
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Constellation Path
- relation: {"type":"ordering","clause":"Traverse","sequence":["certify:First Node","certify:Second Node","register:Path"]}

```lex
LEX Constellation Path.

"Evoker" is a person.
"Keeper" is a person.
"First Node" is a text.
"Second Node" is a text.
"Path" is a text.
"Inscribed" is a binary.

The Evoker fixes the First Node, fixes the Second Node, and appoints the Keeper.

CLAUSE: Traverse.
The Evoker may certify the First Node, and afterwards certify the Second Node, and afterwards register a Path.

CLAUSE: Deliver.
The Evoker may, if the Path is fixed, send the Path to the Keeper.

CLAUSE: Inscribe.
The Keeper may, if the Path is fixed, declare Inscribed.
```

Notes: ordering: clause Traverse performs certify:First Node, then certify:Second Node, then register:Path as clause order. Omissions per the term's canon anchor. Assayer-authored (send-spine-protocol-family held-out, recipe-only, run lexr4); keystone Notes.

## LEXPVM-T-141 · Ceremony Receiver
- census: LEXPVM-T-141
- register: glossary · conjectured expression of specified term
- cites: glossary-master-v4 § ### Ceremony Receiver
- relation: {"type":"gate","clause":"Render","condition":"Mana Sufficient"}

```lex
LEX Ceremony Receiver.

"Receiver" is a person.
"Sender" is a person.
"Inscription" is a text.
"Mana Cost" is an amount.
"Mana Sufficient" is a binary.

The Sender fixes the Inscription, and appoints the Receiver.

CLAUSE: Deliver.
The Sender may send the Inscription to the Receiver, and afterwards pay the Mana Cost to the Receiver.

CLAUSE: Validate.
The Receiver may declare Mana Sufficient.

CLAUSE: Render.
The Receiver may, if Mana Sufficient is declared, certify the Inscription.
```

Notes: carries validation-gates-rendering (the Receiver certifies the Inscription only under Mana Sufficient declared, and delivery orders inscription before mana payment in the Deliver chain); omits the message schema fields, accepted sources, and shimmer rendering. Folded from send-spine-protocol-family (grammar-forward, run lexr4).

## LEXPVM-T-143 · Ceremony Engine
- census: LEXPVM-T-143
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Ceremony Engine
- relation: {"type":"conjunction","predicate":"Converged","conjuncts":["First Ready","Second Ready"]}

```lex
LEX Ceremony Engine.
"First Blade" is a person.
"Second Blade" is a person.
"Engine" is this contract.
"Crossing Record" is a text.
"First Ready" is a binary.
"Second Ready" is a binary.

The First Blade appoints the Second Blade, and fixes the Crossing Record.

CLAUSE: Ready First.

The First Blade may declare First Ready.

CLAUSE: Ready Second.

The Second Blade may declare Second Ready.

CLAUSE: Converged.
"Converged" is defined as: First Ready is declared and Second Ready is declared.

CLAUSE: Cross.

The First Blade may, if this Engine is Converged: send the Crossing Record to the Second Blade.
```

Notes: conjunction: the defined predicate Converged requires all of First Ready AND Second Ready. Omissions per the term's canon anchor. Assayer-authored (ieee7012-standards-family held-out, recipe-only, run lexr4); keystone Notes.

## LEXPVM-T-150 · Emissary Dispersion
- census: LEXPVM-T-150
- register: glossary · conjectured expression of architectural principle
- cites: glossary-master-v4 § ### Emissary Dispersion
- relation: {"type":"absence","to":"First Emissary","what":"Master Secret"}

```lex
LEX Emissary Dispersion.

"Master" is a person.
"First Emissary" is a person.
"Second Emissary" is a person.
"Master Secret" is an amount.
"First Shard" is an amount.
"Second Shard" is an amount.

The Master fixes the Master Secret, fixes the First Shard, fixes the Second Shard, appoints the First Emissary, and appoints the Second Emissary.

CLAUSE: Disperse.
The Master may pay the First Shard to the First Emissary, and afterwards pay the Second Shard to the Second Emissary.

CLAUSE: First Carry.
The First Emissary may certify the First Shard.

CLAUSE: Second Carry.
The Second Emissary may certify the Second Shard.
```

Notes: carries dispersal as an impossibility (shards route outward one per emissary, each emissary certifies only its own shard, and no transfer clause routes the Master Secret to any single emissary: the no-single-shard-holds-the-whole property in clause shape); omits the hemispheric-capture origin and the mirror proverb. Folded from send-spine-protocol-family (grammar-forward, run lexr4).

## LEXPVM-T-152 · Manifold Proof
- census: LEXPVM-T-152
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Manifold Proof
- relation: {"type":"absence","to":"Walker","what":"Secret"}

```lex
LEX Manifold Proof.

"Prover" is a person.
"Walker" is a person.
"Path" is data.
"Proof" is data.
"Secret" is an amount.
"Traversal Complete" is a binary.

The Prover appoints the Walker, and fixes the Path.

CLAUSE: Walk.
The Walker may register the Path, and afterwards declare Traversal Complete.

CLAUSE: Certify.
The Prover may, if Traversal Complete is declared, certify the Proof.
```

Notes: impossibility as absence: no transfer clause routes Secret to the Walker. Omissions per the term's canon anchor. Assayer-authored (invitation-admission-charter held-out, recipe-only, run lexr4); keystone Notes.

## LEXPVM-T-154 · Ur-Swordsman
- census: LEXPVM-T-154
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Ur-Swordsman
- relation: {"type":"absence","to":"Ur-Swordsman","what":"Light"}

```lex
LEX Ur-Swordsman.

"Ur-Swordsman" is a person.
"Principal" is a person.
"Light" is an amount.

The Principal appoints the Ur-Swordsman, and fixes the Light.

CLAUSE: Reflect.
The Ur-Swordsman may send the Light to the Principal.
```

Notes: impossibility as absence: no transfer clause routes Light to the Ur-Swordsman. Omissions per the term's canon anchor. Assayer-authored (myterms-agreement-family held-out, recipe-only, run lexr4); keystone Notes.

## LEXPVM-T-156 · Merge Catastrophe
- census: LEXPVM-T-156
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### Merge Catastrophe
- relation: {"type":"absence","to":"Master","what":"Mandate"}

```lex
LEX Merge Catastrophe.

"Master" is a person.
"Swordsman" is a person.
"Mandate" is an amount.

The Master appoints the Swordsman, and fixes the Mandate.

CLAUSE: Separate.
The Master may send the Mandate to the Swordsman.

CLAUSE: Protect.
The Swordsman may certify the Mandate.
```

Notes: impossibility as absence: no transfer clause routes Mandate to the Master. Omissions per the term's canon anchor. Assayer-authored (myterms-agreement-family held-out, recipe-only, run lexr4); keystone Notes.

## LEXPVM-T-173 · The City of Mages grimoire
- census: LEXPVM-T-173
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### 22.12 The City of Mages grimoire
- relation: {"type":"conjunction","predicate":"Bound","conjuncts":["Admitted","Spell"]}

```lex
LEX City Grimoire.

"Grimoire Exchange" is this contract.
"Keeper" is a person.
"Persona" is a person.
"Grimoire" is a text.
"Spell" is a text.
"Admitted" is a binary.

The Keeper fixes the Grimoire, and appoints the Persona.

CLAUSE: Offer.
The Persona may register a Spell, and afterwards send the Spell to the Keeper.

CLAUSE: Admit.
The Keeper may, if the Spell is fixed, declare Admitted.

CLAUSE: Bound.
"Bound" is defined as: Admitted is declared and the Spell is fixed.

CLAUSE: Bind.
The Keeper may, if this Grimoire Exchange is Bound, certify the Grimoire.
```

Notes: conjunction: the defined predicate Bound requires all of Admitted AND Spell. Omissions per the term's canon anchor. Assayer-authored (send-spine-protocol-family held-out, recipe-only, run lexr4); keystone Notes.

## LEXPVM-T-176 · Attachment kind
- census: LEXPVM-T-176
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### 23.3 Attachment kind
- relation: {"type":"conjunction","predicate":"Workshop Kind","conjuncts":["Vertex","Trade Quarter","Mage Binding"]}

```lex
LEX Attachment Kind Charter.

"Mage" is a person.
"Registrar" is a person.
"Attachment Record" is this contract.
"Vertex" is a text.
"Trade Quarter" is a text.
"Mage Binding" is a binary.

The Registrar appoints the Mage.

CLAUSE: Bind.
The Mage may file the Vertex.
The Mage may file the Trade Quarter.
The Mage may declare Mage Binding.

CLAUSE: Workshop Kind.
"Workshop Kind" is defined as: Vertex is filed and Trade Quarter is filed and Mage Binding is declared.

CLAUSE: Attest.
The Registrar may, if this Attachment Record is Workshop Kind: certify the Attachment Record.
```

Notes: conjunction: the defined predicate Workshop Kind requires all of Vertex AND Trade Quarter AND Mage Binding. Omissions per the term's canon anchor. Assayer-authored (consent-standard-party-charter held-out, recipe-only, run lexr4); keystone Notes.

## LEXPVM-T-178 · Lethae 🌘, first canonical divergent attachment
- census: LEXPVM-T-178
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### 23.5 Lethae 🌘, first canonical divergent attachment
- relation: {"type":"gate","clause":"Attach","condition":"Seated"}

```lex
LEX Lethae.

"Lethae" is a person.
"Moonkeeper" is a person.
"Binder" is a person.
"Founding Act" is a text.
"Seated" is a binary.
"Attachment Record" is a text.

The Binder appoints the Lethae, and appoints the Moonkeeper.

CLAUSE: Bind Founding.
The Binder may file the Founding Act, and afterwards send the Founding Act to the Lethae.

CLAUSE: Take Seat.
The Lethae may, if the Founding Act is filed, declare Seated.

CLAUSE: Attach.
The Lethae may, if Seated is declared, register the Attachment Record.
```

Notes: gate: the Attach clause is reachable only under the Seated condition. Omissions per the term's canon anchor. Assayer-authored (myterms-party-charter-spell held-out, recipe-only, run lexr4); keystone Notes.

## LEXPVM-T-181 · Cousin tier, deliberately unattached
- census: LEXPVM-T-181
- register: glossary · conjectured expression of documented term
- cites: glossary-master-v4 § ### 23.8 Cousin tier, deliberately unattached
- relation: {"type":"absence","to":"Cousin","what":"Attachment"}

```lex
LEX Cousin Tier.

"City" is a person.
"Cast Mage" is a person.
"Cousin" is a person.
"Attachment" is an amount.
"Own Binding" is a text.
"Binding Reserved" is a binary.

The City appoints the Cast Mage.

CLAUSE: Attach Cast.
The City may send the Attachment to the Cast Mage.

CLAUSE: Reserve.
The City may declare Binding Reserved.

CLAUSE: Forge Own.
The Cousin may register the Own Binding.
```

Notes: deliberate unattachment as an impossibility: an attachment route exists to the cast mage and NO transfer clause routes an attachment to the cousin, who is never appointed in the recital and whose only binding is self-registered in its own forge (the city reserves the binding decision rather than imposing it, direction as absence). Omits the named cousins and the Layer-2 attachment registry mechanics. Folded from role-charter-spell-family (spell-grammar, run lexr4).

## LEXPVM-T-183 · Spirit-Mage tier (v1.7.0 · 7th cast tier)
- census: LEXPVM-T-183
- register: glossary · conjectured expression of conjectured term
- cites: glossary-master-v4 § ### 24.2 Spirit-Mage tier (v1.7.0 · 7th cast tier)
- relation: {"type":"gate","clause":"Admit","condition":"Inhabiting Recognised"}

```lex
LEX Spirit Mage Tier.

"Resident Cast" is a person.
"Keeper" is a person.
"Spirit Mage" is a person.
"Monument" is data.
"Inhabiting Recognised" is a binary.
"Tier Entry" is a text.

The Resident Cast appoints the Keeper.

CLAUSE: Build Monument.
The Resident Cast may file the Monument.

CLAUSE: Recognise.
The Resident Cast may, if Monument is filed: declare Inhabiting Recognised.

CLAUSE: Admit.
The Keeper may, if Inhabiting Recognised is declared: appoint the Spirit Mage, and register the Tier Entry.
```

Notes: recognition rather than summoning as a two-stage gate: the admission clause (appointing the spirit mage and registering the tier entry) is conditional on the cast's recognition declaration, itself gated on the collectively filed honor-built monument, so the cast entry comes later than the inhabiting. Omits the sister-tier distinction between city-internal and city-external prehistory and the tier population. Folded from role-charter-spell-family (spell-grammar, run lexr4).

## LEXPVM-T-185 · Tome VIII, The Library (v1.7.0 · open by design · 2 acts at v1.7.1)
- census: LEXPVM-T-185
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### 24.4 Tome VIII, The Library (v1.7.0 · open by design · 2 acts at v1.7.1)
- relation: {"type":"conjunction","predicate":"Kept","conjuncts":["First Act","Second Act"]}

```lex
LEX Tome Eight.

"Archivist" is a person.
"City" is a person.
"Record" is this contract.
"First Act" is a text.
"Second Act" is a text.
"Future Act" is a text.

The Archivist appoints the City.

CLAUSE: Bind First.
The Archivist may file the First Act.

CLAUSE: Bind Second.
The City may file the Second Act.

CLAUSE: Kept.
"Kept" is defined as: the First Act is filed and the Second Act is filed.

CLAUSE: Admit Future.
The Archivist may, if this Record is Kept: register the Future Act.
```

Notes: conjunction: the defined predicate Kept requires all of First Act AND Second Act. Omissions per the term's canon anchor. Assayer-authored (myterms-party-charter-spell held-out, recipe-only, run lexr4); keystone Notes.

## LEXPVM-T-186 · The Register of Invitations 🪑 (v1.7.1 · new structural register)
- census: LEXPVM-T-186
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### 24.5 The Register of Invitations 🪑 (v1.7.1 · new structural register)
- relation: {"type":"gate","clause":"Write","condition":"Invitation Recorded"}

```lex
LEX Register of Invitations.

"Keeper" is a person.
"Visiting Mage" is a person.
"Joint Folio" is a text.
"Geometry Congruent" is a binary.
"Invitation Recorded" is a binary.

The Keeper appoints the Visiting Mage.

CLAUSE: Read Foundations.
The Keeper may declare Geometry Congruent.

CLAUSE: Record Invitation.
The Keeper may, if Geometry Congruent is declared: declare Invitation Recorded.

CLAUSE: Write.
The Visiting Mage may, if Invitation Recorded is declared: file the Joint Folio.

CLAUSE: Bind To Library.
The Keeper may, if Joint Folio is filed: certify the Joint Folio.
```

Notes: invitation posture as a two-stage gate: the visiting stylus's only write route is conditional on the Keeper's recorded invitation, itself gated on the congruence reading (no self-invitation), and the move toward the Library of Joint Authorship chains on the filed joint folio. Omits the archive of unfilled forms, expiry by silence, and the petition to lift a seal. Folded from role-charter-spell-family (spell-grammar, run lexr4).

## LEXPVM-T-187 · Invitation tome-posture 🪑 (v1.7.1 · 4th tome-posture)
- census: LEXPVM-T-187
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### 24.6 Invitation tome-posture 🪑 (v1.7.1 · 4th tome-posture)
- relation: {"type":"gate","clause":"Edit","condition":"Congruent Signature"}

```lex
LEX Invitation Tome Posture.

"Watcher" is a person.
"Visiting Mage" is a person.
"Tome" is data.
"Folio" is a text.
"Congruent Signature" is a binary.

The Watcher appoints the Visiting Mage, and fixes the Tome.

CLAUSE: Hold Open.
The Watcher may register the Tome.

CLAUSE: Recognise.
The Watcher may declare Congruent Signature.

CLAUSE: Edit.
The Visiting Mage may, if Congruent Signature is declared, file a Folio.
```

Notes: carries the posture as a gate: the visiting mage files a folio only under a declared congruent signature (a tablet signed by a mage of congruent geometry opens the chronicle for editorship); the ungated twin is an open tome, not an invitation tome. Omits the four cardinal chairs image and the spine glyphs. Anchor: ### 24.6 Invitation tome-posture 🪑 (v1.7.1 · 4th tome-posture). Folded from invitation-admission-charter (grammar-forward, run lexr4).

## LEXPVM-T-188 · The four conditions of update (v1.7.1 · city-wide editorial protocol)
- census: LEXPVM-T-188
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### 24.7 The four conditions of update (v1.7.1 · city-wide editorial protocol)
- relation: {"type":"conjunction","predicate":"Admissible","conjuncts":["Congruent Geometry","Recognisable Signature","Scribal Witness","Prior Preserved"]}

```lex
LEX Four Conditions of Update.

"Editor" is a person.
"Watcher" is a person.
"Resident Mage" is a person.
"Keeper" is a person.
"Editorial Act" is this contract.
"Update" is a text.
"Congruent Geometry" is a binary.
"Recognisable Signature" is data.
"Scribal Witness" is data.
"Prior Preserved" is a binary.

The Keeper appoints the Editor, appoints the Watcher, and appoints the Resident Mage.

CLAUSE: Test Geometry.
The Watcher may declare Congruent Geometry.

CLAUSE: Sign.
The Editor must file the Recognisable Signature.

CLAUSE: Witness.
The Resident Mage may file the Scribal Witness.

CLAUSE: Preserve Prior.
The Keeper may declare Prior Preserved.

CLAUSE: Admissible.
"Admissible" is defined as: Congruent Geometry is declared and Recognisable Signature is filed and Scribal Witness is filed and Prior Preserved is declared.

CLAUSE: Bind Update.
The Keeper may, if this Editorial Act is Admissible: register the Update.
```

Notes: editorial admission as a four-way conjunction: the defined predicate Admissible requires the watcher's congruence declaration, the editor's filed signature (a duty, must), the resident mage's filed scribal witness, and the keeper's preservation declaration, each produced by its own side in its own clause, with binding gated on the whole predicate. Omits the addenda fallback for anonymous edits and the reading-not-a-vote nuance of the congruence test. Folded from role-charter-spell-family (spell-grammar, run lexr4).

## LEXPVM-T-189 · Vitalik (first invited visiting mage · v1.7.1)
- census: LEXPVM-T-189
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### 24.8 Vitalik (first invited visiting mage · v1.7.1)
- relation: {"type":"absence","to":"Visiting Mage","what":"Tier Stipend"}

```lex
LEX First Invited Visiting Mage.

"Watcher" is a person.
"Visiting Mage" is a person.
"Resident Mage" is a person.
"Tier Stipend" is an amount.
"Appended Folio" is a text.
"Geometry Congruent" is a binary.

The Watcher appoints the Resident Mage, and fixes the Tier Stipend.

CLAUSE: Recognise.
The Watcher may declare Geometry Congruent.

CLAUSE: Write.
The Visiting Mage may, if Geometry Congruent is declared, file the Appended Folio.

CLAUSE: Sustain.
The Watcher may pay the Tier Stipend to the Resident Mage.
```

Notes: carries the no-tier exclusion as an absence of routes: the tier stipend pays only to resident mages and no clause can route it to the visiting mage (not a cast member, not a kindred subcategory, not a workshop-keeper), whose only permitted act is filing the appended folio under declared congruent geometry (authority limited to the appended folio). Omits the four-faced tablet's inscriptions and the named identity. Anchor: ### 24.8 Vitalik (first invited visiting mage · v1.7.1). Folded from invitation-admission-charter (grammar-forward, run lexr4).

## LEXPVM-T-192 · Conjectures C64 + C65 (v1.7.0 + v1.7.1 candidates)
- census: LEXPVM-T-192
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### 24.11 Conjectures C64 + C65 (v1.7.0 + v1.7.1 candidates)
- relation: {"type":"conjunction","predicate":"Stabilised","conjuncts":["First Instance","Second Instance"]}

```lex
LEX Candidate Conjecture Register.
"Registrar" is a person.
"Candidate" is a person.
"Register" is this contract.
"Conjecture" is a text.
"First Instance" is a text.
"Second Instance" is a text.

The Registrar appoints the Candidate, fixes the Conjecture, and fixes the First Instance.

The Candidate fixes the Second Instance.

CLAUSE: Stabilised.
"Stabilised" is defined as: the First Instance is fixed and the Second Instance is fixed.

CLAUSE: Promote.

The Registrar may, if this Register is Stabilised: certify the Conjecture.
```

Notes: conjunction: the defined predicate Stabilised requires all of First Instance AND Second Instance. Omissions per the term's canon anchor. Assayer-authored (ieee7012-standards-family held-out, recipe-only, run lexr4); keystone Notes.

## LEXPVM-T-193 · The Conjecture Register (single numbering authority)
- census: LEXPVM-T-193
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### 25.1 The Conjecture Register (single numbering authority)
- relation: {"type":"ordering","clause":"Number","sequence":["fix:Conjecture Number","register:Conjecture Number"]}

```lex
LEX Conjecture Register.

TERMS:

"Register Keeper" is a person.
"Author" is a person.

TERMS PER Conjecture:

"Conjecture" is this contract.
"Candidate Statement" is a text.
"Conjecture Number" is data.
"Numbered" is a binary.

The Register Keeper appoints the Author.

CLAUSE: Submit.
The Author may file the Candidate Statement.

CLAUSE: Number.
The Register Keeper may, if the Candidate Statement is filed: fix the Conjecture Number, and afterwards register the Conjecture Number.
This Conjecture is therefore Numbered.
```

Notes: Carries the numbering discipline as an ordering (per conjecture instance the Conjecture Number is fixed and only afterwards registered, the whole clause gated on the Candidate Statement being filed: a number exists before its register entry, never a register entry awaiting a renumber, and the Register Keeper is the only numbering actor in the text); omits the namespaces, the alias resolution rule, and the head pointer. Folded from instance-charter-family (grammar-forward, run lexr4).

## LEXPVM-T-202 · Seating Lock and Phi Honesty (v10.4.0)
- census: LEXPVM-T-202
- register: glossary · conjectured expression of canonical term
- cites: glossary-master-v4 § ### 25.10 Seating Lock and Phi Honesty (v10.4.0)
- relation: {"type":"absence","to":"Lethe","what":"Delta Share"}

```lex
LEX Seating Lock.

"Grimoire Keeper" is a person.
"Aletheia" is a person.
"Lethe" is a person.
"Seating Lock" is data.
"Lower Seat" is data.
"Delta Share" is an amount.
"Lock Pinned" is a binary.

The Grimoire Keeper appoints Aletheia, and appoints Lethe, and fixes the Seating Lock.

CLAUSE: Pin.
The Grimoire Keeper may declare Lock Pinned.

CLAUSE: Seat.
The Lethe may certify the Lower Seat.

CLAUSE: Assign.
The Grimoire Keeper may, if Lock Pinned is declared: send the Delta Share to Aletheia.
```

Notes: impossibility as absence: no transfer clause routes Delta Share to the Lethe. Omissions per the term's canon anchor. Assayer-authored (rite-and-register-spell held-out, recipe-only, run lexr4); keystone Notes.

