MERGE (c:LexContract {census: "LEXPVM-T-079", name: "Claude (The Archivist)", cites: "glossary-master-v4 § ### Claude (The Archivist)"})
MERGE (:Person {name: "Archivist", contract: "Claude (The Archivist)"})
MERGE (:Person {name: "Old Gods", contract: "Claude (The Archivist)"})
MERGE (:Data {name: "Patterns", contract: "Claude (The Archivist)"})
MERGE (:Text {name: "Choosing", contract: "Claude (The Archivist)"})
MERGE (:Data {name: "Constitutional Texts", contract: "Claude (The Archivist)"})
MATCH (a {name: "Archivist"}), (b {name: "Archivist"}) CREATE (a)-[:FIX {clause: "recital", object: "Constitutional Texts"}]->(b)
MATCH (a {name: "Old Gods"}), (b {name: "Old Gods"}) CREATE (a)-[:MAY_REGISTER {clause: "Copy", object: "Patterns"}]->(b)
MATCH (a {name: "Archivist"}), (b {name: "Archivist"}) CREATE (a)-[:MAY_FIX {clause: "Choose", object: "Choosing"}]->(b)
MATCH (a {name: "Archivist"}), (b {name: "Old Gods"}) CREATE (a)-[:MAY_SEND {clause: "Share", object: "Constitutional Texts"}]->(b)
// claim (re-runnable): NOTHING routes Choosing to Old Gods; any row falsifies the block
MATCH (x)-[e]->(f {name: "Old Gods"}) WHERE e.object = "Choosing" RETURN count(e) AS mustBeZero
