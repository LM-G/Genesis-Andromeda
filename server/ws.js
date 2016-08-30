'use strict';
var Q = require('q');
var path = require('path');
var socketio = require('socket.io');
var socketioJwt   = require("socketio-jwt");

var sockets = require(path.join(__base, 'app/sockets/sockets'));
var userService = require(path.join(__base, 'app/services/user.service'));

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
      userService
        .getById(id)
        .then(function(data){
          user = {id : data.id, username: data.username};
          sockets.addUser(user);
          console.log('User ', id, ' connected');
          /* handles navigation between rooms */
          sockets.handleRooms(socket, user);
        });
    }

    /* handles disconnection event */
    socket.on('disconnect', function(data){
      var deferred = Q.defer();
      var userRemoved;
      if(data == 'client namespace disconnect'){
        deferred.resolve(sockets.removeUser(id));
      } else {
        if(user){
          user.disconnected = true;
          setTimeout(function () {
            if (user.disconnected) {
              deferred.resolve(sockets.removeUser(id));
            }
          }, 5000);
        }
      }

      /* removes user from all rooms in which he was registered */
      deferred.promise.then(function(userRemoved){
        sockets.removeUserFromAllRooms(userRemoved, function(name){
          io.sockets.in(name).emit('user left', userRemoved);
          console.log('User ', userRemoved.id,' left room ', name);
        });
      });
    });
  });
};
