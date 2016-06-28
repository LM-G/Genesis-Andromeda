/**
 * Controls the top navigation bar when user is in a game view
 */
export default class HeaderProtectedController {

  constructor($state, authService, User) {
    this.$state = $state;
    this.authService = authService;
    this.User = User;
  }

  $onInit() {
    this.isLoaded = true;
    console.log('Header Protected controller chargé !');
  }

  logout(){
    this.authService.disconnect();
    this.$state.go('home');
  }

}
HeaderProtectedController.$inject = ['$state', 'authService', 'User'];