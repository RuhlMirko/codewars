import fs from 'node:fs/promises'

console.log('Leyendo el primer archivo ... ')
fs.readFile('./archivo.txt', 'utf-8').then((text) =>
  console.log('Primer texto:', text)
)

console.log('Using function')

console.log('Leyendo el segundo archivo ...')
fs.readFile('./archivo2.txt', 'utf-8').then((text) =>
  console.log('Segundo texto:', text)
)
