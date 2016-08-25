"use strict";
/**
 * Controls registration modal
 */
export default class RegisterController {
  constructor($state, registerService, $mdDialog) {
    this.$state = $state;
    this.registerService = registerService;
    this.$mdDialog = $mdDialog;
  }

  $onInit() {
    this.isLoaded = true;
    console.log('Register controller chargé !');
  }

  /**
   * Register a new user.
   * @param form : signup form.
   * @return {undefined}
   */
  register(form) {
    console.log('register', form);
    if (form.$valid) {
      var credentials = {
        username: this.username,
        email: this.email,
        password: this.password
      };
      this.isLoading = true;
      this.registerService
        .register(credentials)
        .then((res) => {
          /* TODO : gérer les cas du nom d'utilisateur déjà pris et du mail déjà pris*/
          this.$mdDialog.hide();
          /* TODO : affichage succès inscription si pas d'erreur */
        })
        .catch(handleError)
        .finally(() => {
          this.isLoading = false
        });
    }
  }
}

RegisterController.$inject = [
  '$state',
  'registerService',
  '$mdDialog'
];

function handleError(err){
  /* TODO : gestion des erreurs de validation renvoyées par le backend */
}