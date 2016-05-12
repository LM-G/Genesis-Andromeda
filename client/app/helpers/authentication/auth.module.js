console.log('Chargement module authentification OK');

angular
  .module('genesis.services.auth', [
    'angular-storage',
    'angular-jwt'
  ])
  .config(configAuth)
  .run(mainAuth);

configAuth.$inject = ['$httpProvider', 'jwtInterceptorProvider'];
mainAuth.$inject = ['$log', 'jwtHelper', '_', 'User', 'commonStorage'];
jwtInterceptor.$inject = ['config', 'commonStorage'];

/**
 * Gestion des tokens
 */
function configAuth($httpProvider, jwtInterceptorProvider) {
  jwtInterceptorProvider.tokenGetter = jwtInterceptor;
  $httpProvider.interceptors.push('jwtInterceptor');
}

/**
 * Initialisation du module d'authentification, chargement de l'utilisateur
 */
function mainAuth($log, jwtHelper, _, User, commonStorage) {
  $log.info('Initialisation user');

  /* recuperation des informations de l'utilsiateur stockée dans le local storage */
  var user = commonStorage.get('user') || {};
  angular.merge(User, _.omit(user, ['token']));

  /* si l'utilisateur possède un token on extrait les informations cryptées qu'il contient */
  if (_.isObject(user.token)) {
    var infos = jwtHelper.decodeToken(user.token);
    User.name = infos.username;
  }

}

/**
 * Ajout du token sur chaque requete qui ne concerne pas un fichier html
 */
function jwtInterceptor(config, commonStorage) {
  if (config.url.substr(config.url.length - 5) == '.html') {
    return null;
  }
  var user = commonStorage.get('user') || {};
  return user.token;
}