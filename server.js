const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/Final_Angular_FE'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/Final_Angular_FE/index.html'));});
app.listen(process.env.PORT || 8080);
