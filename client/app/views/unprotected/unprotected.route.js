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
          templateUrl: '/views/partials/header_unprotected/header.html',
          controller: 'headerCtrl',
          controllerAs: 'vm'
        }
      }
    });
}
