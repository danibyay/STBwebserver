'use strict';

var axon = require('axon');
var socket = axon.socket('sub');

//this will change, it will be a codeschool URL
socket.connect(8001);

socket.on('error', function(err){
  throw err;
});

module.exports = socket;
