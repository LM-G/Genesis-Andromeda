"use strict";
global.__base = __dirname + '/';
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./app/config/config');

var app = express();

// config
mongoose.connect(config.dbUrl, function(err) {
  if (err) {
    console.log('Failed to connect MongoDB');
    throw err;
  }
  console.log('Successfully connected to MongoDB');
});

// view engine setup
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

app.use('/api', require('./app/controllers'));

app.use(express.static(path.join(__dirname, 'public')));
app.get('*', function(req, res) {
  res.sendFile('index.html', {
    root: 'public'
  });
});

module.exports = app;