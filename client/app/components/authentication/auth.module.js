console.log('Chargement module authentification OK');

angular
  .module('genesis.services.auth', [
    'angular-storage',
    'angular-jwt'
  ])
  .config(configAuth)
  .run(mainAuth);

configAuth.$inject = ['$httpProvider', 'jwtInterceptorProvider'];
mainAuth.$inject = ['$rootScope', '$state', 'jwtHelper', '_', 'User', 'commonStorage', 'genesisModalService', 'moment'];
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
function mainAuth($rootScope, $state, jwtHelper, _, User, commonStorage, modalService, moment) {
  console.info('Initialisation user');

  /* recuperation des informations de l'utilsiateur stockée dans le local storage */
  var user = commonStorage.get('user') || {};
  User.update(user);

  /* si l'utilisateur possède un token on extrait les informations cryptées qu'il contient */
  if (user) {
    User.isLogged = true;
  }

  $rootScope.$on('$stateChangeStart', handleStateChangeStart);

  function handleStateChangeStart(event, toState, toParams, fromState, fromParams) {
    /* vérification que l'utilisateur peut accèder aux routes */
    if (toState.authLevel != null) {
      /* partie de test (useless)*/
      var user = commonStorage.get('user');
      var isTokenValid = false;
      if (user && user.token) {
        isTokenValid = !jwtHelper.isTokenExpired(user.token);
        var test = jwtHelper.decodeToken(user.token);
        var date_expiration = test.iat + test.exp;
        var date = moment.unix(date_expiration).format("YYYY-MM-DD HH:mm:ss");
      }
      if (toState.authLevel > User.role) {
        event.preventDefault();
        $state.go('unprotected.home');
        modalService.openLogin(toState.name, toParams);
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
  var accessToken = localStorage.getItem('access_token');
  return accessToken;
}