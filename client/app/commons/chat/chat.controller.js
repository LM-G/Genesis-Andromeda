/**
 * Controls the chat view
 */
export default class ChatController {
  constructor(User, chatService, chatContenu) {
    this.User = User;
    this.chatService = chatService;

    this.getMessages = chatContenu.getMessages;
  }

  $onInit() {
    this.isLoaded = true;
    this.chatService.enterChat();
    console.log('Chat controller chargé !');
  }

  $onDestroy(){
    this.chatService.leaveChat();
  }
}
ChatController.$inject = ['User', 'chatService', 'chatContenu'];