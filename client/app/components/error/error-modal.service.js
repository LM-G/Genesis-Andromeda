import _merge from 'lodash/merge';
import _extend from 'lodash/extend';

export default class ErrorService{
  constructor($mdDialog){
    this.$mdDialog = $mdDialog;
    this.errorModal = {
      openedClass: 'error-modal',
      templateUrl: '/components/error/error.html',
      controller: 'errorController',
      controllerAs: '$ctrl',
      locals : {
        errorType : null
      }
    };
  }

  openModal(err){
    let optErrorModal = _merge({}, this.errorModal);
    optErrorModal.errorType = err;

    return this.$mdDialog.show(optErrorModal);
  }

}

ErrorService.$inject = ['$mdDialog'];