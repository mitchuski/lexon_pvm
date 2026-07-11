MERGE (c:LexContract {census: "LEXPVM-T-204", name: "Agent", cites: "promise-theory-ref-v1-4 § ## Quick Reference: Concept Mappings"})
MERGE (:Person {name: "Agent", contract: "Agent"})
MERGE (:Person {name: "Neighbor", contract: "Agent"})
MERGE (:Text {name: "Own Conduct", contract: "Agent"})
MERGE (:Text {name: "Peer Conduct", contract: "Agent"})
MERGE (:Amount {name: "Assessment", contract: "Agent"})
MATCH (a {name: "Agent"}), (b {name: "Agent"}) CREATE (a)-[:FIX {clause: "recital", object: "Own Conduct"}]->(b)
MATCH (a {name: "Neighbor"}), (b {name: "Neighbor"}) CREATE (a)-[:FIX {clause: "recital", object: "Peer Conduct"}]->(b)
MATCH (a {name: "Agent"}), (b {name: "Neighbor"}) CREATE (a)-[:MAY_SEND {clause: "Promise Own Conduct", object: "Own Conduct"}]->(b)
MATCH (a {name: "Agent"}), (b {name: "Agent"}) CREATE (a)-[:MAY_FIX {clause: "Assess", object: "Assessment"}]->(b)
MATCH (a {name: "Agent"}), (b {name: "Agent"}) CREATE (a)-[:MAY_CERTIFY {clause: "Assess", object: "Assessment"}]->(b)
// claim (re-runnable): NOTHING routes Assessment to Neighbor; any row falsifies the block
MATCH (x)-[e]->(f {name: "Neighbor"}) WHERE e.object = "Assessment" RETURN count(e) AS mustBeZero
