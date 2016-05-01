var _ = require('lodash');
var path = require('path');
var jwt = require('jsonwebtoken');
var Q = require('q');

var config = require(path.join(__base, 'app/config/config'));
var User = require(path.join(__base, './app/models/User'));

module.exports = {
  authenticate: authenticate,
  getById: getById,
  create: create
}

function authenticate(username, password) {
  var deferred = Q.defer();

  User.findByName(username, userCallBack);

  function userCallBack(err, user) {
    if (err) deferred.reject(err);

    if (user && bcrypt.compareSync(password, user.password)) {
      // authentication successful
      deferred.resolve(jwt.sign({
        sub: user._id
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
    if (err) deferred.reject(err);

    if (user) {
      // return user (without hashed password)
      deferred.resolve(_.omit(user, ['password']));
    } else {
      // user not found
      deferred.resolve();
    }
  };

  return deferred.promise;
}

function create(userParams) {
  var deferred = Q.defer();
  var mssg = 'API CREATE :' + JSON.stringify(userParams)
  console.log('API CREATE :', userParams);
  deferred.resolve(userParams);
  return deferred.promise;
}