const express = require('express')
const app = express()
var port = process.env.PORT || 3000;

app.use(express.static('public'))

app.get('/', function (req, res, next) {
	res.sendFile(__dirname + '/index.html');
});

app.listen(port, function () {
	console.log('Doing the thang on:' + port)
});
