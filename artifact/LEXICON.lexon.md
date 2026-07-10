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
