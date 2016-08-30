"use strict";

var _ = require('lodash');


var users = [];
var rooms = [require('./chat')];

module.exports = {
  handleRooms : handleRooms,
  users : users,
  getUser: getUser,
  removeUser : removeUser,
  addUser: addUser,
  addUserToRoom : addUserToRoom,
  removeUserFromRoom : removeUserFromRoom,
  getRoom : getRoom,
  removeUserFromAllRooms : removeUserFromAllRooms
};

function addUser(user){
  users.push(user);
}

function getUser(id){
  return _.find(users, function(user){
    return user.id == id;
  });
}

function removeUser(id){
  console.log('User ', id,  ' disconnected.');
  return _.remove(users, {'id' : id});
}

function addUserToRoom(user, name){
  var room = getRoom(name);
  room.users.push(user);
}

function removeUserFromRoom(user, name){
  var room = getRoom(name);
  return _.remove(room.users, {'id' : user.id});
}

function removeUserFromAllRooms(user, cb){
  _.forEach(rooms, function(room){
    var userRemoved = _.remove(room.users, {'id' : user.id});
    if(userRemoved){
      cb(room.name);
    }
  });
}

function getRoom(name){
  return _.find(rooms, function(room){
    return room.name == name;
  });
}

function isRoomValid(name){
  return rooms.some(function(room){
    return name == room.name;
  });
}

function isUserInRoom(userToTest, name) {
  var room = getRoom(name);
  return room.users.some(function(user){
    return user.id = userToTest.id;
  });
}

function handleRooms(socket, user){
  socket.on('join room', function (name, cb) {
    if(isRoomValid(name)){
      var room = getRoom(name);
      if(!isUserInRoom(user, name)){
        socket.join(name);
        addUserToRoom(user, name);
        socket.broadcast.to(name).emit('new user', user);
        console.log('User ', user.id,' joins room ', name);
      }
      /* ajout de listener sur des events customs */
      _.forEach(room.events, function(event){
        socket.on(event.name, event.handler);
      });
      if(cb){
        var response;
        if(_.isFunction(room.onJoin)){
          response = room.onJoin();
        }
        cb(response);
      }
    } else {
      console.log('User ', user.id,' cannot join room ', name, ' : not existing');
      socket.emit('room not existing', name);
    }
  });

  socket.on('leave room', function (name, cb) {
    if(isRoomValid(name)){
      socket.leave(name);
      removeUserFromRoom(user, name);
      socket.broadcast.to(name).emit('user left', user);
      console.log('User ', user.id,' left room ', name);
    } else {
      console.log('User ', user.id,' cannot leave room ', name, ' : not existing');
      socket.emit('room not existing', name);
    }
    if(cb){
      cb();
    }
  });
}

