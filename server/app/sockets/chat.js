"use strict";
module.exports = function handleChat(io, socket){
  socket.on('join room', function (name) {
    // ici socket.broadcast.emit() enverra un socket à tous les clients
    // connectés à la chambre "/chat"
    socket.join(name);
    console.log('USER ', socket.decoded_token._id,' CONNECTE SUR LE CHAT !');
    io.sockets.in(name).emit('message', 'connected');
  });

  socket.on('leave room', function (name) {
    // ici socket.broadcast.emit() enverra un socket à tous les clients
    // connectés à la chambre "/chat"
    socket.leave(name);
    console.log('USER ', socket.decoded_token._id,' DECONNECTE DU CHAT :(');
  });
};