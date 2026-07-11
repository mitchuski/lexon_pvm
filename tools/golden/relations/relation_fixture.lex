LEX Relation Fixture.

"Keeper" is a person.
"Adversary" is a person.
"Witness" is a person.
"Vault" is an amount.
"Fee" is an amount.
"Opened" is a binary.
"Sealed" is a binary.
"Fixture" is this contract.

The Keeper pays the Vault into escrow, appoints the Witness, appoints the Adversary, and fixes the Fee.

CLAUSE: Open.
The Witness may declare Opened.

CLAUSE: Draw.
The Keeper may, if Opened is declared: pay from escrow the Fee to the Witness.

CLAUSE: Chain.
The Keeper may pay from escrow the Fee to the Witness, and afterwards declare Sealed.

CLAUSE: Ready.
"Ready" is defined as: Opened is declared and Sealed is declared.

CLAUSE: Close.
The Keeper may, if this Fixture is Ready: return the remainder of the escrow to the Keeper.
