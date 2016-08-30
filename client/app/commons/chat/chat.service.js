export default class ChatService {
  constructor(webSocketService) {
    this.channelName = 'chat';
    this.webSocketService = webSocketService;
    this.messages = [];
  }

  enterChat(){
    this.webSocketService.enterRoom(this.channelName, function(data){
      debugger;
    });
  }

  leaveChat(){
    this.webSocketService.leaveRoom(this.channelName, function(data){
      debugger;
    });
  }
}

ChatService.$inject = ['webSocketService'];