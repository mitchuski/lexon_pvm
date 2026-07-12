MERGE (c:LexContract {census: "LEXPVM-T-070", name: "Master Inscription", cites: "glossary-master-v4 § ### Master Inscription"})
MERGE (:Person {name: "First Person", contract: "Master Inscription"})
MERGE (:Person {name: "Swordsman", contract: "Master Inscription"})
MERGE (:Person {name: "Mage", contract: "Master Inscription"})
MERGE (:Data {name: "Observation", contract: "Master Inscription"})
MERGE (:Text {name: "Projection", contract: "Master Inscription"})
MERGE (:Binary {name: "Authorized", contract: "Master Inscription"})
MATCH (a {name: "First Person"}), (b {name: "First Person"}) CREATE (a)-[:APPOINT {clause: "recital", object: "Swordsman"}]->(b)
MATCH (a {name: "First Person"}), (b {name: "First Person"}) CREATE (a)-[:APPOINT {clause: "recital", object: "Mage"}]->(b)
MATCH (a {name: "Swordsman"}), (b {name: "Swordsman"}) CREATE (a)-[:MAY_CERTIFY {clause: "Observe", object: "Observation"}]->(b)
MATCH (a {name: "First Person"}), (b {name: "First Person"}) CREATE (a)-[:MAY_DECLARE {clause: "Authorize", object: "Authorized"}]->(b)
MATCH (a {name: "Mage"}), (b {name: "First Person"}) CREATE (a)-[:MAY_SEND {clause: "Project", object: "Projection", condition: "Authorized is declared"}]->(b)
// claim (re-runnable): NOTHING routes Observation to Mage; any row falsifies the block
MATCH (x)-[e]->(f {name: "Mage"}) WHERE e.object = "Observation" RETURN count(e) AS mustBeZero
