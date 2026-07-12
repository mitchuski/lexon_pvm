MERGE (c:LexContract {census: "LEXPVM-T-051", name: "Golden Ratio (φ)", cites: "glossary-master-v4 § ### Golden Ratio (φ)"})
MERGE (:Person {name: "Practitioner", contract: "Golden Ratio (φ)"})
MERGE (:Person {name: "Observer", contract: "Golden Ratio (φ)"})
MERGE (:Person {name: "Shielded Pool", contract: "Golden Ratio (φ)"})
MERGE (:Amount {name: "Transparent Share", contract: "Golden Ratio (φ)"})
MERGE (:Amount {name: "Shielded Share", contract: "Golden Ratio (φ)"})
MERGE (:Binary {name: "Split Fixed", contract: "Golden Ratio (φ)"})
MATCH (a {name: "Practitioner"}), (b {name: "Practitioner"}) CREATE (a)-[:APPOINT {clause: "recital", object: "Observer"}]->(b)
MATCH (a {name: "Practitioner"}), (b {name: "Practitioner"}) CREATE (a)-[:MAY_DECLARE {clause: "Fix Split", object: "Split Fixed"}]->(b)
MATCH (a {name: "Practitioner"}), (b {name: "Observer"}) CREATE (a)-[:MAY_SEND {clause: "Route Transparent", object: "Transparent Share", condition: "Split Fixed is declared"}]->(b)
MATCH (a {name: "Practitioner"}), (b {name: "Shielded Pool"}) CREATE (a)-[:MAY_PAY {clause: "Route Shielded", object: "Shielded Share", condition: "Split Fixed is declared"}]->(b)
// claim (re-runnable): NOTHING routes Shielded Share to Observer; any row falsifies the block
MATCH (x)-[e]->(f {name: "Observer"}) WHERE e.object = "Shielded Share" RETURN count(e) AS mustBeZero
