/**
 * Controls the error modal
 */
export default class ErrorController {
  constructor($state, $uibModalInstance, errorType) {
    this.$state = $state;
    this.$uibModalInstance = $uibModalInstance;
    this.errorType = errorType;
  }

  $onInit() {
    this.isLoaded = true;
    console.log('error-modal controller chargé !');
    switch (this.errorType) {
      case 'forbidden':
        this.title = 'modal.error.forbidden.title';
        this.body = 'modal.error.forbidden.body';
        break;
      default:
        this.title = 'modal.error.generic.title';
        this.body = 'modal.error.generic.body';
        break;
    }
  }

  close(){
    this.$uibModalInstance.close();
  }
}
/* Dependency injection *************************************************/
ErrorController.$inject = [
  '$state',
  '$uibModalInstance',
  'errorType'
];