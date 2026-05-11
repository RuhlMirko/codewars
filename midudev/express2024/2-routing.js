const http = require('node:http')
const dittoJson = require('./ditto.json')

const processRequest = (request, response) => {
  const { url, method } = request

  switch (url) {
    case '/pokemon/ditto':
      response.setHeader('Content-Type', 'application/json')
      return response.end(JSON.stringify(dittoJson))      
    case '/about':
      return response.end('Welcome to the about page')
    default:
      response.statusCode = 404
      return response.end('Page not found')
  }
}

const server = http.createServer(processRequest)

server.listen(3000, () => {
  console.log('Server listening on port http://localhost:3000')
})