const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('./dist/Final_Angular_FE'))

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/Final_Angular_FE/src'}))

app.listen(process.env.PORT || 8080)
