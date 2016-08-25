import _merge from 'lodash/merge';

/**
 * Handles the register modal
 */
export default class RegisterModalService{
  constructor($mdDialog){
    this.$mdDialog = $mdDialog;
    this.registerModal = {
      templateUrl: '/commons/register/register.html',
      controller: 'registerController',
      controllerAs: '$ctrl'
    };
  }
  
  open(){
    let optRegisterModal = _merge({}, this.registerModal);
    return this.$mdDialog.show(optRegisterModal);
  }

  close(){
      this.$mdDialog.hide();
  }
}
RegisterModalService.$inject = ['$mdDialog'];

