var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Utilisateur
 * @type {Schema}
 */
var User = new Schema({
  username: String,
  email: String,
  password: String
}, {
  autoIndex: true
});

User.static('findByName', function(name, callback) {
  return this.find({
    name: name
  }, callback);
});

module.exports = mongoose.model('User', User);