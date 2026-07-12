MERGE (c:LexContract {census: "LEXPVM-T-152", name: "Manifold Proof", cites: "glossary-master-v4 § ### Manifold Proof"})
MERGE (:Person {name: "Prover", contract: "Manifold Proof"})
MERGE (:Person {name: "Walker", contract: "Manifold Proof"})
MERGE (:Data {name: "Path", contract: "Manifold Proof"})
MERGE (:Data {name: "Proof", contract: "Manifold Proof"})
MERGE (:Amount {name: "Secret", contract: "Manifold Proof"})
MERGE (:Binary {name: "Traversal Complete", contract: "Manifold Proof"})
MATCH (a {name: "Prover"}), (b {name: "Prover"}) CREATE (a)-[:APPOINT {clause: "recital", object: "Walker"}]->(b)
MATCH (a {name: "Prover"}), (b {name: "Prover"}) CREATE (a)-[:FIX {clause: "recital", object: "Path"}]->(b)
MATCH (a {name: "Walker"}), (b {name: "Walker"}) CREATE (a)-[:MAY_REGISTER {clause: "Walk", object: "Path"}]->(b)
MATCH (a {name: "Walker"}), (b {name: "Walker"}) CREATE (a)-[:MAY_DECLARE {clause: "Walk", object: "Traversal Complete"}]->(b)
MATCH (a {name: "Prover"}), (b {name: "Prover"}) CREATE (a)-[:MAY_CERTIFY {clause: "Certify", object: "Proof", condition: "Traversal Complete is declared"}]->(b)
// claim (re-runnable): NOTHING routes Secret to Walker; any row falsifies the block
MATCH (x)-[e]->(f {name: "Walker"}) WHERE e.object = "Secret" RETURN count(e) AS mustBeZero
