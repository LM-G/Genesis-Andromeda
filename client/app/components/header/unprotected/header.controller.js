angular
  .module('genesis.views.header')
  .controller('headerCtrl', headerCtrl);

headerCtrl.$inject = ['$timeout', '$state', 'genesisModalService', 'User', 'authService'];

function headerCtrl($timeout, $state, modalService, User, authService) {
  console.log('controller header');
  var vm = this;

  vm.user = User;

  vm.isActive = function(state) {
    return $state.includes(state);
  };

  vm.login = function() {
    var modal = modalService.openLogin();
  };

  vm.logout = function() {
    authService.disconnectUser();
  };

  /**
   * ouvre le formulaire d'inscription
   * @return {undefined}
   */
  vm.signup = function() {
    modalService.openRegistration();
  };
}