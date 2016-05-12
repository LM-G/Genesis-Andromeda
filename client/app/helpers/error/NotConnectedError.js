angular
  .module('genesis.services.error')
  .factory('NotConnectedError', NotConnectedError);


NotConnectedError.$inject = [];

function NotConnectedError() {
  var error = function() {
    this.name = "NotConnectedError";
    this.message = "User not connected";
  };

  error.prototype = Object.create(Error.prototype);
  error.prototype.constructor = error;

  return error;
}