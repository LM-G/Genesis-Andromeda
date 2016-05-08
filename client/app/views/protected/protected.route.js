angular
  .module('genesis.views')
  .config(configProtectedState);

function configProtectedState($stateProvider) {

  $stateProvider
    .state('protected', {
      abstract: true,
      views: {
        '': {
          template: '<div ui-view></div>'
        },
        'header': {
          templateUrl: '/views/partials/header_protected/header.html',
          controller: 'headerGameCtrl',
          controllerAs: 'vm'
        }
      }
    });
}