import angular from 'angular';

import DashboardComponent from './dashboard.component';

const home = angular
  .module('genesis.commons.dashboard', [])
  .component('dashboard', DashboardComponent)
  .config(Router)
  .name;

export default home;

Router.$inject = ['$stateProvider'];
function Router($stateProvider) {
  $stateProvider.state({
    name: 'dashboard',
    url: '/dashboard',
    template: `<dashboard></dashboard>`,
    authLevel: 0
  });
}
