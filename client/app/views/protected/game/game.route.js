angular
  .module('genesis.views.game')
  .config(configGameState);

function configGameState($stateProvider) {

  $stateProvider
    .state('game', {
      url: '/game',
      templateUrl: '/views/protected/game/game.html',
      controller: 'gameCtrl',
      controllerAs: 'vm'
    });

  console.log('[Route] game OK');
}