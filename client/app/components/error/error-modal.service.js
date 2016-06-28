import _merge from 'lodash/merge';
import _extend from 'lodash/extend';

export default class ErrorService{
  constructor($uibModal){
    this.$uibModal = $uibModal;
    this.errorModal = {
      size: 'md',
      openedClass: 'error-modal',
      templateUrl: '/components/error/error.html',
      controller: 'errorController',
      controllerAs: '$ctrl'
    };
  }

  openModal(err){
    let optErrorModal = _merge({}, this.errorModal);
    optErrorModal.resolve = {};
    _extend(optErrorModal.resolve, {
      errorType: () =>  err || null
    });
    this.opened = this.$uibModal.open(optErrorModal);
    return this.opened;
  }

}

ErrorService.$inject = ['$uibModal'];