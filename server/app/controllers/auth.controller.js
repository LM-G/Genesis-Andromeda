var express = require('express');
var router = express.Router();
var path = require('path');

var config = require(path.join(__base, 'app/config/config'));
var userService = require(path.join(__base, 'app/services/user.service'));
var authService = require(path.join(__base, 'app/services/auth.service'));


router.post('/login', login);
router.post('/register', register);
router.post('/refresh', refresh);

module.exports = router;

/* fonction internes */
/**
 * Identification d'un utilisateur grace a son nom et son mot de passe
 */
function login(req, res) {
  userService
    .login(req.body.username, req.body.password, req.body.rememberme)
    .then(function(token) {
      if (token) {
        // authentication successful
        res.json({
          message: 'Login successful',
          token: token
        });
      } else {
        // authentication failed
        res.status(400).json({
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

function refresh(req, res) {
  authService
    .refresh(req.body)
    .then(function(result) {
      res.json({
        message: 'Successfully renewed access token',
        token: result.token
      });
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
}