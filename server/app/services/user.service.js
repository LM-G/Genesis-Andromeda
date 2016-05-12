'use strict';
var _ = require('lodash');
var path = require('path');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');


var config = require(path.join(__base, 'app/config/config'));
var User = require(path.join(__base, './app/models/User'));
var validationUtils = require(path.join(__base, './app/utils/validation.utils'));

module.exports = {
  authenticate: authenticate,
  getById: getById,
  create: create
};

function authenticate(username, password) {
  var deferred = Q.defer();

  User.findOne({
    username: username
  }, userCallBack);

  function userCallBack(err, user) {
    if (err) {
      deferred.reject(err);
    }

    if (user && bcrypt.compareSync(password, user.password)) {
      // authentication successful
      deferred.resolve(jwt.sign({
        exp: 30000,
        username: user.username,
        role: user.role == 'client' ? 0 : user.role == 'manager' ? 1 : user.role == 'admin' ? 2 : -1
      }, config.secret));
    } else {
      // authentication failed
      deferred.resolve();
    }
  }

  return deferred.promise;
}

function getById(id) {
  var deferred = Q.defer();

  User.findById(id, userCallBack);

  function userCallBack(err, user) {
    if (err) {
      deferred.reject(err);
    }

    if (user) {
      // return user (without hashed password)
      deferred.resolve(_.omit(user, ['password']));
    } else {
      // user not found
      deferred.resolve();
    }
  }

  return deferred.promise;
}

/**
 * Création d'un utilisateur
 * @param  {Object} userParams identifiants
 * @return {Object} promesse de resolution de la creation d'un utilisateur
 */
function create(userParams) {
  var deferred = Q.defer();
  var fields = ['username', 'password', 'email'];
  var user = new User(_.pick(userParams, fields));

  user.save(function(err) {
    if (err) {
      if (err.errors) {
        deferred.reject(err);
      } else if (err.code == 11000) {
        deferred.reject({
          code: -2,
          message: "Le nom d'utilisateur ou l'adresse email n'est pas disponible"
        });
      } else {
        deferred.reject({
          code: -1,
          message: "Echec inscription utilisateur"
        });
      }
    }
    deferred.resolve();
  });

  return deferred.promise;
}