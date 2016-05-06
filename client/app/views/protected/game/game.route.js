angular
  .module('genesis.views.game')
  .config(configGameState);

configGameState.$inject = ['$stateProvider'];

function configGameState($stateProvider) {

  $stateProvider
    .state('protected.game', {
      url: '/game',
      templateUrl: '/views/protected/game/game.html',
      controller: 'gameCtrl',
      controllerAs: 'vm'
    });

  console.log('[Route] game OK');
}