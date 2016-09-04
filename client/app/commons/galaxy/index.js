import angular from 'angular';
import GalaxyComponent from './galaxy.component';
import GalaxyService from './galaxy.service';

const galaxy = angular
  .module('genesis.commons.galaxy', [])
  .component('galaxy', GalaxyComponent)
  .service('galaxyService', GalaxyService)
  .config(Router)
  .name;

export default galaxy;

Router.$inject = ['$stateProvider'];
function Router($stateProvider) {
  $stateProvider.state({
    name: 'galaxy',
    url: '/galaxy',
    template: `<galaxy layout flex></galaxy>`,
    authLevel: 1
  });
}
