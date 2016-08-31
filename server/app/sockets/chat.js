"use strict";
var users = [];
var messages = [];

module.exports = {
  name : 'chat',
  users : users,
  onJoin : onJoin,
  events : [
    {name : "chat message", handler : handleMessage}
  ]
};

function onJoin(){
  return {users : users, data: messages};
}

function handleMessage(message, cb){
  var socket = this;

  var saveMessage = function (){
    var newMessage = {
      createdAt : new Date(),
      user: socket.user,
      content: message
    };
    console.log("chat message recu :", newMessage);
    messages.push(newMessage);
    socket.broadcast.to('chat').emit('chat new message', newMessage);
    if(cb){
      cb(newMessage);
    }
  };
  setTimeout(saveMessage, 100);


}