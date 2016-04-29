homeCtrl.$inject = ['$timeout', '$state', 'genesisModalService'];

angular
  .module('genesis.views.home')
  .controller('homeCtrl', homeCtrl);


function homeCtrl($timeout, $state, modalService) {
  console.log('controller home');
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
  vm.login = function() {
    var modal = modalService.openLogin();

    modal.result.then(function(){});
  };

  vm.goGame = function(){
    $state.go('protected.game');
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
