/**
 * Configuration de base de l'application , routage par défaut et méthode run principale
 */
/**
 * @ngdoc overview
 *
 * @description
 * Configurates and calibrates the base app, manage default routing system and other things like theming,
 */

/**
 * @ngdoc overview
 *
 * @description
 * Main app config
 *
 * @requires $locationProvider
 * @requires $urlRouterProvider
 * @requires $mdThemingProvider
 */
function appConfig($locationProvider, $urlRouterProvider, $mdThemingProvider) {
  // material design color theming
  $mdThemingProvider.theme('default')
    .primaryPalette('grey', {
      'default': '500',
      'hue-1': '200',
      'hue-2': '700',
      'hue-3': '800',
    })
    .accentPalette('green')
    .warnPalette('red');

  // default route
  $urlRouterProvider.otherwise('/home');
  // url beautify
  $locationProvider.html5Mode(true);
}
appConfig.$inject = [
  '$locationProvider',
  '$urlRouterProvider',
  '$mdThemingProvider'
];

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


export {appConfig};
export {appRun};
