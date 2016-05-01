angular
  .module('genesis.views.partials')
  .controller('headerCtrl', headerCtrl);

headerCtrl.$inject = ['$timeout', '$state', 'genesisModalService'];

function headerCtrl($timeout, $state, modalService) {
  console.log('controller header');
  var vm = this;

  vm.isActive = function(state) {
    return $state.includes(state);
  };

  vm.login = function() {
    var modal = modalService.openLogin();
  }

  vm.logout = function() {

  }

  /**
   * ouvre le formulaire d'inscription
   * @return {undefined}
   */
  vm.signup = function() {
    modalService.openRegistration();
  };
}