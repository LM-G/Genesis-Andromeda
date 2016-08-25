var Q = require('q');

module.exports = {
  generate : generate
};

function generate(options){
  var deferred = Q.defer();
  deferred.resolve();
  return deferred.promise;
}