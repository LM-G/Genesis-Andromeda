angular
  .module('genesis.views.header')
  .controller('headerGameCtrl', headerGameCtrl);

headerGameCtrl.$inject = ['$timeout', '$state', 'genesisModalService', 'authService', 'User'];

function headerGameCtrl($timeout, $state, modalService, authService, User) {
  console.log('controller header protected');
  var vm = this;
  /***********************************************************************************************/
  /* Variables                                                                                   */
  /***********************************************************************************************/
  /** @type {Boolean} indicateur de chargement du controleur */
  vm.isLoaded = false;

  vm.user = User;
  /***********************************************************************************************/
  /* API publique                                                                                */
  /***********************************************************************************************/

  vm.isActive = function(state) {
    return $state.includes(state);
  };

  vm.logout = function() {
    authService.disconnectUser();
    $state.go('unprotected.home');
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