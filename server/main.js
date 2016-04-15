"use strict";
var http = require('http');
var tutomodule = require('./tuto-module');
var express = require('express');

var app = express();

app
  .get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous êtes à l\'accueil, que puis-je pour vous ?');
  })
  .get('/sous-sol', function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
  })
  .get('/etage/:etagenum/chambre', function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous êtes à la chambre de l\'étage n°' + req.params.etagenum);
  });

app.listen(8088);

/* TODO a separer dans un autre fichier */
var EventEmitter = require('events').EventEmitter;
var jeu = new EventEmitter();

jeu.on('gameover', function (message) {
  console.log(message);
});

jeu.emit('gameover', 'Vous avez perdu !');

/**/
tutomodule.direBonjour();
tutomodule.direByeBye();