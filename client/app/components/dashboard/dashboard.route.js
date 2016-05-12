angular
  .module('genesis.views.dashboard')
  .config(configDashboardState);

configDashboardState.$inject = ['$stateProvider'];

function configDashboardState($stateProvider) {

  $stateProvider
    .state('protected.dashboard', {
      url: '/dashboard',
      templateUrl: '/components/dashboard/dashboard.html',
      controller: 'dashboardCtrl',
      controllerAs: 'vm'
    });

  console.log('[Route] dashboard OK');
}