import angular from 'angular';
import MapComponent from './map.component';

const map = angular
  .module('genesis.commons.map', [])
  .component('map', MapComponent)
  .config(Router)
  .name;

export default map;

Router.$inject = ['$stateProvider'];
function Router($stateProvider) {
  $stateProvider.state({
    name: 'map',
    url: '/map',
    template: `<map></map>`,
    authLevel: 1
  });
}
