angular
  .module('genesis.services.error', [])
  .run(mainError);

mainError.$inject = ['$rootScope', '$state', '$stateParams', '_', 'NotConnectedError'];
/**
 * Gestionnaire des erreurs de l'application
 */
function mainError($rootScope, $state, $stateParams, _, NotConnectedError) {
  $rootScope.$on('$stateChangeError', handleStateChangeError);

  function handleStateChangeError(event, toState, toParams, fromState, fromParams, error) {
    if (_.isError(error)) {
      if (error instanceof NotConnectedError) {
        console.warn('Access denied, user not connected');
        $state.go('unprotected.home');
      }
    }
  }
}