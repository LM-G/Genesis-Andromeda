"use strict";

var _ = require('lodash');

var users = [];

module.exports = {
  handleRooms : require('./room'),
  handleChat : require('./chat'),
  users : users,
  getUser: getUser,
  removeUser : removeUser,
  addUser: addUser
};

function addUser(id){
  var user = {id : id};
  users.push(user);
  return user;
}

function getUser(id){
  return _.find(users, function(user){
    return user.id == id;
  });
}

function removeUser(id){
  console.log('User ', id,  ' disconnected.');
  _.remove(users, {'id' : id});
}

