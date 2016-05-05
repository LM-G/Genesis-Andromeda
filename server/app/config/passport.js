var path = require('path');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

var User = require(path.join(__base, 'app/models/User'));
var config = require(path.join(__base, 'app/config/config'));

// Setup work and export for the JWT passport strategy
module.exports = function(passport) {
  var options = {};
  options.jwtFromRequest = ExtractJwt.fromAuthHeader();
  options.secretOrKey = config.secret;
  passport.use(new JwtStrategy(options, verify));
};

function verify(payload, done) {
  User.findOne({
    id: payload.id
  }, function(err, user) {
    if (err) {
      return done(err, false);
    }
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
}