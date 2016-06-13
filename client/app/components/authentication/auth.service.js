angular
  .module('genesis.services.auth')
  .service('authService', authService);

authService.$inject = ['commonStorage', 'tokenStorage', 'User', 'jwtHelper', '$http', 'genesisCfg'];

function authService(commonStorage, tokenStorage, User, jwtHelper, $http, genesisCfg) {
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
      tokenStorage.set('access_token', accessToken);
    }
    if (refreshToken) {
      tokenStorage.set('refresh_token', refreshToken);
    }
  };

  /**
   * Récupération des tokens d'identification
   * @return {Object} les token d'identification
   */
  service.getTokens = function() {
    return {
      accessToken: tokenStorage.get('access_token'),
      refreshToken: tokenStorage.get('refresh_token')
    };
  };

  /**
   * Récupération du token d'accès
   * @return {Object} token d'accès
   */
  service.getAccessToken = function() {
    return tokenStorage.get('access_token');
  };

  /**
   * Récupération du token de prolongement de connexion
   * @return {Object} refrtesh token
   */
  service.getRefreshToken = function() {
    return tokenStorage.get('refresh_token');
  };


  /**
   * Récupération des informations de l'utilisateur stockées sur le serveur en fonction
   * du token.
   * @return {Object} promesse de récupération des données
   */
  service.getUser = function() {
    var url = genesisCfg.apiUrl + '/user';
    return $http.get(url).then(function(res) {
      return res.data;
    });
  };

  /**
   * Mise à jour du statut de l'utilisateur en fonction des informations récupérées depuis le
   * serveur.
   * @param  {Object} user : informations de l'utilisateur
   * @return {Undefined}
   */
  service.setUser = function(user) {
    /* mise à jour du local storage */
    commonStorage.set('user', user);
    user.isLogged = true; // variable utilitaire necessaire au client
    User.update(user);
  };

  /**
   * Deconnexion de l'utilisateur
   * @return {Undefined}
   */
  service.disconnectUser = function() {
    commonStorage.remove('user');
    tokenStorage.remove('access_token');
    tokenStorage.remove('refresh_token');
    User.update();
  };


  /***********************************************************************************************/
  /* API interne                                                                                 */
  /***********************************************************************************************/
}