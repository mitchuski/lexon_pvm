MERGE (c:LexContract {census: "LEXPVM-T-189", name: "Vitalik (first invited visiting mage · v1.7.1)", cites: "glossary-master-v4 § ### 24.8 Vitalik (first invited visiting mage · v1.7.1)"})
MERGE (:Person {name: "Watcher", contract: "Vitalik (first invited visiting mage · v1.7.1)"})
MERGE (:Person {name: "Visiting Mage", contract: "Vitalik (first invited visiting mage · v1.7.1)"})
MERGE (:Person {name: "Resident Mage", contract: "Vitalik (first invited visiting mage · v1.7.1)"})
MERGE (:Amount {name: "Tier Stipend", contract: "Vitalik (first invited visiting mage · v1.7.1)"})
MERGE (:Text {name: "Appended Folio", contract: "Vitalik (first invited visiting mage · v1.7.1)"})
MERGE (:Binary {name: "Geometry Congruent", contract: "Vitalik (first invited visiting mage · v1.7.1)"})
MATCH (a {name: "Watcher"}), (b {name: "Watcher"}) CREATE (a)-[:APPOINT {clause: "recital", object: "Resident Mage"}]->(b)
MATCH (a {name: "Watcher"}), (b {name: "Watcher"}) CREATE (a)-[:FIX {clause: "recital", object: "Tier Stipend"}]->(b)
MATCH (a {name: "Watcher"}), (b {name: "Watcher"}) CREATE (a)-[:MAY_DECLARE {clause: "Recognise", object: "Geometry Congruent"}]->(b)
MATCH (a {name: "Visiting Mage"}), (b {name: "Visiting Mage"}) CREATE (a)-[:MAY_FILE {clause: "Write", object: "Appended Folio", condition: "Geometry Congruent is declared"}]->(b)
MATCH (a {name: "Watcher"}), (b {name: "Resident Mage"}) CREATE (a)-[:MAY_PAY {clause: "Sustain", object: "Tier Stipend"}]->(b)
// claim (re-runnable): NOTHING routes Tier Stipend to Visiting Mage; any row falsifies the block
MATCH (x)-[e]->(f {name: "Visiting Mage"}) WHERE e.object = "Tier Stipend" RETURN count(e) AS mustBeZero
