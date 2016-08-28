'use strict';
var socketio = require('socket.io');
var socketioJwt   = require("socketio-jwt");

module.exports = function(server) {
  // socket.io setup
  var io = socketio.listen(server);

  /* needs a valid jwt token to establish the connexion */
  io.use(socketioJwt.authorize({
    secret: process.env.SESSION_SECRET,
    handshake: true
  }));


  io.on('connection', function(socket){
    console.log('hello! ', socket.decoded_token._id);
    socket.on('disconnect', function(){
      console.log('User ', socket.decoded_token._id,  ' disconnected.');
    });
  })
};