/**
 * Controls the game view
 */
export default class MapController {
  constructor(User) {
    this.User = User;
  }

  $onInit() {
    this.isLoaded = true;
    console.log('Map controller chargé !');
  }
}
MapController.$inject = ['User'];