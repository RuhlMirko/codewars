const http = require('node:http')
const dittoJson = require('./pokemon/ditto.json')

const processRequest = (request, response) => {
  const { url, method } = request

  switch (method) {
    case 'GET':
        switch (url) {    
            case '/pokemon/ditto':
            response.setHeader('Content-Type', 'application/json; charset=utf-8')
            return response.end(JSON.stringify(dittoJson))      
            case '/about':
            response.setHeader('Content-Type', 'text/plain; charset=utf-8')
            return response.end('Welcome to the about page')
            default:
            response.statusCode = 404
            response.setHeader('Content-Type', 'text/html; charset=utf-8')
            return response.end('<h1>Page not found</h1>')
        }
    case 'POST':
        switch (url) {
            case '/pokemon':
                {
                    let body = ''
                    request.on('data', chunk => {
                        body += chunk.toString()
                    })
                    request.on('end', () => {
                        console.log('Received data:', body)
                        response.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })
                        const datetime = new Date().toISOString()
                        response.end(JSON.stringify({ message: 'Pokemon created successfully at: ' + datetime}))
                    })
                    break
                }
        default:
            response.statusCode = 404
            response.setHeader('Content-Type', 'text/html; charset=utf-8')
            return response.end('<h1>Page not found</h1>')
    }
    }
}

const server = http.createServer(processRequest)

server.listen(3000, () => {
  console.log('Server listening on port http://localhost:3000')
})