const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.statusCode = 200
    res.end('<h1>Mi página</h1>')
  } else if (req.url === '/image.jpg') {
    fs.readFile('./image.jpg', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('Error al leer la imagen')
      } else {
        res.statusCode = 200
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/api') {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
    res.end(JSON.stringify({ message: 'Hola desde la API' }))
  } else {
    res.statusCode = 404
    res.end('<h1>404 Not Found</h1>')
  }
})

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`)
})
