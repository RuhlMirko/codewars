const http = require('node:http')
const { findAvailablePort } = require('./freeport.js')

const deiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('Request')
  res.end('Hola mundo')
})

findAvailablePort(deiredPort).then(port => {
  server.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
  })
})

// server.listen(0, () => { console.log(`Server listening on http://localhost:${server.address().port}`) })
