MERGE (c:LexContract {census: "LEXPVM-T-053", name: "Trust Spanning Protocol (TSP)", cites: "glossary-master-v4 § ### Trust Spanning Protocol (TSP)"})
MERGE (:Person {name: "Origin", contract: "Trust Spanning Protocol (TSP)"})
MERGE (:Person {name: "Relay", contract: "Trust Spanning Protocol (TSP)"})
MERGE (:Person {name: "Endpoint", contract: "Trust Spanning Protocol (TSP)"})
MERGE (:Amount {name: "Payload", contract: "Trust Spanning Protocol (TSP)"})
MERGE (:Data {name: "Envelope", contract: "Trust Spanning Protocol (TSP)"})
MATCH (a {name: "Origin"}), (b {name: "Origin"}) CREATE (a)-[:FIX {clause: "recital", object: "Payload"}]->(b)
MATCH (a {name: "Origin"}), (b {name: "Origin"}) CREATE (a)-[:FIX {clause: "recital", object: "Envelope"}]->(b)
MATCH (a {name: "Origin"}), (b {name: "Origin"}) CREATE (a)-[:APPOINT {clause: "recital", object: "Endpoint"}]->(b)
MATCH (a {name: "Origin"}), (b {name: "Relay"}) CREATE (a)-[:MAY_SEND {clause: "Span", object: "Envelope"}]->(b)
MATCH (a {name: "Relay"}), (b {name: "Endpoint"}) CREATE (a)-[:MAY_SEND {clause: "Forward", object: "Envelope", condition: "the Envelope is fixed"}]->(b)
MATCH (a {name: "Origin"}), (b {name: "Endpoint"}) CREATE (a)-[:MAY_PAY {clause: "Deliver", object: "Payload", condition: "the Envelope is fixed"}]->(b)
// claim (re-runnable): NOTHING routes Payload to Relay; any row falsifies the block
MATCH (x)-[e]->(f {name: "Relay"}) WHERE e.object = "Payload" RETURN count(e) AS mustBeZero
