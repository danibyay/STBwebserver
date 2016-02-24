'use strict';

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

//servers that don't render views, start on 8000
//servers that do render views, start on 3000
//that's how the teacher likes it
server.listen(3000, function(){
  console.log("serer is running on port %d", 3000);
});

/****** Express configuration starts here  *******/


//server static assets out of public
app.use(express.static('public'));
//lock access only to public to anyone

//serving the index.html file in the index route
//redundancy
app.get('/', function(req, res){
  res.sendfile('./public/index.html');
});
