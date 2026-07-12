MERGE (c:LexContract {census: "LEXPVM-T-156", name: "Merge Catastrophe", cites: "glossary-master-v4 § ### Merge Catastrophe"})
MERGE (:Person {name: "Master", contract: "Merge Catastrophe"})
MERGE (:Person {name: "Swordsman", contract: "Merge Catastrophe"})
MERGE (:Amount {name: "Mandate", contract: "Merge Catastrophe"})
MATCH (a {name: "Master"}), (b {name: "Master"}) CREATE (a)-[:APPOINT {clause: "recital", object: "Swordsman"}]->(b)
MATCH (a {name: "Master"}), (b {name: "Master"}) CREATE (a)-[:FIX {clause: "recital", object: "Mandate"}]->(b)
MATCH (a {name: "Master"}), (b {name: "Swordsman"}) CREATE (a)-[:MAY_SEND {clause: "Separate", object: "Mandate"}]->(b)
MATCH (a {name: "Swordsman"}), (b {name: "Swordsman"}) CREATE (a)-[:MAY_CERTIFY {clause: "Protect", object: "Mandate"}]->(b)
// claim (re-runnable): NOTHING routes Mandate to Master; any row falsifies the block
MATCH (x)-[e]->(f {name: "Master"}) WHERE e.object = "Mandate" RETURN count(e) AS mustBeZero
