angular
  .module('genesis.services.utils')
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

  /***********************************************************************************************/
  /* API publique                                                                                */
  /***********************************************************************************************/
  service.openRegistration = function() {
    return $uibModal.open(registrationModal);
  };

  service.openLogin = function(state, params) {
    var options = _.merge({}, loginModal);
    options.resolve = {};

    angular.extend(options.resolve, {
      toState: function() {
        return state || 'protected.dashboard';
      },
      toParams: function() {
        return params || {};
      }
    });

    return $uibModal.open(options);
  };

  /***********************************************************************************************/
  /* API interne                                                                                 */
  /***********************************************************************************************/
}