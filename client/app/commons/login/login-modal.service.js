import _merge from 'lodash/merge';
import _extend from 'lodash/extend';

/**
 * @ngdoc service
 * @name genesis.commons.login:LoginModalService
 *
 * @requires $uibModal
 *
 * @description
 * Service de gestion de la pop-in de login
 */
export default class LoginModalService{
  constructor($uibModal){
    this.$uibModal = $uibModal;
    this.loginModal = {
      size: 'md',
      openedClass: 'login-modal',
      templateUrl: '/commons/login/login.html',
      controller: 'loginController',
      controllerAs: '$ctrl'
    };
  }

  open(state, params){
    let optLoginModal = _merge({}, this.loginModal);
    optLoginModal.resolve = {};
    _extend(optLoginModal.resolve, {
      toState: function() {
        return state || 'dashboard';
      },
      toParams: function() {
        return params || {};
      }
    });
    this.opened = this.$uibModal.open(optLoginModal);
    return this.opened;
  }
  
  cancel(){
    if(this.opened) {
      this.$uibModal.cancel(this.opened, (reason) => {
        console.warn(`Modal de login fermée : ${reason}`);
      });
    }
  }

  close(){
    if(this.opened) {
      this.$uibModal.close(this.opened, (result) => {
        console.log(`Modal de login fermée : ${result}`);
        return result;
      });
    }
  }
}
LoginModalService.$inject = ['$uibModal'];

