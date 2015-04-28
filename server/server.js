var express = require('express');
var app = express();

app.listen(process.env.PORT || 3000);

app.use(express.static(__dirname + '../../client'));
// app.get('/', function(req, res){
// 	res.redirect('../client/index.html')
// });
console.log("Listening on 3000...")

// server.use('/', express.static(__dirname + '/media'));

