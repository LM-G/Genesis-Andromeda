angular
  .module('genesis.views.home')
  .controller('homeCtrl', homeCtrl);

homeCtrl.$inject = ['$timeout', '$state', 'genesisModalService', 'User'];

function homeCtrl($timeout, $state, modalService, User) {
  console.log('controller home');
  var vm = this;
  /***********************************************************************************************/
  /* Variables                                                                                   */
  /***********************************************************************************************/
  /** @type {Boolean} indicateur de chargement du controleur */
  vm.isLoaded = false;

  vm.user = User;

  /* Initialisation du controleur */
  $timeout(init);

  /***********************************************************************************************/
  /* API publique                                                                                */
  /***********************************************************************************************/
  vm.login = function() {
    var modal = modalService.openLogin();
  };

  vm.goGame = function() {
    $state.go('protected.dashboard');
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