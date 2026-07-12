# GRAMMAR.ebnf.md, the attested Lexon controlled-grammar subset

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

`oversimplicated.lex` (0.7-era) constructs NOT covered after the 2026-07-12
numeric fold: `DEFINITIONS.` sections, hex-literal identity binding, and `%`
rates (percent literals stay excluded: the assay pipeline scans proposals
for confidence percentages, and a % in lexText would collide with that
hard-constraint check; revisit only with an operator convention). Each is a future
grammar-expansion lever (checker + this doc + selftest extended together,
keystone fold).


## Relation claims (OT-3, mutation-probe layer)

A LEXICON entry's Notes line names the structural relation the expression
carries; `tools/relation_check.mjs` makes that claim mechanical. A claim is
JSON, one relation per claim, verified over parsed triples and defined-as
bodies (never name strings), and each claim must be DISTINGUISHABLE from its
minimal structural negation: the tool builds a mutated twin that still passes
the base gate, and the claim must fail on the twin.

```ebnf
claim       = gateClaim | orderClaim | conjClaim | absenceClaim ;
gateClaim   = "{ type: gate, clause: C, condition: B }" ;
              (* every action in clause C is conditional on binary B;
                 twin: condition stripped *)
orderClaim  = "{ type: ordering, clause: C, sequence: [verb:Obj, ...] }" ;
              (* clause C performs exactly this action order, >= 2 steps;
                 twin: order reversed *)
conjClaim   = "{ type: conjunction, predicate: D, conjuncts: [N, ...] }" ;
              (* defined predicate D requires ALL named conjuncts, >= 2;
                 twin: first conjunct dropped *)
absenceClaim= "{ type: absence, to: Role [, what: Amount|escrow-remainder] }" ;
              (* NO pay/return/send routes the amount to the role;
                 "themselves" aliases the actor; twin: probe route appended *)
```

Direction is claimed as an absence: what can NEVER route where. The T-148
lesson (CR-12) is the reason this layer exists: the base gate validates a
claim and its inverse under identical clause shapes, so the fortress-falls
direction lives in `{ type: absence, to: Key Holder, what: Scalar Secret }`,
not in prose. Regime caveat CR-11 binds here too: relations are clause-graph
properties under the spec-checker, not executed semantics.


## Numeric layer (0.7-attested, folded 2026-07-12)

Folded with checker + selftest together (the standing coupled-artifacts
rule). Every production cites lexon-example-oversimplicated (SOURCES.md):

```ebnf
defType     = ... | "number" | "account" ;            (* DEFINITIONS block *)
defInitial  = '"' name '"' "is a" type "," "initially" NUM "." ;
              (* "Maximum Members Count" is a number, initially 99. *)
setAction   = "set" , "the" , N ;                     (* recital: sets the Trader Rate *)
appointObj  = person | account ;                      (* appoints the Maintenance Account *)
comparative = N "is" ["not"] ("greater"|"less") "than" (NUM|"zero"|N)
            | N "is greater than or equal to half of" N ;
              (* condition/defined-as scaffold only; bare numeric literals
                 allowed in conditions, incl. decimals *)
```

Typing: initial literals bind only to number and amount definitions; appoint
accepts persons and accounts; pay objects remain amounts. Golden:
tools/golden/numeric.lex (constructed from the attested shapes, canary by
construction); mutants bad_initial.lex (missing comma) and
bad_comparative.lex (unbound comparand) must fail. This layer is what makes
the formula-hard census residue expressible with quantity-bearing anchors
instead of shape-only claims (CORPUS_COVERAGE_PLAN.md Phase 1.2).
