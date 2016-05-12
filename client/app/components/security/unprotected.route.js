angular
  .module('genesis.views')
  .config(configUnprotectedState);

configUnprotectedState.$inject = ['$stateProvider'];

function configUnprotectedState($stateProvider) {

  $stateProvider
    .state('unprotected', {
      abstract: true,
      views: {
        '': {
          template: '<div ui-view></div>'
        },
        'header': {
          templateUrl: '/components/header/unprotected/header.html',
          controller: 'headerCtrl',
          controllerAs: 'vm'
        }
      }
    });
}