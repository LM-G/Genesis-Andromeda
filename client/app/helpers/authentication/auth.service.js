angular
  .module('genesis.services.auth')
  .service('authService', authService);

authService.$inject = ['commonStorage', 'User', 'jwtHelper', '$http'];

function authService(commonStorage, User, jwtHelper, $http) {
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
    /* mise à jour du local storage */
    commonStorage.set('user', {
      isLogged: true,
      token: token,
    });
    /* mise a jour du model user avec les informations décodées du token */
    var infos = jwtHelper.decodeToken(token);
    User.name = infos.username;
    User.role = infos.role;
    User.isLogged = true;
    /* todo acces au /me pour recuperer le reste des informations ? voir tout de suite */

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