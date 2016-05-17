angular
  .module('genesis.services.utils.modal')
  .service('genesisModalService', genesisModalService);

genesisModalService.$inject = ['$uibModal', '$log', '_'];

function genesisModalService($uibModal, $log, _) {
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

  var errorModal = {
    size: 'sm',
    openedClass: 'error-modal',
    templateUrl: '/components/utils/modal/modal-error.html',
    controller: 'genesisModalController',
    controllerAs: 'vm'
  };

  /***********************************************************************************************/
  /* API publique                                                                                */
  /***********************************************************************************************/
  service.openRegistration = function() {
    return $uibModal.open(registrationModal);
  };

  service.openLogin = function(state, params) {
    var optRegisterModal = _.merge({}, loginModal);
    optRegisterModal.resolve = {};

    angular.extend(optRegisterModal.resolve, {
      toState: function() {
        return state || 'protected.dashboard';
      },
      toParams: function() {
        return params || {};
      }
    });

    return $uibModal.open(optRegisterModal);
  };

  service.openError = function(err) {
    var optErrorModal = _.merge({}, errorModal);
    optErrorModal.resolve = {};
    angular.extend(optErrorModal.resolve, {
      errorType: function() {
        return err || null;
      }
    });
    return $uibModal.open(optErrorModal);
  };

  /***********************************************************************************************/
  /* API interne                                                                                 */
  /***********************************************************************************************/
}