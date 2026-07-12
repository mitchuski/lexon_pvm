MERGE (c:LexContract {census: "LEXPVM-T-033", name: "Zero-Knowledge Proof (ZKP)", cites: "glossary-master-v4 § ### Zero-Knowledge Proof (ZKP)"})
MERGE (:Person {name: "First Person", contract: "Zero-Knowledge Proof (ZKP)"})
MERGE (:Person {name: "Mage", contract: "Zero-Knowledge Proof (ZKP)"})
MERGE (:Text {name: "Credential", contract: "Zero-Knowledge Proof (ZKP)"})
MERGE (:Text {name: "Proof", contract: "Zero-Knowledge Proof (ZKP)"})
MERGE (:Number {name: "Disclosure Count", contract: "Zero-Knowledge Proof (ZKP)"})
MERGE (:Contract {name: "Protocol", contract: "Zero-Knowledge Proof (ZKP)"})
MATCH (a {name: "First Person"}), (b {name: "First Person"}) CREATE (a)-[:APPOINT {clause: "recital", object: "Mage"}]->(b)
MATCH (a {name: "First Person"}), (b {name: "First Person"}) CREATE (a)-[:FIX {clause: "recital", object: "Credential"}]->(b)
MATCH (a {name: "Mage"}), (b {name: "First Person"}) CREATE (a)-[:MAY_SEND {clause: "Prove", object: "Proof"}]->(b)
MATCH (a {name: "First Person"}), (b {name: "First Person"}) CREATE (a)-[:MAY_CERTIFY {clause: "Verify", object: "Proof", condition: "this Protocol is Zero Knowledge"}]->(b)
// claim (re-runnable): NOTHING routes Credential to First Person; any row falsifies the block
MATCH (x)-[e]->(f {name: "First Person"}) WHERE e.object = "Credential" RETURN count(e) AS mustBeZero
