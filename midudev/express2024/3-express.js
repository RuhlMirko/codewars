const  express = require('express');
const app = express();

const PORT = process.env.PORT ?? 5000;

app.get('/', (req, res) => {
    res.status(200).send('<h1>Hello world</h1>')
})

app.get('/api', (req, res) => {
    res.status(200).json({ message: 'Hello world' })
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

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})