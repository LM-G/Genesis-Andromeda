/**
 * Controls the resources view
 */
export default class ResourceController {
  constructor(User) {
    this.User = User;
  }

  $onInit() {
    this.isLoaded = true;
    console.log('Resource controller chargé !');
  }
}
ResourceController.$inject = ['User'];