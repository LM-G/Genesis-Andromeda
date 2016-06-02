"use strict";
var _ = require('lodash');
var path = require('path');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');


var config = require(path.join(__base, 'app/config/config'));
var User = require(path.join(__base, './app/models/User'));
var validationUtils = require(path.join(__base, './app/utils/validation.utils'));

module.exports = {
  login: login,
  create: create
};

function login(username, password, rememberme) {
  var deferred = Q.defer();
  console.info("chercher user :", username, password);
  User.findOne({
    username: username
  }, userCallBack);

  function userCallBack(err, user) {
    var tokenLifeSpan = config.security.tokenLifeShort;
    console.info("user found ? " + (user != null ? "yes" : "no"));
    if (err) {
      deferred.reject(err);
    }
    if (user && bcrypt.compareSync(password, user.password)) {
      console.info("user " + user.username + "logged : ", user._id);
      if(rememberme){
        tokenLifeSpan = config.security.tokenLifeLong;
      }
      // authentication successful
      deferred.resolve(jwt.sign({
        _id: user._id
      }, config.security.secret, {
        expiresIn: tokenLifeSpan
      }));
    } else {
      // authentication failed
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