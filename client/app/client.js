/**
 * Point d'entrée de l'application cliente
 */
angular
  .module('funApp', [
	'ui.router',
    'ui.bootstrap',
    'funApp.views',
    // templates HTML en cache
    'funApp.templates'
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
function routage($locationProvider, $urlRouterProvider, $stateProvider) {
  // configuration des routes principales
  $urlRouterProvider
    .otherwise("/home");
  // beautification de l'url
  $locationProvider.html5Mode(true);
} /* ! routage */

/**
 * Boucle principale de l'application
 */
function main($rootScope, $state) {
  console.info('Client lancé');

  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    console.warn('stateChangeStart : ' + toState.name);
  });
} /* ! main */