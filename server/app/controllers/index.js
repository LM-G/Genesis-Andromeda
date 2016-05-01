var express = require('express');
var apiRouter = express.Router();





exports.user = require("./user.controller");


module.exports = apiRouter;