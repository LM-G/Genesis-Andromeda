"use strict";
global.__base = __dirname + '/';
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');


var config = require('./app/config/config');
var configurerStrategyJWT = require('./app/config/passport');

var app = express();

// config
mongoose.connect(config.dbUrl, function(err) {
  if (err) {
    console.log('Connection failed to the database');
    throw err;
  }
  console.log('Successfully connected to the database');
});

// view engine setup
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Configuration de la strategie d'authentification passport
app.use(passport.initialize());
configurerStrategyJWT(passport);

var controllers = require('./app/controllers')(passport);
app.use('/auth', controllers.auth);
app.use('/api', controllers.api);

// configuration de l'acces aux fichiers du client
app.use(express.static(path.join(__dirname, 'public')));

// pour toutes les requetes qui arrivent jusqu'ici, envoie de l'index de l'application cliente
// pour qu'angular puisse la bootstrap
app.get('*', function(req, res) {
  res.sendFile('index.html', {
    root: 'public'
  });
});

module.exports = app;