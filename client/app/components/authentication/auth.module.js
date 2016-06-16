console.log('Chargement module authentification OK');

angular
  .module('genesis.services.auth', [
    'angular-storage',
    'angular-jwt'
  ])
  .config(configAuth)
  .run(mainAuth);

configAuth.$inject = ['$httpProvider', 'jwtInterceptorProvider'];
mainAuth.$inject = ['$rootScope', '$state', 'jwtHelper', '_', 'authService', 'User', 'commonStorage', 'genesisModalService', 'moment'];
jwtInterceptor.$inject = ['config', 'commonStorage', 'jwtHelper', 'authService'];

/**
 * Gestion des tokens
 */
function configAuth($httpProvider, jwtInterceptorProvider) {
  jwtInterceptorProvider.authPrefix = 'JWT ';
  jwtInterceptorProvider.tokenGetter = jwtInterceptor;
  $httpProvider.interceptors.push('jwtInterceptor');
}

/**
 * Initialisation du module d'authentification, chargement de l'utilisateur
 */
function mainAuth($rootScope, $state, jwtHelper, _, authService, User, commonStorage, modalService) {

  console.info('Initialisation user');
  /* recuperation des informations de l'utilsiateur stockée dans le local storage */
  var user = commonStorage.get('user') || {};
  User.update(user);

  /* si l'utilisateur possède un token on extrait les informations cryptées qu'il contient */
  if (Object.keys(user).length) {
    User.isLogged = true;
  }

  $rootScope.$on('$stateChangeStart', handleStateChangeStart);

  function handleStateChangeStart(event, toState, toParams) {
    /* vérification que l'utilisateur peut accèder aux routes */
    if (toState.authLevel != null) {
      var accessToken = authService.getAccessToken();
      var isTokenExpired = accessToken ? jwtHelper.isTokenExpired(accessToken) : true;
      var accessLevel = User.getRoleAccess();

      if (isTokenExpired) {
        /* todo : refresh token */
        /* si refresh token fail :*/
        authService.disconnectUser();
        event.preventDefault();
        $state.go('unprotected.home');
        modalService.openLogin(toState.name, toParams);
      } else if (!isTokenExpired && toState.authLevel > accessLevel) {
        event.preventDefault();
        modalService.openError('forbidden');
      }
    }
  }
}

/**
 * Ajout du token sur chaque requete qui ne concerne pas un fichier html
 */
function jwtInterceptor(config, commonStorage, jwtHelper, authService) {
  if (config.url.substr(config.url.length - 5) == '.html') {
    return null;
  }
  return authService.getAccessToken();
}
