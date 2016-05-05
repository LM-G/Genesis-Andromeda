var _ = require('lodash');
var path = require('path');
var MissingArgumentError = require(path.join(__base, './app/errors/missing-argument.error'));


module.exports = {
  check: checkProperties
}

/**
 * Vérifie que les properties de l'objet ne sont pas null
 * @param  {Object} obj : object à verifier
 * @param  {Array} properties  : proprietes qui ne doivent pas etre nulles
 * @throws {MissingArgumentError}
 */
function checkProperties(obj, properties) {
  _.forEach(properties, function(property) {
    if (obj[property] == null) {
      throw new MissingArgumentError(property);
    }
  });
}