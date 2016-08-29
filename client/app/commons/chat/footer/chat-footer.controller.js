/**
 * Controls the chat input component
 */
export default class ChatFooterController {
  constructor(User) {
    this.User = User;
  }

  $onInit() {
    this.isLoaded = true;
    console.log('Chat footer controller chargé !');
  }
}
ChatFooterController.$inject = ['User'];