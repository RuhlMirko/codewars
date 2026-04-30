const http = require('node:http')

const desiredPort = process.env.PORT ?? 1234

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.statusCode = 200
    res.end('<h1>Mi página</h1>')
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
