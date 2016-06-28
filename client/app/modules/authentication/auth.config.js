export default configAuth;

/**
 * Configuration de l'authentification, gestion de l'intercepteur de requêtes.
 * Gère les tokens d'accès et de rafraichissement de la connexion.
 */
function configAuth($httpProvider, jwtInterceptorProvider) {
  jwtInterceptorProvider.authPrefix = 'JWT ';
  jwtInterceptorProvider.tokenGetter = jwtInterceptor;
  $httpProvider.interceptors.push('jwtInterceptor');
  console.log('Configuration de l\'authentification');
}
configAuth.$inject = ['$httpProvider', 'jwtInterceptorProvider'];

/**
 * Intercepteur de requête JWT
 * Ajout du token sur chaque requete qui ne concerne pas un fichier html
 */
function jwtInterceptor(config, authService) {

  if (config.url.substr(config.url.length - 5) == '.html') {
    return null;
  }
  return authService.getAccessToken();
}
jwtInterceptor.$inject = ['config', 'authService'];