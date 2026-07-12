# 2026-07-12 · The holon layer: the block gains an address

## Verdict first

The First Person introduced a holon layer to the dual-agent harness — κ as
state, content-addressing baked into the runtime — and asked whether it
improves the Lexon work. The honest answer was yes, but scoped: it upgrades the
one place the Lexon work reaches outward (the blocks, the public-pole cargo)
and touches nothing in the research loop. That integration is now done and
pushed (Lexon_pvm 70a0a7c): every one of the 189 structured-language blocks is
a κ-addressed holon, the κ law is byte-identical to the harness reference, and
a new deterministic mesh auditor confirms 189/189 re-derive. CR-26 filed. The
atlas gained two edges tying the blocks to the κ-derivation and the holon
concept (left uncommitted in spellweb, which the First Person is live-editing).

## What a holon is, and why it fits here

A holon (HOLONS.md) is a whole that is also a part: a self-contained record
carrying a κ-label, `κ = "sha256:" + sha256(canonicalJson(object minus κ))` —
the City Key / sigil Law L5 convention, *never trusted, only re-derived*. The
label is excluded from its own preimage so the object carries its own address.

The Lexon `blocks/` were already holons in all but the label: self-contained,
provenance-carrying units built to compose into a shared public graph. The one
thing they lacked was the address. Adding it was not decorative — it fixed the
weakest seam in the whole workshop. A block's integrity was *trust the
emitter*: you believed `blocks_emit.mjs` computed the triples and claim
honestly. With κ it is *re-derive the address*: a mesh re-hashes and checks. A
block now has two independent checkable facts — its **relation claim is a
checkable constraint, its κ is a checkable identity** — and they compose into a
unit whose content and whose address are both re-derivable, which is exactly
what a shared graph needs to carry a stranger's contribution without trusting
the stranger.

## The load-bearing detail: the κ law is shared, not copied

Content-addressing only works if every producer computes the *identical* κ. So
`tools/kappa.mjs` is vendored byte-faithful from the harness, and the identity
was verified rather than assumed: the same object hashed to
`sha256:d2a0623d…` under both the Lexon copy and the harness reference. A Lexon
block and a harness artefact hash the same way; the same mesh auditor carries
both. This is deliberately the opposite of the gate discipline — for a *gate*,
two independent auditors are a feature (they catch each other); for an
*address*, divergence is a bug (it just breaks interoperability).

## The auditor call, made the same way the repo always makes it

`tools/blocks_audit.mjs` re-derives every block's κ and the corpus manifest's
κ. It is a deterministic, agent-free **auditor, not a harness** — HOLONS.md's
own call, and the correct one: a holon's interoperability claims are all
enumerable (does the κ re-derive? one hash), so there is nothing to tune to and
a harness round would be the universe-builder mistake. It matches the rest of
the repo's grain exactly: lexon_check re-parses, relation_check re-builds the
twin, coverage re-counts, blocks_audit re-hashes. Never trust, re-derive.
`MESH AUDIT PASS`, 189/189, manifest κ-self ok. `blocks/INDEX.json` is itself a
κ-addressed corpus manifest — the signed cargo a Diedrich or bonfires packet
would carry.

## The closure worth noticing

The holon layer's relational-edge rule — *a κ→κ edge between parties is a
candidate until a counterparty signature mints it* — is identically the Lexon
constitution's T6 door and the VRC term itself. The holon layer and the Lexon
constitution turn out to describe one principle from two directions: an
unsigned edge is a mirage at the social layer, and the First Person's signature
is what makes a crossing real. The membrane in the bonfires note now has a
mechanism under it.

## Honesty at win-prominence

- **Scoped, and held to the scope.** κ went on the blocks and the corpus
  manifest, and nowhere near the research loop. The census, the checker, the
  mutation probe, the LEXICON are untouched. Stamping κ on internal auditors
  would have been noise; the gain is entirely at the interop layer.
- **The spellweb edges are uncommitted.** The First Person is live-editing the
  graph (Nomia ⚖️, the Scrivener of the Two Readings, a Lexon law-house cast
  taking shape at V27). My two edges — `concept-lexon-blocks → concept-kappa
  -derivation` (implements) and `→ con-holon` (embodies) — sit in the working
  tree, coherent under the audit (708 nodes, 1717 edges, 0 errors), for the
  First Person to commit with their own batch rather than have me bundle their
  work-in-progress.

## The ledger

- Pushed: Lexon_pvm `70a0a7c` — kappa.mjs vendored, blocks emit κ, blocks_audit
  the mesh auditor, CR-26, the bonfires note / README / research note updated.
- Staged for the First Person: the two spellweb edges (in a live-edited tree).
- Untouched: the research loop; the coverage metric stayed 22, conform PASS.

## Handoff

The block is now a holon: a whole that stands alone and composes into a mesh,
carrying its own address and its own checkable claim. The write-path that was
*trust the emitter* is now *re-derive everything*. What remains outward — the
Diedrich brief, the first real crossing into a shared graph — is unchanged and
still the First Person's. The mechanism it was missing is no longer missing.
