'use strict';
var _ = require('lodash');
var path = require('path');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');

var config = require(path.join(__base, 'app/config/config'));
var User = require(path.join(__base, './app/models/User'));
var RefreshToken = require(path.join(__base, './app/models/RefreshToken'));
var validationUtils = require(path.join(__base, './app/utils/validation.utils'));

module.exports = {
  login: login,
  create: create
};

/**
 * Connexion de l'utilisateur : génération des ses tokens d'accès
 * @param  {Text} username  : nom de l'utilisateur
 * @param  {Text} password :  mot de passe non hashé de l'utilisateur
 * @param  {Boolean} rememberme : génération ou non du refresh token
 * @return {Object} promesse de résolution
 */
function login(username, password, rememberme) {
  var deferred = Q.defer();
  // on retrouve l'utilisateur
  User.findOne({
    username: username
  }, handleLogin);

  function handleLogin(err, user) {
    if (err) {
      deferred.reject(err);
    }
    // on verifie que le mot de passe correspond au mot de passe en base
    if (user && bcrypt.compareSync(password, user.password)) {
      var result = {};
      // génération de l'access token
      var access_token = jwt.sign({
        _id: user._id
      }, config.security.secret, {
        expiresIn: config.security.tokenLifeShort
      });
      result.access_token = access_token;

      // gestion du rememberme
      if (rememberme) {
        // génération du refresh token
        var refresh_token = jwt.sign({
          _id: user._id
        }, config.security.secret, {
          expiresIn: config.security.tokenLifeLong
        });

        result.refresh_token = refresh_token;

        // stockage en base du refresh token associé à l'utilisateur
        handleRefreshToken(user, refresh_token);
      }
      // authentication successful
      deferred.resolve(result);
    } else {
      // authentication failed
      deferred.resolve();
    }
  }

  function handleRefreshToken(user, refresh_token) {
    var userRefreshToken = new RefreshToken({
      user: user,
      token: refresh_token
    });

    userRefreshToken.save(function(err) {
      if (err) {
        console.log(err);
      }
    });
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
          message: 'Le nom d\'utilisateur ou l\'adresse email n\'est pas disponible'
        });
      } else {
        deferred.reject({
          code: -1,
          message: 'Echec inscription utilisateur'
        });
      }
    }
    deferred.resolve();
  });

  return deferred.promise;
}
