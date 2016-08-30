export default class ChatService {
  constructor(webSocketService, $q) {
    this.channelName = 'chat';
    this.webSocketService = webSocketService;
    this.messages = [];
    this.$q = $q;
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
      debugger;
    });
  }
}

ChatService.$inject = ['webSocketService', '$q'];