MERGE (c:LexContract {census: "LEXPVM-T-154", name: "Ur-Swordsman", cites: "glossary-master-v4 § ### Ur-Swordsman"})
MERGE (:Person {name: "Ur-Swordsman", contract: "Ur-Swordsman"})
MERGE (:Person {name: "Principal", contract: "Ur-Swordsman"})
MERGE (:Amount {name: "Light", contract: "Ur-Swordsman"})
MATCH (a {name: "Principal"}), (b {name: "Principal"}) CREATE (a)-[:APPOINT {clause: "recital", object: "Ur-Swordsman"}]->(b)
MATCH (a {name: "Principal"}), (b {name: "Principal"}) CREATE (a)-[:FIX {clause: "recital", object: "Light"}]->(b)
MATCH (a {name: "Ur-Swordsman"}), (b {name: "Principal"}) CREATE (a)-[:MAY_SEND {clause: "Reflect", object: "Light"}]->(b)
// claim (re-runnable): NOTHING routes Light to Ur-Swordsman; any row falsifies the block
MATCH (x)-[e]->(f {name: "Ur-Swordsman"}) WHERE e.object = "Light" RETURN count(e) AS mustBeZero
