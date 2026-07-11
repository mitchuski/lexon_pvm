MERGE (c:LexContract {census: "LEXPVM-T-039", name: "Guardian", cites: "glossary-master-v4 § ### Guardian"})
MERGE (:Person {name: "Guardian", contract: "Guardian"})
MERGE (:Person {name: "City", contract: "Guardian"})
MERGE (:Amount {name: "Stake", contract: "Guardian"})
MERGE (:Text {name: "Validation", contract: "Guardian"})
MERGE (:Binary {name: "Dragon Tier Held", contract: "Guardian"})
MERGE (:Binary {name: "Integrity Breach", contract: "Guardian"})
MATCH (a {name: "City"}), (b {name: "City"}) CREATE (a)-[:APPOINT {clause: "recital", object: "Guardian"}]->(b)
MATCH (a {name: "City"}), (b {name: "City"}) CREATE (a)-[:MAY_DECLARE {clause: "Qualify", object: "Dragon Tier Held"}]->(b)
MATCH (a {name: "Guardian"}), (b {name: "Guardian"}) CREATE (a)-[:MAY_PAY {clause: "Commit Stake", object: "Stake", condition: "Dragon Tier Held is declared"}]->(b)
MATCH (a {name: "Guardian"}), (b {name: "Guardian"}) CREATE (a)-[:FILE {clause: "Validate", object: "Validation"}]->(b)
MATCH (a {name: "City"}), (b {name: "City"}) CREATE (a)-[:MAY_PAY {clause: "Slash", object: "Stake", condition: "Integrity Breach is declared"}]->(b)
// claim (re-runnable): NOTHING routes Stake to Guardian; any row falsifies the block
MATCH (x)-[e]->(f {name: "Guardian"}) WHERE e.object = "Stake" RETURN count(e) AS mustBeZero
