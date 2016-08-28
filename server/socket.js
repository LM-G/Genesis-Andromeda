'use strict';
var socketio = require('socket.io');
var sockets = require('./sockets');

module.exports = function(server) {
  // socket.io setup
  var io = socketio.listen(server);
  io.sockets.on('connection', function (socket) {
    console.log('socket connected');
    // other logic
  });
};