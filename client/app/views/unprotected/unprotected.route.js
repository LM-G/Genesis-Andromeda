angular
  .module('genesis.views')
  .config(configUnprotectedState);

function configUnprotectedState($stateProvider) {

  $stateProvider
    .state('unprotected', {
      abstract: true,
      views: {
        '': {
          template: '<div ui-view></div>'
        },
        'header': {
          templateUrl: '/views/unprotected/header/header.html',
          controller: 'headerCtrl',
          controllerAs: 'vm'
        }
      }
    });
}
