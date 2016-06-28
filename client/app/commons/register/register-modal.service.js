import _merge from 'lodash/merge';

/**
 * Handles the register modal
 */
export default class RegisterModalService{
  constructor($uibModal){
    this.$uibModal = $uibModal;
    this.registerModal = {
      size: 'md',
      backdrop: 'static',
      openedClass: 'register-modal',
      templateUrl: '/commons/register/register.html',
      controller: 'registerController',
      controllerAs: '$ctrl'
    };
  }
  
  open(){
    let optRegisterModal = _merge({}, this.registerModal);
    this.opened = this.$uibModal.open(optRegisterModal);
    return this.opened;
  }
  
  cancel(){
    if(this.opened) {
      this.$uibModal.cancel(this.opened, (reason) => {
        console.warn(`Modal d'inscription fermée : ${reason}`);
      });
    }
  }

  close(){
    if(this.opened) {
      this.$uibModal.close(this.opened, (result) => {
        console.log(`Modal d'inscription fermée : ${result}`);
        return result;
      });
    }
  }
}
RegisterModalService.$inject = ['$uibModal'];

