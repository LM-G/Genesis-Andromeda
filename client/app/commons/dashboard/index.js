import angular from 'angular';

import DashboardComponent from './dashboard.component';

const dashboard = angular
  .module('genesis.commons.dashboard', [])
  .component('dashboard', DashboardComponent)
  .config(Router)
  .name;

export default dashboard;

Router.$inject = ['$stateProvider'];
function Router($stateProvider) {
  $stateProvider.state({
    name: 'dashboard',
    url: '/dashboard',
    template: `<dashboard layout flex></dashboard>`,
    authLevel: 0
  });
}
