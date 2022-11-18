
// Get the environment variables.
require('dotenv').config()

// Require needed node modules.
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

//Add route for a 404 Page error
app.get('*', (req, res) => {
    res.render('error404')
  })
  



// Listen to a port number defined by a local environment variable.
app.listen(process.env.PORT)