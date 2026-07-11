MERGE (c:LexContract {census: "LEXPVM-T-205", name: "µ-promise: A --b--> B", cites: "promise-theory-ref-v1-4 § ## Quick Reference: Concept Mappings"})
MERGE (:Person {name: "Promiser", contract: "µ-promise: A --b--> B"})
MERGE (:Person {name: "Promisee", contract: "µ-promise: A --b--> B"})
MERGE (:Text {name: "Body", contract: "µ-promise: A --b--> B"})
MERGE (:Amount {name: "Promised Benefit", contract: "µ-promise: A --b--> B"})
MATCH (a {name: "Promiser"}), (b {name: "Promiser"}) CREATE (a)-[:APPOINT {clause: "recital", object: "Promisee"}]->(b)
MATCH (a {name: "Promiser"}), (b {name: "Promiser"}) CREATE (a)-[:FIX {clause: "recital", object: "Body"}]->(b)
MATCH (a {name: "Promiser"}), (b {name: "Promiser"}) CREATE (a)-[:FIX {clause: "recital", object: "Promised Benefit"}]->(b)
MATCH (a {name: "Promiser"}), (b {name: "Promisee"}) CREATE (a)-[:MAY_SEND {clause: "Give", object: "Body"}]->(b)
MATCH (a {name: "Promiser"}), (b {name: "Promisee"}) CREATE (a)-[:MAY_PAY {clause: "Keep", object: "Promised Benefit"}]->(b)
// claim (re-runnable): NOTHING routes Promised Benefit to Promiser; any row falsifies the block
MATCH (x)-[e]->(f {name: "Promiser"}) WHERE e.object = "Promised Benefit" RETURN count(e) AS mustBeZero
