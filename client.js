const net = require("net");
const {IP, PORT} = require("./constants");

const name = 'Di';
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  conn.on("connect", () => {
    console.log("Server says: Successfully connected to game server");
    conn.write(`Name: ${name}`);
    // setTimeout(() => {
    //   conn.write('Move: up');
    // }, 50)
    // conn.write('Move: down');
    // conn.write('Move: left');
    // conn.write('Move: right');
  });

  conn.on("data", (data) => {
    console.log(`Server says: ${data}`); // to handle incoming data from server
  });

  conn.setEncoding("utf8");
  return conn;
};

module.exports = {connect};