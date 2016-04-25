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
          templateUrl: '/views/protected/header/header.html',
          controller: 'headerCtrl',
          controllerAs: 'vm'
        }
      }
    });
}
