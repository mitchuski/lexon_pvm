MERGE (c:LexContract {census: "LEXPVM-T-096", name: "Φ_inference (Inference-Layer Separation)", cites: "glossary-master-v4 § ### Φ_inference (Inference-Layer Separation)"})
MERGE (:Person {name: "Generator", contract: "Φ_inference (Inference-Layer Separation)"})
MERGE (:Person {name: "Solver", contract: "Φ_inference (Inference-Layer Separation)"})
MERGE (:Text {name: "Reasoning Graph", contract: "Φ_inference (Inference-Layer Separation)"})
MERGE (:Data {name: "Execution", contract: "Φ_inference (Inference-Layer Separation)"})
MERGE (:Amount {name: "Shared Weights", contract: "Φ_inference (Inference-Layer Separation)"})
MERGE (:Binary {name: "Graph Filed", contract: "Φ_inference (Inference-Layer Separation)"})
MATCH (a {name: "Generator"}), (b {name: "Generator"}) CREATE (a)-[:APPOINT {clause: "recital", object: "Solver"}]->(b)
MATCH (a {name: "Generator"}), (b {name: "Generator"}) CREATE (a)-[:MAY_FILE {clause: "Reason", object: "Reasoning Graph"}]->(b)
MATCH (a {name: "Generator"}), (b {name: "Generator"}) CREATE (a)-[:MAY_DECLARE {clause: "Reason", object: "Graph Filed"}]->(b)
MATCH (a {name: "Solver"}), (b {name: "Solver"}) CREATE (a)-[:MAY_REGISTER {clause: "Execute", object: "Execution", condition: "Graph Filed is declared"}]->(b)
// claim (re-runnable): NOTHING routes Shared Weights to Solver; any row falsifies the block
MATCH (x)-[e]->(f {name: "Solver"}) WHERE e.object = "Shared Weights" RETURN count(e) AS mustBeZero
