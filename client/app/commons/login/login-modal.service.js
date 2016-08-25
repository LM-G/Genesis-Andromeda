import _merge from 'lodash/merge';
import _extend from 'lodash/extend';

/**
 * @ngdoc service
 * @name genesis.commons.login:LoginModalService
 *
 * @requires $mdDialog
 *
 * @description
 * Service de gestion de la pop-in de login
 */
export default class LoginModalService{
  constructor($mdDialog){
    this.$mdDialog = $mdDialog;
    this.loginModal = {
      templateUrl: '/commons/login/login.html',
      controller: 'loginController',
      controllerAs: '$ctrl',
      locals : {
        toState : null,
        toParams : null
      }
    };
  }

  open(state, params, evt){
    let optLoginModal = _merge({}, this.loginModal);
    optLoginModal.resolve = {};
    optLoginModal.toState = state || 'dashboard';
    optLoginModal.toParams = params || {};
    if(evt != null){
      optLoginModal.targetEvent = evt;
    }

    return this.$mdDialog.show(optLoginModal);
  }
  
  cancel(){
    debugger;
    /*
    if(this.opened) {
      this.$uibModal.cancel(this.opened, (reason) => {
        console.warn(`Modal de login fermée : ${reason}`);
      });
    }*/
  }

  close(){/*
    if(this.opened) {
      this.$uibModal.close(this.opened, (result) => {
        console.log(`Modal de login fermée : ${result}`);
        return result;
      });
    }*/
  }
}
LoginModalService.$inject = ['$mdDialog'];

