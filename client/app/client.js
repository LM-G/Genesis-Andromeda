/**
 * Point d'entrée de l'application cliente
 */
angular
  .module('genesis', [
    'ui.router',
    'ui.bootstrap',
    'ngMessages',
    'genesis.config',
    'genesis.traduction',
    'genesis.services',
    'genesis.views',
    // templates HTML en cache
    'genesis.templates'
  ])
  .config(mainRoutage)
  .constant('_', window._)
  .constant('moment', window.moment)
  .run(main);

mainRoutage.$inject = ['$locationProvider', '$urlRouterProvider'];
main.$inject = ['$rootScope'];

/**
 * Configuration des routes et des états de l'application
 */
function mainRoutage($locationProvider, $urlRouterProvider) {
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