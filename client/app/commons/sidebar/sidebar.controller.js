/**
 * Controls the side bar
 */
export default class SidebarController {

  constructor($state, User) {
    this.User = User;
    this.$state = $state;
  }

  $onInit() {
    this.isLoaded = true;
    console.log('sidebar controller chargé !');
  }
}
SidebarController.$inject = ['$state', 'User'];