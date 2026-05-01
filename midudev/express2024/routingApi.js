const http = require('node:http')

const desiredPort = process.env.PORT ?? 1234

const server = http.createServer((req, res) => {
    if (req.url === '/api') {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 200
        res.end(JSON.stringify({ statusCode:200, message: 'Hola desde la API' }))    
    } else {
        res.statusCode = 404
        res.end(JSON.stringify({ statusCode: 404, message: 'Ruta no encontrada' }))
    }})

server.listen(desiredPort, () => {
    console.log(`server listening on port http://localhost:${desiredPort}`)
})