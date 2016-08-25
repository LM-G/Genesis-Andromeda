/**
 * Controls the top navigation bar
 */
export default class HeaderController {

  constructor($state, loginModalService, registerModalService, authService, User) {
    this.$state = $state;
    this.loginModalService = loginModalService;
    this.registerModalService = registerModalService;
    this.authService = authService;
    this.User = User;
  }

  $onInit() {
    this.isLoaded = true;
    console.log('Header controller chargé !');
  }

  isHome(){
    return this.$state.is('home');
  }

  login(evt){
    this.loginModalService.open(null, null, evt);
  }

  register(){
    this.registerModalService.open();
  }

  logout(){
    this.authService.disconnect();
    this.$state.go('home');
  }
}
HeaderController.$inject = ['$state', 'loginModalService', 'registerModalService', 'authService', 'User'];