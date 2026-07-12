MERGE (c:LexContract {census: "LEXPVM-T-157", name: "Zero-Knowledge Orbit", cites: "glossary-master-v4 § ### Zero-Knowledge Orbit"})
MERGE (:Person {name: "First Person", contract: "Zero-Knowledge Orbit"})
MERGE (:Person {name: "Moon", contract: "Zero-Knowledge Orbit"})
MERGE (:Text {name: "Collision", contract: "Zero-Knowledge Orbit"})
MERGE (:Text {name: "Tide", contract: "Zero-Knowledge Orbit"})
MERGE (:Contract {name: "Orbit", contract: "Zero-Knowledge Orbit"})
MATCH (a {name: "First Person"}), (b {name: "First Person"}) CREATE (a)-[:APPOINT {clause: "recital", object: "Moon"}]->(b)
MATCH (a {name: "Moon"}), (b {name: "Moon"}) CREATE (a)-[:MAY_FIX {clause: "Orbit", object: "Collision"}]->(b)
MATCH (a {name: "Moon"}), (b {name: "Moon"}) CREATE (a)-[:MAY_CERTIFY {clause: "Orbit", object: "Tide"}]->(b)
MATCH (a {name: "Moon"}), (b {name: "First Person"}) CREATE (a)-[:MAY_SEND {clause: "Prove", object: "Tide"}]->(b)
// claim (re-runnable): NOTHING routes Collision to First Person; any row falsifies the block
MATCH (x)-[e]->(f {name: "First Person"}) WHERE e.object = "Collision" RETURN count(e) AS mustBeZero
