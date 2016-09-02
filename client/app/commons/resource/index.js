import angular from 'angular';
import ResourceComponent from './resource.component';

const resource = angular
  .module('genesis.commons.resource', [])
  .component('resource', ResourceComponent)
  .config(Router)
  .name;

export default resource;

Router.$inject = ['$stateProvider'];
function Router($stateProvider) {
  $stateProvider.state({
    name: 'resource',
    url: '/resources',
    template: `<resource layout flex></resource>`,
    authLevel: 0
  });
}
