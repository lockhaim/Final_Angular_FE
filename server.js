const express = require('express');
const path = require('path');
const app = express();


app.use(express.static('./dist/shop=final'));

app.get('/*', (req,res) =>
    res.sendFile('index.html', {root: 'dist/shop-final/'}),
);

app.listen(process.env.PORT || 8080)
