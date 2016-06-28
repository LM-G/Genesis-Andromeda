/**
 * Controls the top navigation bar
 */
export default class HeaderController {

  constructor($state, User, navService) {
    this.User = User;
    this.$state = $state;
  }

  $onInit() {
    this.isLoaded = true;
    console.log('Header controller chargé !');
  }

  isHome(){
    return this.$state.is('home');
  }
}
HeaderController.$inject = ['$state', 'User', 'navService'];