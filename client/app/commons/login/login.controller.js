export default class LoginController {

  constructor($state, loginService, authService, $mdDialog, toState, toParams, registerModalService) {
    this.$state = $state;
    this.loginService = loginService;
    this.authService = authService;
    this.$mdDialog = $mdDialog;
    /* Resolved before instanciating the controller */
    this.toState = toState;
    this.toParams = toParams;
    this.registerModalService = registerModalService;
  }

  $onInit() {
    this.isLoaded = true;
    console.log('Login controller chargé !');
  }

  /**
   * Establish the login on the server. Get user tokens and user infos.
   * @param form : Login form.
   */
  login(form) {
    if (form.$valid) {
      this.isLoading = true;
      let credentials = {
        username: this.username,
        password: this.password
      };
      this.loginService
        .signin(credentials)
        .then((res) => {
          console.log('connexion réussie : ', res);
          /* tokens are saved */
          this.authService.setTokens(res.token.access_token, res.token.refresh_token);
          /* User informations are fetched */
          return this.authService.getUser();
        })
        .then((user) => {
          /* local user is updated */
          this.authService.setUser(user);
          this.$mdDialog.hide('login successfull');
          if (this.toState != null) {
            this.$state.go(this.toState, this.toParams);
          } else {
            this.$state.go('dashboard', this.toParams);
          }
        })
        .catch((err) => {
          this.loginFailed = true;
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  }

  register(){
    this.$mdDialog.hide('go to register');
    this.registerModalService.open();
  }
}

LoginController.$inject = [
  '$state',
  'loginService',
  'authService',
  '$mdDialog',
  'toState',
  'toParams',
  'registerModalService'
];