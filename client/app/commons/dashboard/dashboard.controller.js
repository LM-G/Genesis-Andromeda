/**
 * Controls the dashboard view
 */
export default class DashboardController {
  constructor(User) {
    this.User = User;
  }

  $onInit() {
    this.isLoaded = true;
    console.log('Dashboard controller chargé !');
  }
}
DashboardController.$inject = ['User'];