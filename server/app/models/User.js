var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

/**
 * Utilisateur
 * @type {Schema}
 */
var User = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['client', 'manager', 'admin'],
    default: 'client'
  }
});
/*
User.static('findByName', function(name, callback) {
  return this.findOne({
    username: name
  }, callback);
});
*/
User.pre('save', function(next) {
  var user = this;
  console.log('DEBUG CREATE USER: user', user);
  if (this.isModified('password') || this.isNew) {
    console.log('DEBUG CREATE USER: generation sel ...');
    bcrypt.genSalt(10, function(err, salt) {
      if (err) return next(err);
      console.log('DEBUG CREATE USER: sel genere :', salt);
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);
        console.log('DEBUG CREATE USER: hash', hash);
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});
/*
User.methods.comparePassword = function(pw, cb) {
  bcrypt.compare(pw, this.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};*/

module.exports = mongoose.model('User', User);