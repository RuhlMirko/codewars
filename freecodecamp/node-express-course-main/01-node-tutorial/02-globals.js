// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(
  `${__dirname}\n ${__filename} \n ${process}\n${require}\n${module}`,
);
setTimeout(() => {
  console.log("hello world");
}, 1000);
