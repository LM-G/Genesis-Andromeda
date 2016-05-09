console.log('Chargement module authentification OK');

angular
  .module('genesis.services.auth', [
    'angular-storage',
    'angular-jwt'
  ])
  .config(configAuth)
  .run(mainAuth);

configAuth.$inject = ['$httpProvider', 'jwtInterceptorProvider'];
mainAuth.$inject = ['$log', 'User', 'commonStorage'];
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
function mainAuth($log, User, commonStorage) {
  $log.info('Initialisation user');
  debugger;
  var user = commonStorage.get('user');
  angular.merge(User, user);
}

/**
 * Ajout du token sur chaque requete qui ne concerne pas un fichier html
 */
function jwtInterceptor(config, commonStorage) {
  if (config.url.substr(config.url.length - 5) == '.html') {
    return null;
  }
  return commonStorage.get('user').token;
}