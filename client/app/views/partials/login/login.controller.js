loginCtrl.$inject = ['$timeout', '$state', '$uibModalInstance'];

angular
  .module('genesis.views.partials')
  .controller('loginCtrl', [
  	'$timeout',
    loginCtrl
  ]);

function loginCtrl($timeout, $state, $uibModalInstance) {
  console.log('controller login');
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