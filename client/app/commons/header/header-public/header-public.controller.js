/**
 * Controls the top navigation bar
 */
export default class HeaderPublicController {

  constructor(loginModalService, registerModalService, authService, User) {
    this.loginModalService = loginModalService;
    this.registerModalService = registerModalService;
    this.authService = authService;
    this.User = User;
  }

  $onInit() {
    this.isLoaded = true;
    console.log('Header Public controller chargé !');
  }

  login(){
    this.loginModalService.open();
  }
  
  register(){
    this.registerModalService.open();
  }
}
HeaderPublicController.$inject = ['loginModalService', 'registerModalService', 'authService', 'User'];