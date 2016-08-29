'use strict';
var path = require('path');
var socketio = require('socket.io');
var socketioJwt   = require("socketio-jwt");

var sockets = require(path.join(__base, 'app/sockets'));

module.exports = function(server) {
  // socket.io setup
  var io = socketio.listen(server);

  /* needs a valid jwt token to establish the connexion */
  io.use(socketioJwt.authorize({
    secret: process.env.SESSION_SECRET,
    handshake: true
  }));

  io.on('connection', function(socket){
    var id = socket.decoded_token._id;

    var user = sockets.getUser(id);

    if(user){
      user.disconnected = false;
    } else {
      user = sockets.addUser(id);
      console.log('User ', id, ' connected');
    }

    /* handles disconnection event */
    socket.on('disconnect', function(data){
      if(data == 'client namespace disconnect'){
        sockets.removeUser(id);
      } else {
        user.disconnected = true;
        setTimeout(function () {
          if (user.disconnected) {
            sockets.removeUser(id);
          }
        }, 5000);
      }
    });

    /* handles navigation between rooms */
    sockets.handleRooms(io, socket);

    /* handles navigation between rooms */
    sockets.handleChat(io, socket);
  });
};