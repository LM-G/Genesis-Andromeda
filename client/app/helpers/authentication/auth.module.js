console.log('Chargement module authentification OK');

angular
  .module('genesis.services.auth', [
    'angular-storage',
    'angular-jwt'
  ])
  .config(configAuth)
  .run(mainAuth);

configAuth.$inject = ['$httpProvider', 'jwtInterceptorProvider'];
mainAuth.$inject = ['$rootScope', '$state', 'jwtHelper', '_', 'User', 'commonStorage', 'genesisModalService'];
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
function mainAuth($rootScope, $state, jwtHelper, _, User, commonStorage, modalService) {
  console.info('Initialisation user');

  /* recuperation des informations de l'utilsiateur stockée dans le local storage */
  var user = commonStorage.get('user') || {};
  User.update(_.omit(user, ['token']));

  /* si l'utilisateur possède un token on extrait les informations cryptées qu'il contient */
  if (user.token) {
    var infos = jwtHelper.decodeToken(user.token);
    User.name = infos.username;
    User.role = infos.role;
  }

  $rootScope.$on('$stateChangeStart', handleStateChangeStart);

  function handleStateChangeStart(event, toState, toParams, fromState, fromParams) {
    /* vérification que l'utilisateur peut accèder aux routes */
    if (toState.authLevel != null) {
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
function jwtInterceptor(config, commonStorage) {
  if (config.url.substr(config.url.length - 5) == '.html') {
    return null;
  }
  var user = commonStorage.get('user') || {};
  return user.token;
}