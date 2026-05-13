const  express = require('express');
const dittoJson = require('./pokemon/ditto.json')

const app = express();
const PORT = process.env.PORT ?? 5000;
app.disable('x-powered-by') // Deshabilita la cabecera 'X-Powered-By' para mejorar la seguridad de la aplicación


app.get('/', (req, res) => {
    res.status(200).send('<h1>Hello world</h1>')
})

app.get('/pokemon/ditto', (req, res) => {
    res.status(200).json(dittoJson)
})

app.post('/pokemon', (req, res) => {
    let body = ''
    req.on('data', chunk => {
        body += chunk.toString()
    })
    req.on('end', () => {
        console.log('Received data:', body)
        const datetime = new Date().toISOString()
        res.status(201).json({ message: 'Pokemon created successfully at: ' + datetime})
    })

})

app.use((req, res) => {
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})