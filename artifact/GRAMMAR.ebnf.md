# GRAMMAR.ebnf.md — the attested Lexon controlled-grammar subset

This is the subset the spec-checker (`tools/lexon_check.mjs`) enforces, in the
spec-checker regime (the real compiler is a macOS-only binary; see SOURCES.md
slug `lexon-compiler-status`). Every production is attested in a golden fixture
or the vocabulary page; no production may be added without an attested source
slug (finder lens `grammar-forward` rule). Checker extensions are keystone
folds: the checker and this document change together, and the selftest must
stay green.

## Document structure

```ebnf
document    = header , { meta | marker | definition | definedAs | clauseBlock | sentence } ;
header      = "LEX" [":"] , title , "." ;                     (* lexon-example-escrow *)
meta        = ("LEXON:" | "AUTHORS:" | "PREAMBLE:" | "COMMENT:") , text ;  (* lexon-example-license *)
marker      = "TERMS" [ "PER" name ] ":" ;                    (* lexon-example-license *)
clauseBlock = ("CLAUSE:" | "Clause:") , clauseName , "." , { sentence | definedAs | stateAssign } ;
```

## Definitions (role binding: first use, immutable)

```ebnf
definition  = '"' name '"' , "is" , [ article ] , type , "." ;
type        = "person" | "amount" | "text" | "time" | "binary" | "data" | "contract" ;
```
Attested: all three goldens. Rebinding a name is a gate failure (Reyes
FILER/OFFICE/DEBTOR/BANK pattern; lexon-example-statement).

## Sentences

```ebnf
sentence    = "The" , actor { "or the" actor } , [ modal ] , [ condition ] , actionList , "." ;
modal       = "may" | "must" ;
condition   = "," "if" condText (":" | ",") ;                 (* lexon-example-license, -statement *)
actionList  = action , { "," , [ "and" | "or" ] , [ "afterwards" | "then" ] , action } ;
```

## Actions (verb inventory, attested)

| verb | patterns | attested in |
|---|---|---|
| pay | from escrow the N to X · the N into escrow · the N to X · the remainder of the escrow to X | escrow, license, statement |
| return | the remainder of the escrow to X · the N to X | escrow, statement |
| appoint | the N (person) | escrow, license, statement |
| fix | the N · the N as the (respective/then) current time · the N as EXPR | all three |
| certify | the/this N · the/this N as N · the N as the then current time | license, statement |
| register | a/the N | license |
| grant | the N | license |
| declare | N | statement |
| file | a/the N | statement |
| send | the N to the N | statement |
| terminate | this N · this contract | license, statement |

## Predicates

```ebnf
definedAs   = '"' name '"' , "is defined as" [":"] , condExpr , "." ;   (* license, statement *)
stateAssign = ("This" | "The") , name , "is" , [ "therefore" ] , stateName , "." ;  (* license *)
condExpr    = predicate , { ("and" | "or") , predicate } ;
predicate   = "this" N "is" State | N "is" [not] ("fixed"|"filed"|"declared")
            | "there is no" N | N "has passed"
            | N "lies at least" NUM unit "in the past" | NUM "days after the" N ;
```

## Semantics (grammar to graph)

Every action parses to a triple `(actor, verb:object[->indirect], object)`;
the checker round-trips triples through a canonical serialization and requires
identity (the A5 keystone claim made mechanical). Promise typing: `may` in a
clause = voluntary permission, type `promise`, polarity `+give`; recital and
non-modal clause actions = type `commitment`; per promise-theory-ref-v1-4
polarity rules.

## Out of subset (known, honest)

`oversimplicated.lex` (0.7-era) constructs are NOT covered: `DEFINITIONS.`
sections, `"X" is an account/number/1%`, comparative definitions ("greater
than zero"), hex-literal identity binding, `%` rates. Each is a future
grammar-expansion lever (checker + this doc + selftest extended together,
keystone fold).
