"use strict";
global.__base = __dirname + '/';
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var jwt = require('jsonwebtoken');

var config = require('./app/config/config');
var api = require('./app/controllers');

var app = express();

// view engine setup
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cookieParser());

app.use(passport.initialize());

// config
mongoose.connect(config.dbUrl, function(err) {
  if (err) {
    console.log('Connection failed to the database');
    throw err;
  }
  console.log('Successfully connected to the database');
});

// Bring in defined Passport Strategy
require('./app/config/passport')(passport);

app.use('/api', api);

app.use(express.static(path.join(__dirname, 'public')));
app.get('*', function(req, res) {
  res.sendFile('index.html', {
    root: 'public'
  });
});

module.exports = app;