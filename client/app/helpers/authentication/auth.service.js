angular
  .module('genesis.services.auth')
  .service('authService', authService);

authService.$inject = ['commonStorage', 'User', 'jwtHelper'];

function authService(commonStorage, User, jwtHelper) {
  var service = this;
  /***********************************************************************************************/
  /* Variables                                                                                   */
  /***********************************************************************************************/


  /***********************************************************************************************/
  /* API publique                                                                                */
  /***********************************************************************************************/
  /**
   * Connexion de l'utilisateur OK, mise à jour de son statut, mise à jour du token JWT
   */
  service.connectUser = function(token) {

    commonStorage.set('user', {
      isLogged: true,
      token: token,
    });

    var infos = jwtHelper.decodeToken(token);
    User.name = infos.username;
    User.role = infos.role;
    User.isLogged = true;
  };

  /**
   * Connexion de l'utilisateur OK, mise à jour de son statut, mise à jour du token JWT
   */
  service.disconnectUser = function(token) {
    commonStorage.remove('user');
    User.update();
  };


  /***********************************************************************************************/
  /* API interne                                                                                 */
  /***********************************************************************************************/
}