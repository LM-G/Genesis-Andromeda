angular
  .module('genesis.views.login')
  .controller('loginCtrl', loginCtrl);

loginCtrl.$inject = ['$scope', '$timeout', '$state', '$uibModalInstance', 'genesisModalService',
  'loginService', 'authService', 'toState', 'toParams'
];

function loginCtrl($scope, $timeout, $state, $uibModalInstance, modalService, loginService, authService,
  toState, toParams) {

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
        .login(credentials)
        .then(function(res) {
          console.log('connexion réussie : ', res);
          authService.setTokens(res.token, null);
          /* Récupération des informations utilisateur */
          return authService.getUser();
        })
        .then(function(user) {
          authService.setUser(user);
          $uibModalInstance.close('login successfull');
          if (toState) {
            $state.go(toState, toParams);
          } else {
            $state.go('protected.dashboard', toParams);
          }
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