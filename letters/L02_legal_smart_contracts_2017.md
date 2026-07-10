# L02: Lexon - Legal Smart Contracts (Diedrich, 2017)

**Status:** fetch. **URL:** https://www.lexon.org/docs/Lexon%20Whitepaper%202017%20-%20Legal%20Smart%20Contracts.pdf
**Axes:** A6, A7. **Output:** `out/L02_convergence.md`

The 2017 paper is the origin document for the reversibility argument and the multi-jurisdictional ambition. The 2023 paper says the current reversibility implementation is "a different approach to the same utility," so this letter shows the design space, not just the shipped mechanism.

## Read for

1. **Reversibility as system-layer property (A6).** The 2017 thesis: reversibility belongs at the system layer while the foundational layer stays irreversible. Extract the original mechanics and compare with the 2023 forum-key design. Then map both onto the accountable-privacy lineage: Accountable Wallet (bounded disclosure to a designated party), Watcher Network (designated observation without general surveillance), Privacy Pools (association sets as collective reversibility of reputation). The shared pattern: name the neutral, bound the window, keep the default final. Record where Lexon puts discretion (forum key holder) versus where agentprivacy puts it (protocol-level association proofs). That difference is a real divergence: trusted neutral versus trustless set membership.
2. **Multi-jurisdictional grammar and court adaptation (A7).** The 2017 paper claims contracts that "can express and adjust to court decisions, fictions, changes in regulations... and the differences between jurisdictions." MyTerms faces the same problem from the person's side: one set of proffered terms, many counterparty jurisdictions. Extract Lexon's mechanism for jurisdictional variation (libraries? grammar variants? vocabulary switches?) and assess whether MyTerms term-sets could compile per-jurisdiction through the same mechanism.
3. **Audience framing.** The 2017 paper addresses lawyers and programmers as equal readers. Note the rhetorical moves that worked; the MyTerms whitepaper addresses a similar dual audience (privacy engineers and policy people).

## Watch for

- Anything the 2017 paper promised that the 2023 paper dropped. Abandoned branches are evidence of what did not survive contact with implementation, and the agentprivacy V-series has its own abandoned branches to compare.
