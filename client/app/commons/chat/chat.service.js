export default class ChatService {
  constructor(webSocketService) {
    this.channelName = 'chat';
    this.webSocketService = webSocketService;
    this.messages = [];
  }

  enterChat(){
    this.webSocketService.enterRoom(this.channelName);
  }

  leaveChat(){
    this.webSocketService.leaveRoom(this.channelName);
  }
}

ChatService.$inject = ['webSocketService'];