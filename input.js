let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0077') {
    connection.write('Move: up');
  } else if (key === '\u0061') {
    connection.write('Move: left');
  } else if (key === '\u0073') {
    connection.write('Move: down');
  } else if (key === '\u0064') {
    connection.write('Move: right');
  } else {
    if (key === '\u0003') {
      process.exit(); // ctrl + c to exit
    }
  }
};
module.exports = {setupInput};