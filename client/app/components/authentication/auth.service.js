angular
  .module('genesis.services.auth')
  .service('authService', authService);

authService.$inject = ['commonStorage', 'User'];

function authService(commonStorage, User) {
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
    User.isLogged = true;
    commonStorage.set('user', {
      isLogged: true,
      token: token
    });
  };


  /***********************************************************************************************/
  /* API interne                                                                                 */
  /***********************************************************************************************/
}