genesisModalService.$inject = [
  '$uibModal',
  '$log'
];

angular
  .module('genesis.services.utils')
  .service('genesisModalService', genesisModalService );

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