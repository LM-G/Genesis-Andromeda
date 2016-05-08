angular
  .module('genesis.views.partials')
  .controller('headerGameCtrl', headerGameCtrl);

headerGameCtrl.$inject = ['$timeout', '$state', 'genesisModalService'];

function headerGameCtrl($timeout, $state, modalService) {
  console.log('controller header protected');
  var vm = this;

  vm.isActive = function(state) {
    return $state.includes(state);
  };

  vm.logout = function() {
    /* TODO deconnexion de l'utilisateur*/
  }
}