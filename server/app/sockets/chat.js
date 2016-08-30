"use strict";
var users = [];
var messages = [{createdAt : '2004-01-02', user: {id : 'qsdq647qsd674', username: 'yoloman'}, content: 'Hello world'}];

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
  console.log("chat message recu :", message);
}