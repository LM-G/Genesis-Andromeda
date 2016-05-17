angular
  .module('genesis.services.utils.modal')
  .controller('genesisModalController', genesisModalController);

genesisModalController.$inject = ['$timeout', '$uibModalInstance', '$log', '$translate', '_', 'errorType'];

function genesisModalController($timeout, $uibModalInstance, $log, $translate, _, errorType) {
  var vm = this;

  /***********************************************************************************************/
  /* Variables                                                                                   */
  /***********************************************************************************************/


  $timeout(init);
  /***********************************************************************************************/
  /* API publique                                                                                */
  /***********************************************************************************************/

  vm.close = function() {
    $uibModalInstance.close('ok');
  };

  /***********************************************************************************************/
  /* API interne                                                                                 */
  /***********************************************************************************************/
  function init() {
    switch (errorType) {
      case 'forbidden':
        vm.title = 'modal.error.forbidden.title';
        vm.body = 'modal.error.forbidden.body';
        break;
      default:
        vm.title = 'modal.error.generic.title';
        vm.body = 'modal.error.generic.body';
        break;
    }
  }
}