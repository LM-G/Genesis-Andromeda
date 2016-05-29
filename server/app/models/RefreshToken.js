var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Refresh token
 * @type {Schema}
 */
var RefreshToken = new Schema({
  userId: {
    type: String,
    required: true
  },
  token: {
    type: String,
    unique: true,
    required: true
  },
  dateCreation: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('RefreshToken', RefreshToken);