angular
  .module('genesis.services.utils')
  .service('genesisModalService', genesisModalService);

genesisModalService.$inject = ['$uibModal', '$log'];

function genesisModalService($uibModal, $log) {
  var service = this;
  /***********************************************************************************************/
  /* Variables                                                                                   */
  /***********************************************************************************************/
  var loginModal = {
    size: 'md',
    openedClass: 'login-modal',
    templateUrl: '/components/login/login.html',
    controller: 'loginCtrl',
    controllerAs: 'vm'
  };

  var registrationModal = {
    size: 'md',
    backdrop: 'static',
    openedClass: 'register-modal',
    templateUrl: '/components/signup/signup.html',
    controller: 'signUpCtrl',
    controllerAs: 'vm'
  };

  /***********************************************************************************************/
  /* API publique                                                                                */
  /***********************************************************************************************/
  service.openRegistration = function() {
    return $uibModal.open(registrationModal);
  };

  service.openLogin = function() {
    return $uibModal.open(loginModal);
  };

  /***********************************************************************************************/
  /* API interne                                                                                 */
  /***********************************************************************************************/
}