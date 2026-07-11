MERGE (c:LexContract {census: "LEXPVM-T-057", name: "ERC-7812", cites: "glossary-master-v4 § ### ERC-7812"})
MERGE (:Person {name: "Prover", contract: "ERC-7812"})
MERGE (:Person {name: "Verifier", contract: "ERC-7812"})
MERGE (:Amount {name: "Identity", contract: "ERC-7812"})
MERGE (:Text {name: "Identity Proof", contract: "ERC-7812"})
MATCH (a {name: "Prover"}), (b {name: "Prover"}) CREATE (a)-[:APPOINT {clause: "recital", object: "Verifier"}]->(b)
MATCH (a {name: "Prover"}), (b {name: "Prover"}) CREATE (a)-[:FIX {clause: "recital", object: "Identity"}]->(b)
MATCH (a {name: "Prover"}), (b {name: "Prover"}) CREATE (a)-[:MAY_FIX {clause: "Prove", object: "Identity Proof"}]->(b)
MATCH (a {name: "Prover"}), (b {name: "Verifier"}) CREATE (a)-[:MAY_SEND {clause: "Prove", object: "Identity Proof"}]->(b)
// claim (re-runnable): NOTHING routes Identity to Verifier; any row falsifies the block
MATCH (x)-[e]->(f {name: "Verifier"}) WHERE e.object = "Identity" RETURN count(e) AS mustBeZero
