"use strict";
var users = [];
var messages = [];

module.exports = {
  name : 'chat',
  users : users,
  onJoin : onJoin,
  init : initChatRoom
};

function onJoin(){
  return {users : users, data: messages};
}

function initChatRoom(socket){
  socket.on('chat message', function(message, cb){
    var saveMessage = function (){
      var newMessage = {
        createdAt : new Date(),
        user: socket.user,
        content: message
      };
      messages.push(newMessage);
      console.log('new message : ', newMessage);
      socket.broadcast.to('chat').emit('chat new message', newMessage);
      if(cb){
        cb(newMessage);
      }
    };
    setTimeout(saveMessage, 100);
  });
}