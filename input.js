const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = setupInput;

// let connection
// const setupInput = (conn) => {
//   connection = conn
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   stdin.on("data", handleUserInput);
//   return stdin;
// };

// const handleUserInput = (key) => {
//   // \u0003 maps to ctrl+c input
//   if (key === '\u0003') {
//     process.exit();
//   }
// };

// module.exports = setupInput; 