/**
 * Controls the game view
 */
export default class GameController {
  constructor(User) {
    this.User = User;
  }

  $onInit() {
    this.isLoaded = true;
    console.log('Game controller chargé !');
  }
}
GameController.$inject = ['User'];