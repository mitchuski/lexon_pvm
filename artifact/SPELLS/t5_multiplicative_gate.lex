LEX The Multiplicative Gate.

"First Person" is a person.
"Swordsman" is a person.
"Proposer" is a person.
"Gate" is this contract.
"Candidate Value" is an amount.
"Gate Passed" is a binary.
"Constraint Held" is a binary.
"Frontier Beaten" is a binary.

The First Person pays the Candidate Value into escrow, appoints the Swordsman, and appoints the Proposer.

CLAUSE: Pass Gate.
The Swordsman may declare Gate Passed.

CLAUSE: Hold Constraint.
The Swordsman may declare Constraint Held.

CLAUSE: Beat Frontier.
The Swordsman may declare Frontier Beaten.

CLAUSE: Validated.
"Validated" is defined as: Gate Passed is declared and Constraint Held is declared and Frontier Beaten is declared.

CLAUSE: Release.
The First Person may, if this Gate is Validated: return the remainder of the escrow to the First Person.
