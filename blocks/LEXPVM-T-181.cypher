MERGE (c:LexContract {census: "LEXPVM-T-181", name: "Cousin tier, deliberately unattached", cites: "glossary-master-v4 § ### 23.8 Cousin tier, deliberately unattached"})
MERGE (:Person {name: "City", contract: "Cousin tier, deliberately unattached"})
MERGE (:Person {name: "Cast Mage", contract: "Cousin tier, deliberately unattached"})
MERGE (:Person {name: "Cousin", contract: "Cousin tier, deliberately unattached"})
MERGE (:Amount {name: "Attachment", contract: "Cousin tier, deliberately unattached"})
MERGE (:Text {name: "Own Binding", contract: "Cousin tier, deliberately unattached"})
MERGE (:Binary {name: "Binding Reserved", contract: "Cousin tier, deliberately unattached"})
MATCH (a {name: "City"}), (b {name: "City"}) CREATE (a)-[:APPOINT {clause: "recital", object: "Cast Mage"}]->(b)
MATCH (a {name: "City"}), (b {name: "Cast Mage"}) CREATE (a)-[:MAY_SEND {clause: "Attach Cast", object: "Attachment"}]->(b)
MATCH (a {name: "City"}), (b {name: "City"}) CREATE (a)-[:MAY_DECLARE {clause: "Reserve", object: "Binding Reserved"}]->(b)
MATCH (a {name: "Cousin"}), (b {name: "Cousin"}) CREATE (a)-[:MAY_REGISTER {clause: "Forge Own", object: "Own Binding"}]->(b)
// claim (re-runnable): NOTHING routes Attachment to Cousin; any row falsifies the block
MATCH (x)-[e]->(f {name: "Cousin"}) WHERE e.object = "Attachment" RETURN count(e) AS mustBeZero
