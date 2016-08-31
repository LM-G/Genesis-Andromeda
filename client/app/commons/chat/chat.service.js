export default class ChatService {
  constructor(webSocketService, $q, $rootScope) {
    this.channelName = 'chat';
    this.webSocketService = webSocketService;
    this.$q = $q;
  }

  enterChat(){
    var deferred = this.$q.defer();
    if(this.webSocketService.isConnected()){
      this.webSocketService.enterRoom(this.channelName, (data) => {
        deferred.resolve(data);
      });
    }
    return deferred.promise;
  }

  leaveChat(){
    this.webSocketService.leaveRoom(this.channelName, (data) => {
      this.webSocketService.socket.off('chat new message');
    });
  }

  sendMessage(message){
    var deferred = this.$q.defer();
    this.webSocketService.socket.emit('chat message', message, (resp) => {
      deferred.resolve(resp);
    });
    return deferred.promise;
  }

  listenNewMessage(cb){
    this.webSocketService.listen('chat new message', cb);
  }



}

ChatService.$inject = ['webSocketService', '$q', '$rootScope'];