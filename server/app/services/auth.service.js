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
  refresh: refresh
};

function refresh() {
  var deferred = Q.defer();
  return {
    token: false
  };
}