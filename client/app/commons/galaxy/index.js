import angular from 'angular';
import GalaxyComponent from './galaxy.component';
import GalaxyService from './galaxy.service';
import GalaxyContent from './galaxy-content.service';

import list from './galaxy-list';


const galaxy = angular
  .module('genesis.commons.galaxy', [
    list
  ])
  .component('galaxy', GalaxyComponent)
  .service('galaxyService', GalaxyService)
  .service('galaxyContent', GalaxyContent)
  .config(Router)
  .name;

export default galaxy;

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name: 'galaxy',
    url: '/galaxy',
    template: `<galaxy layout flex></galaxy>`,
    authLevel: 0,
    abstract: true
  });

  $urlRouterProvider.when('/galaxy', '/galaxy/list');
  $urlRouterProvider.when('/galaxy/', '/galaxy/list');

  console.log('route galaxy chargée');
}
