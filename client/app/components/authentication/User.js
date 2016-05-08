angular
  .module('genesis.services.auth')
  .factory('User', User);

User.$inject = [];

function User() {
  /***********************************************************************************************/
  /* Variables                                                                                   */
  /***********************************************************************************************/
  var initValues = {
    isLogged: false,
    username: 'Anonymous'
  };

  var user = {};

  /***********************************************************************************************/
  /* API publique                                                                                */
  /***********************************************************************************************/
  user.update = function(values) {
    angular.merge(user, values);
  };

  return user;
  /***********************************************************************************************/
  /* API interne                                                                                 */
  /***********************************************************************************************/
}