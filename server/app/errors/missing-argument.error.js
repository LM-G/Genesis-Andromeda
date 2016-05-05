var _ = require('lodash');

function MissingArgumentError(argName) {
  this.name = "MissingArgumentError";
  this.message = _.isUndefined(argName) ? "An argument is missing" : "Argument " + argName + " is missing";
  this.code = "412";
  this.status = 412;
}

MissingArgumentError.prototype = _.create(Error.prototype, {
  'constructor': MissingArgumentError
});

module.exports = MissingArgumentError;