angular
  .module('genesis.views.partials')
  .controller('loginCtrl', loginCtrl);

loginCtrl.$inject = ['$scope', '$timeout', '$state', '$uibModalInstance', 'genesisModalService',
  'loginService', 'authService'
];

function loginCtrl($scope, $timeout, $state, $uibModalInstance, modalService, loginService, authService) {
  console.log('controller login');
  var vm = this;
  /***********************************************************************************************/
  /* Variables                                                                                   */
  /***********************************************************************************************/
  /** @type {Boolean} indicateur de chargement du controleur */
  vm.isLoaded = false;
  vm.isLoading = false;

  /* Initialisation du controleur */
  $timeout(init);

  /***********************************************************************************************/
  /* API publique                                                                                */
  /***********************************************************************************************/

  /**
   * Etablit la connexion de l'utilisateur à l'application
   * @return {undefined}
   */
  vm.login = function(form) {
    console.log('login', form);
    if (form.$valid) {
      vm.isLoading = true;
      var credentials = {
        username: vm.username,
        password: vm.password
      };
      loginService
        .auth(credentials)
        .then(function(res) {
          console.log('connexion réussie : ', res);
          /* Mise à jour des informations utilsiateur */
          authService.connectUser(res.token);
          $uibModalInstance.close('login successfull');
          $state.go('protected.dashboard');
        })
        .catch(function(res) {
          vm.loginFailed = true;
        })
        .finally(function() {
          vm.isLoading = false;
        });
    }
  };

  /**
   * ouvre le formulaire d'inscription
   * @return {undefined}
   */
  vm.register = function() {
    modalService.openRegistration();
    $uibModalInstance.dismiss();
  };

  /***********************************************************************************************/
  /* API interne                                                                                 */
  /***********************************************************************************************/
  /**
   * Initialisation du controleur, recuperation des données, valorisation des variables
   * @return {undefined}
   */
  function init() {
    vm.isLoaded = true;
  }
}