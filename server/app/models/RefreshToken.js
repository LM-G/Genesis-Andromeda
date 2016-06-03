var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

/**
 * RefreshToken
 * @type {Schema}
 */
var RefreshToken = new Schema({
  user: {
    type: ObjectId,
    required: true,
    ref : 'User'
  },
  token: {
    type: String,
    required: true
  }
},{
  toObject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true
  }
});

/**
 * Attributs virtuels
 */
RefreshToken
  .virtual('userId')
  .get(function() {
    return this.id;
  });

module.exports = mongoose.model('RefreshToken', RefreshToken);