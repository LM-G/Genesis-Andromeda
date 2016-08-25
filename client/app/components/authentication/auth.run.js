import _keys from 'lodash/keys';
/**
 * Handles auth mechanisms
 */
function handleAuth($rootScope, $state, jwtHelper, authService, User, commonStorage, loginModalService, errorService) {
  console.log('Authentification lancée');
  console.info('Initialisation user');

  /* listen the state change beginning */
  $rootScope.$on('$stateChangeStart', handleStateChangeStart);

  /* get the user stored in the local storage */
  var user = commonStorage.get('user') || {};
  /* updates the user local user */
  User.update(user);

  /* if user has some property stored*/
  if (_keys(user).length) {
    User.isLogged = true;
  }

  /* listen the state change beginning, handle all permissions to access certain  secured views */
  function handleStateChangeStart(event, toState, toParams) {
    /* each state possess or not an access level that user must surpass*/
    if (toState.authLevel != null) {
      var accessToken = authService.getAccessToken();
      var isTokenExpired = accessToken ? jwtHelper.isTokenExpired(accessToken) : true;
      var accessLevel = User.getRoleAccess();

      if (isTokenExpired) {
        /* TODO : refresh token */
        authService.disconnect();
        event.preventDefault();
        $state.go('home');
        loginModalService.open(toState.name, toParams);
      } else if (!isTokenExpired && toState.authLevel > accessLevel) {
        event.preventDefault();
        errorService
          .openModal('forbidden')
          .finally(() => {
            /* redirection vers le dashboard si le chemin est forcé depuis l'url */
            if($state.current.name === ''){
              $state.go('dashboard');
            }
          });
      }
    }
  }
}

handleAuth.$inject = [
  '$rootScope',
  '$state',
  'jwtHelper',
  'authService',
  'User',
  'commonStorage',
  'loginModalService',
  'errorService'
];

export default handleAuth;