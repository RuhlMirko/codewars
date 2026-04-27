import fs from 'node:fs'

// const { promisify } = require("node:util");  <- Convierte cualquier metodo en promesa si solo se importo la version sincronica
// const readFilePromise = promisify(fs.readFile);

// console.log("Leyendo el primer archivo... ");
// fs.readFilePromise("./archivo.txt", "utf-8").then((text) => {
//   console.log("primer texto:", text);
// });

console.log('Leyendo el primer archivo ... ')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
  if (err) {
    console.error('Error reading file:', err)
    return
  }
  console.log(text)
})

console.log('Using function')

console.log('Leyendo el segundo archivo ...')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  if (err) {
    console.error('Error reading file:', err)
    return
  }
  console.log(text)
})
