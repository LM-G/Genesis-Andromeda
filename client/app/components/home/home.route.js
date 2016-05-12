angular
  .module('genesis.views.home')
  .config(configHomeState);

configHomeState.$inject = ['$stateProvider'];

function configHomeState($stateProvider) {

  var config = {
    url: '/home',
    templateUrl: '/components/home/home.html',
    controller: 'homeCtrl',
    controllerAs: 'vm'
  };

  $stateProvider
    .state('unprotected.home', config);

  console.log('[Route] home OK');
}