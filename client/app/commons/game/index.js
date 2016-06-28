import angular from 'angular';
import GameComponent from './game.component';

const home = angular
  .module('genesis.commons.game', [])
  .component('game', GameComponent)
  .config(Router)
  .name;

export default home;

Router.$inject = ['$stateProvider'];
function Router($stateProvider) {
  $stateProvider.state({
    name: 'game',
    url: '/game',
    template: `<game></game>`,
    authLevel: 1
  });
}
