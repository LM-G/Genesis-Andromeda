angular
  .module('genesis.services.auth')
  .service('authService', authService);

authService.$inject = ['commonStorage', 'User', 'jwtHelper', '$http', 'genesisCfg'];

function authService(commonStorage, User, jwtHelper, $http, genesisCfg) {
  var service = this;
  /***********************************************************************************************/
  /* Variables                                                                                   */
  /***********************************************************************************************/

  /***********************************************************************************************/
  /* API publique                                                                                */
  /***********************************************************************************************/
  /**
   * Mise à jour des tokens d'identification
   * @param {String} accessToken  : token jwt d'acces
   * @param {String} refreshToken : token de prolongement de la session
   */
  service.setTokens = function(accessToken, refreshToken) {
    if (accessToken) {
      localStorage.setItem('access_token', accessToken);
    }
    if (refreshToken) {
      localStorage.setItem('refresh_token', refreshToken);
    }
  };

  /**
   * Récupération des tokens d'identification
   * @return {Object} les access et refresh tokens
   */
  service.getTokens = function() {
    return {
      accessToken: localStorage.getItem('access_token'),
      refreshToken: localStorage.getItem('refresh_token')
    };
  };


  /**
   * Récupération des informations de l'utilisateur en fonction du token
   */
  service.getUser = function() {
    var url = genesisCfg.apiUrl + '/user';
    return $http.get(url).then(function(res) {
      return res.data;
    });
  };

  /**
   * Mise à jour du statut de l'utilisateur
   */
  service.setUser = function(user) {
    /* mise à jour du local storage */
    commonStorage.set('user', user);
    angular.extend(User, user);
  };

  /**
   * Connexion de l'utilisateur OK, mise à jour de son statut, mise à jour du token JWT
   */
  service.disconnectUser = function() {
    commonStorage.remove('user');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    User.update();
  };


  /***********************************************************************************************/
  /* API interne                                                                                 */
  /***********************************************************************************************/
}