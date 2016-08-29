/**
 * Controls the chat view
 */
export default class ChatController {
  constructor(User) {
    this.User = User;
  }

  $onInit() {
    this.isLoaded = true;
    console.log('Chat controller chargé !');
  }
}
ChatController.$inject = ['User'];