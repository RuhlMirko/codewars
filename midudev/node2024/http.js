const http = require('node:http')

const server = http.createServer((req, res) => {
  console.log('Request')
  res.end('Hola mundo')
})

server.listen(0, () => { console.log(`Server listening on http://localhost:${server.address().port}`) })
