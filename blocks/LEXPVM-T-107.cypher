MERGE (c:LexContract {census: "LEXPVM-T-107", name: "Compression-as-Defence (V5)", cites: "glossary-master-v4 § ### Compression-as-Defence (V5)"})
MERGE (:Person {name: "Sender", contract: "Compression-as-Defence (V5)"})
MERGE (:Person {name: "Receiver", contract: "Compression-as-Defence (V5)"})
MERGE (:Person {name: "Interceptor", contract: "Compression-as-Defence (V5)"})
MERGE (:Amount {name: "Sent Tokens", contract: "Compression-as-Defence (V5)"})
MERGE (:Amount {name: "Withheld Tokens", contract: "Compression-as-Defence (V5)"})
MERGE (:Binary {name: "Compressed", contract: "Compression-as-Defence (V5)"})
MATCH (a {name: "Sender"}), (b {name: "Sender"}) CREATE (a)-[:APPOINT {clause: "recital", object: "Receiver"}]->(b)
MATCH (a {name: "Sender"}), (b {name: "Sender"}) CREATE (a)-[:MAY_DECLARE {clause: "Compress", object: "Compressed"}]->(b)
MATCH (a {name: "Sender"}), (b {name: "Receiver"}) CREATE (a)-[:MAY_PAY {clause: "Transmit", object: "Sent Tokens", condition: "Compressed is declared"}]->(b)
MATCH (a {name: "Sender"}), (b {name: "Sender"}) CREATE (a)-[:MAY_PAY {clause: "Withhold", object: "Withheld Tokens"}]->(b)
// claim (re-runnable): NOTHING routes anything to Interceptor; any row falsifies the block
MATCH (x)-[e]->(f {name: "Interceptor"}) WHERE e.object IS NOT NULL RETURN count(e) AS mustBeZero
