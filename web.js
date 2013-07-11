var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
 
var fsOut = fs.readFileSync('index.html');

var printFsOut = fsOut.toString('utf8');

app.get('/', function(request, response) {
  response.send(printFsOut);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
