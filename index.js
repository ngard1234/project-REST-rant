
// Get the environment variables.
require('dotenv').config()

// Require needed node modules.
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Hello world!')
})

//Add route for a 404 Page error
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})


// Listen to a port number defined by a local environment variable.
app.listen(process.env.PORT)