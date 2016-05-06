var express = require('express');
var router = express.Router();
var path = require('path');

var config = require(path.join(__base, 'app/config/config'));
var userService = require(path.join(__base, 'app/services/user.service'));


router.post('/auth', authenticate);
router.post('/register', register);
router.get('/me', getCurrent);

module.exports = router;

/* fonction internes */
/**
 * Identification d'un utilisateur grace a son nom et son mot de passe
 */
function authenticate(req, res) {
  userService
    .authenticate(req.body.username, req.body.password)
    .then(function(token) {
      if (token) {
        // authentication successful
        res.json({
          autreData: 'test autre data :)',
          token: token
        });
      } else {
        // authentication failed
        res.status(401).json({
          message: "Echec identification utilisateur"
        });
      }
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
}

function register(req, res) {
  userService
    .create(req.body)
    .then(function() {
      res.json({
        message: 'Successfully created new user.'
      });
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
}

function getCurrent(req, res) {
  userService
    .getById(req.user.sub)
    .then(function(user) {
      if (user) {
        res.send(user);
      } else {
        res.sendStatus(404);
      }
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
}