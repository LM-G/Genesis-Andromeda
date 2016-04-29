angular
  .module('genesis.services')
  .service('genesisModalService', [
  	'$uibModal',
  	'$log',
		genesisModalService
  ]);

function genesisModalService($uibModal, $log) {
  var service = this;
  /***********************************************************************************************/
  /* Variables                                                                                   */
  /***********************************************************************************************/
  var loginModal = {
  	size:'md',
    templateUrl: '/views/partials/login/login.html',
    controller: 'loginCtrl',
    controllerAs: 'vm'
  };

  /***********************************************************************************************/
  /* API publique                                                                                */
  /***********************************************************************************************/
  service.openLogin = function(){
  	return $uibModal.open(loginModal);
  };

  /***********************************************************************************************/
  /* API interne                                                                                 */
  /***********************************************************************************************/
}