angular
  .module('genesis.views.dashboard')
  .controller('dashboardCtrl', dashboardCtrl);

dashboardCtrl.$inject = ['$scope', '$timeout', '$state', 'User'];

function dashboardCtrl($scope, $timeout, $state, User) {
  console.log('controller dashboard');
  var vm = this;
  /***********************************************************************************************/
  /* Variables                                                                                   */
  /***********************************************************************************************/
  /** @type {Boolean} indicateur de chargement du controleur */
  vm.isLoaded = false;
  /** @type {Object} modle de donnée de l'utilisateur */
  vm.user = User;

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