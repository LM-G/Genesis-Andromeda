/**
 * Point d'entrée de l'application cliente
 */
angular
  .module('genesis', [
  'ui.router',
    'ui.bootstrap',
    'genesis.views',
    // templates HTML en cache
    'genesis.templates'
  ])
  /* routes et états */
  .config([
    '$locationProvider',
    '$urlRouterProvider',
    '$stateProvider',
    routage
  ])
  .run([
    '$rootScope',
    '$state',
    main
  ]);

/**
 * Configuration des routes et des états de l'application
 */
function routage($locationProvider, $urlRouterProvider) {
    // configuration des routes principales
    $urlRouterProvider
      .otherwise('/home');
    // beautification de l'url
    $locationProvider.html5Mode(true);
} /* ! routage */

/**
 * Boucle principale de l'application
 */
function main($rootScope) {
    console.info('Client lancé');

    $rootScope.$on('$stateChangeStart', function(event, toState) {
        console.warn('stateChangeStart : ' + toState.name);
    });
}
 /* ! main */