angular
  .module('genesis.views.game')
  .config(configGameState);

configGameState.$inject = ['$stateProvider'];

function configGameState($stateProvider) {

  $stateProvider
    .state('protected.game', {
      url: '/game?p1&p2',
      templateUrl: '/components/game/game.html',
      controller: 'gameCtrl',
      controllerAs: 'vm',
      authLevel: 0
    });

  console.log('[Route] game OK');
}