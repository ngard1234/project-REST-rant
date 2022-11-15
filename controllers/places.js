const router = require('express').Router()

app.get('/', (req, res) => {
    res.send('Get /places')
})

module.exports = router
