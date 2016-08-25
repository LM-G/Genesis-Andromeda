/**
 * Controls the error modal
 */
export default class ErrorController {
  constructor($state, $mdDialog, errorType) {
    this.$state = $state;
    this.$mdDialog = $mdDialog;

    this.isLoaded = true;

    switch (errorType) {
      case 'forbidden':
        this.title = 'modal.error.forbidden.title';
        this.body = 'modal.error.forbidden.body';
        break;
      default:
        this.title = 'modal.error.generic.title';
        this.body = 'modal.error.generic.body';
        break;
    }

    console.log('error-modal controller chargé !');
  }

  close(){
    this.$mdDialog.hide();
  }
}
/* Dependency injection *************************************************/
ErrorController.$inject = [
  '$state',
  '$mdDialog',
  'errorType'
];