const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: Dom"); 
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("close", () => {
    console.log("left game server, press Ctrl-C to exit")
  });
  
  console.log("Connecting ...");
  return conn;
};

module.exports = connect;
