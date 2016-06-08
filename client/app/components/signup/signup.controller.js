angular
  .module('genesis.views.signup')
  .controller('signUpCtrl', signUpCtrl);

signUpCtrl.$inject = ['$scope', '$timeout', '$state', '$uibModalInstance', 'signUpService'];

function signUpCtrl($scope, $timeout, $state, $uibModalInstance, signUpService) {
  console.log('controller inscription', $scope);
  var vm = this;
  /***********************************************************************************************/
  /* Variables                                                                                   */
  /***********************************************************************************************/
  /** @type {Boolean} indicateur de chargement du controleur */
  vm.isLoaded = false;

  /* Initialisation du controleur */
  $timeout(init);

  /***********************************************************************************************/
  /* API publique                                                                                */
  /***********************************************************************************************/

  /**
   * Enregistre l'utilisateur
   * @return {undefined}
   */
  vm.register = function(form) {
    console.log('register', form);
    if (form.$valid) {
      var credentials = {
        username: vm.username,
        email: vm.email,
        password: vm.password
      };
      signUpService
        .register(credentials)
        .then(function() {
          /* TODO : gérer les cas du nom d'utilisateur déjà pris et du mail déjà pris*/
          $uibModalInstance.close();
          /* TODO : affichage succès inscription si pas d'erreur */
        });
    }
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
