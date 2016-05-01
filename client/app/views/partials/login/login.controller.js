loginCtrl.$inject = ['$scope', '$timeout', '$state', '$uibModalInstance', 'genesisModalService'];

angular
  .module('genesis.views.partials')
  .controller('loginCtrl', loginCtrl);

function loginCtrl($scope, $timeout, $state, $uibModalInstance, modalService) {
  console.log('controller login', $scope);
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
   * Etablit la connexion de l'utilisateur à l'application
   * @return {undefined}
   */
  vm.connect = function() {

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