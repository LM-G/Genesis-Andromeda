angular
  .module('genesis.views.home')
  .controller('homeCtrl', [
  	'$timeout',
    homeCtrl
  ]);

function homeCtrl($timeout) {
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
