"use strict";
module.exports = function handleRooms(io, socket){
  socket.on('join room', function (name) {
    socket.join(name);
    console.log('User ', socket.decoded_token._id,' joins room ', name);
    io.sockets.in(name).emit('a user joined');
  });

  socket.on('leave room', function (name) {
    socket.leave(name);
    console.log('User ', socket.decoded_token._id,' leaves room ', name);
    io.sockets.in(name).emit('a user left');
  });
};