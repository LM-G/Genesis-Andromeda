/**
 * Controls registration modal
 */
export default class RegisterController {
  constructor($state, registerService, $uibModalInstance) {
    this.$state = $state;
    this.registerService = registerService;
    this.$uibModalInstance = $uibModalInstance;
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
      this.registerService
        .register(credentials)
        .then((res) => {
          /* TODO : gérer les cas du nom d'utilisateur déjà pris et du mail déjà pris*/
          this.$uibModalInstance.close();
          /* TODO : affichage succès inscription si pas d'erreur */
        });
    }
  }
}

RegisterController.$inject = [
  '$state',
  'registerService',
  '$uibModalInstance'
];