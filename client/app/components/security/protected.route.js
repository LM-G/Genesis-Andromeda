angular
  .module('genesis.views')
  .config(configProtectedState);

configProtectedState.$inject = ['$stateProvider'];

/* configuration des états dont l'acces est restreint aux joueur connectés */
function configProtectedState($stateProvider) {
  $stateProvider
    .state('protected', {
      abstract: true,
      views: {
        '': {
          template: '<div ui-view></div>'
        },
        'header': {
          templateUrl: '/components/header/protected/header.html',
          controller: 'headerGameCtrl',
          controllerAs: 'vm'
        },
        'sidebar': {
          templateUrl: '/components/sidebar/sidebar.html',
          controller: 'sidebarCtrl',
          controllerAs: 'vm'
        }
      }
    });
}