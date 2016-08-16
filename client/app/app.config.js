/**
 * Configuration de base de l'application , routage par défaut et méthode run principale
 */

/**
 * Configuration des routes et des états de l'application
 */
function appRouter($locationProvider, $urlRouterProvider) {
  // configuration des routes principales
  $urlRouterProvider.otherwise('/home');
  // beautification de l'url
  $locationProvider.html5Mode(true);
}
appRouter.$inject = ['$locationProvider', '$urlRouterProvider'];

/**
 * Fonction racine de l'application
 */
function appRun($rootScope) {
  console.log('Client lancé');

  $rootScope.$on('$stateChangeStart', (event, toState) => {
    console.warn(`stateChangeStart : ${toState.name}`);
  });
}
appRun.$inject = ['$rootScope'];


export {appRouter};
export {appRun};
