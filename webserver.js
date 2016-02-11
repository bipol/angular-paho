//set-up
var express = require('express');

var app = express();

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/src/'));
app.use(express.static(__dirname + '/node_modules/'));
app.use(express.static(__dirname + '/bower_components/'));

app.get('/', function(req, res) {
	res.sendFile('./index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen('8080');
console.log("App listening on port 8080");
