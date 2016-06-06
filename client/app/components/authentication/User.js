angular
  .module('genesis.services.auth')
  .factory('User', User);

User.$inject = ['accessLevelCst', '_'];

function User(accessLevelCst, _) {
  /***********************************************************************************************/
  /* Variables                                                                                   */
  /***********************************************************************************************/
  var initValues = {
    isLogged: false,
    username: 'Visitor',
    role: 'visitor'
  };

  var user = {};

  /***********************************************************************************************/
  /* API publique                                                                                */
  /***********************************************************************************************/
  user.update = function(values) {
    angular.merge(user, initValues, values);
  };

  /**
   * Récupère le niveau d'accès de l'utilisateur en fonction de son role
   * @return {Number} niveau d'accès
   */
  user.getRoleAccess = function() {
    return accessLevelCst[user.role];
  };

  return user;
  /***********************************************************************************************/
  /* API interne                                                                                 */
  /***********************************************************************************************/
}