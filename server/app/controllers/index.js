/**
 * root de l'API
 */

var express = require('express');
var api = express.Router();

var userAPI = require("./user.controller");

api.use('/', userAPI);

/*
api.use('/', controllerA);
api.use('/', controllerB);
api.use('/', controllerC);
*/


module.exports = api;