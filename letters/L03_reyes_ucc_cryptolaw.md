# L03: Creating Cryptolaw for the Uniform Commercial Code (Reyes, 2021)

**Status:** fetch. **URL:** https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3809901
**Fallback if SSRN blocks:** https://lexon.org/reyes.html plus the abstract on the papers page; record the fallback in the chronicle header.
**Axes:** A5, A7. **Output:** `out/L03_convergence.md`

Reyes is the proof that Lexon survives contact with real statute. She writes U.C.C. Article 9 filing rules as Lexon code proposed as model law: the law itself is the program the filing office runs. This is the strongest available evidence for the "terms as executable law" axis.

## Read for

1. **Law-as-program compatibility claim (A7).** Reyes demonstrates the system "remains compatible with existing law." Extract exactly how: which U.C.C. rules execute, which stay prose, where the boundary falls. This boundary is the critical datum for MyTerms. IEEE P7012 terms must be enforceable under existing contract law while being machine-executable; Reyes has already walked that line for secured transactions. Record her compatibility argument structure for reuse.
2. **The financing statement as relationship record (A5).** A U.C.C.-1 filing is notice of a bilateral relationship (debtor, secured party) made legible to third parties without disclosing the full agreement. Compare with the VRC: bilateral relationship, third-party verifiable, content-minimal. The filing system's stated failure (no actual notice to interested parties) is a reconstruction/disclosure calibration problem: too little signal for legitimate parties. VRCs face the inverse: preventing too much signal to illegitimate ones. Same dial, opposite failure modes. Treat this symmetry as a candidate finding.
3. **Roles as bound nouns.** The Lexon interaction example (FILER, OFFICE, DEBTOR, BANK) binds names to roles on first use, immutably. Compare with DID-role binding in the trust flow (First Person, Swordsman, Mage, counterparty). Note that Lexon's binding is per-contract-instance; VRC binding is per-relationship with key rotation via KERI. Open question: does Lexon need a KERI-style rotation layer for long-lived legal instruments?

## Deliverable emphasis

This chronicle feeds probe (i) of `out/HENNING_BRIEF.md` most directly. Capture at least one concrete sketch: a MyTerms term (e.g. no third-party sharing beyond stated purpose) drafted as a three-clause Lexon text with Person, Counterparty, and Swordsman as defined nouns. Also record how Reyes's role-binding (FILER, OFFICE, DEBTOR, BANK) would appear as graph nodes: per-instance bound nouns are exactly the entity nodes a Bonfire graph extracts probabilistically, here produced deterministically.
