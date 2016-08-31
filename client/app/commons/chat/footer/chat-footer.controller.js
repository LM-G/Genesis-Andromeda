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

  sendMessage(){
    this.parent.send(this.message);
    this.message = "";
  }
}
ChatFooterController.$inject = ['User'];