'use strict';

//jquery's DOM ready
$(function(){

  var socket = io.connect();
  socket.on('badge', function(badge){
    var $img = $('<img src="'+badge.badge_id+'" alt="Codeschool Badge">');
    $('.badge-wrapper').prepend($img);
  });

});

//minute 1:34:38 ERROR, I started redis, i dont know, not everything is exactly up
//to date and it's not my fault

//1:35:16
