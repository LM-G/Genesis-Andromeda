export default class ChatService {
  constructor(webSocketService, $q) {
    this.channelName = 'chat';
    this.webSocketService = webSocketService;
    this.messages = [];
    this.$q = $q;

    this.init();
  }

  enterChat(){
    var deferred = this.$q.defer();
    if(this.webSocketService.isConnected()){
      this.webSocketService.enterRoom(this.channelName, function(data){
        deferred.resolve(data);
      });
    }
    return deferred.promise;
  }

  leaveChat(){
    this.webSocketService.leaveRoom(this.channelName, function(data){
    });
  }

  sendMessage(message){
    var deferred = this.$q.defer();
    this.webSocketService.socket.emit('chat message', message, (resp) => {
      deferred.resolve(resp);
    });
    return deferred.promise;
  }

  init(){
    this.webSocketService.socket.on('chat new message')
  }
}

ChatService.$inject = ['webSocketService', '$q'];