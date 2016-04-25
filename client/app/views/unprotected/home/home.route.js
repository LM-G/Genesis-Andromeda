angular
  .module('genesis.views.home')
  .config(configHomeState);

function configHomeState($stateProvider) {

  var config = {
    url: '/home',
    templateUrl: '/views/unprotected/home/home.html',
    controller: 'homeCtrl',
    controllerAs: 'vm'
  };

  $stateProvider
    .state('unprotected.home', config);

  console.log('[Route] home OK');
}
