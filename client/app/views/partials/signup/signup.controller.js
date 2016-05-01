angular
  .module('genesis.views.partials')
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