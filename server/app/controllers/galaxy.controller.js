var express = require('express');
var router = express.Router();
var path = require('path');

var galaxyService = require(path.join(__base, 'app/services/galaxy.service'));
var authService = require(path.join(__base, 'app/services/auth.service'));

router.post('/generate', authService.checkRoleIsAdmin, generate);

module.exports = router;

/* fonction internes */
/**
 * Starts a galaxy generation, the process
 */
function generate(req, res) {
  galaxyService
    .generate(req.body)
    .then(function() {
      // authentication successful
      res.json({
        message: 'Galaxy generation successful',
      });
    })
    .catch(function(err) {
      res.status(400).send(err);
    });
}
