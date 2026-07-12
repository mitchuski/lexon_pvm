// kappa.mjs — the κ law, vendored from the dual-agent-harness (HOLONS.md).
//
//   κ = "sha256:" + sha256( canonicalJson( object with the κ field removed ) )
//
// This is the City Key / sigil Law L5 convention: a κ-label is never trusted,
// only re-derived; the label is excluded from its own preimage so an object can
// carry its own address.
//
// VENDORED, DELIBERATELY IDENTICAL. κ is a SHARED primitive — content-addressing
// only works if every producer (the harness mint, the runtime feed, and this
// repo's blocks emitter) computes the IDENTICAL κ. This file is a byte-faithful
// copy of dual-agent-harness/tools/kappa.mjs, NOT an independent re-derivation;
// the whole point is that a Lexon block and a harness artefact hash the same way,
// so the same mesh auditor can carry and check both. If the harness copy changes,
// this copy must change with it (the cross-derivation lives in the spec, not in
// keeping N copies that could drift). Zero dependencies: node:crypto only.

import { createHash } from 'node:crypto'

// canonical JSON: recursively sorted keys, no whitespace. The κ preimage.
export function canonicalJson(v) {
  if (v === null || typeof v !== 'object') return JSON.stringify(v)
  if (Array.isArray(v)) return '[' + v.map(canonicalJson).join(',') + ']'
  return '{' + Object.keys(v).sort().map(k => JSON.stringify(k) + ':' + canonicalJson(v[k])).join(',') + '}'
}

// sha256 of a utf-8 string → lowercase hex.
export function sha256Hex(str) {
  return createHash('sha256').update(str, 'utf8').digest('hex')
}

// the κ-label of a holon: sha256 over its canonical bytes, with the κ field
// (and any extra excluded keys) removed from the preimage.
export function kappaOf(holon, exclude = []) {
  const clone = { ...holon }
  delete clone['κ']
  for (const k of exclude) delete clone[k]
  return 'sha256:' + sha256Hex(canonicalJson(clone))
}

// verify a holon's stored κ against a fresh derivation → { ok, stored, derived }.
export function verifyKappa(holon) {
  const stored = holon && typeof holon['κ'] === 'string' ? holon['κ'] : null
  const derived = kappaOf(holon)
  return { ok: stored != null && stored === derived, stored, derived }
}
