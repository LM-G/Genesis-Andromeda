angular
  .module('genesis.views.partials')
  .controller('sidebarCtrl', sidebarCtrl);

sidebarCtrl.$inject = ['$scope', '$timeout', '$state', 'genesisModalService', 'User'];

function sidebarCtrl($scope, $timeout, $state, modalService, User) {
  console.log('controller sidebar');
  var vm = this;

  vm.user = User;
}