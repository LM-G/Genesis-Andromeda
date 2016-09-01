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
    this.webSocketService.leaveRoom(this.channelName, () => {
      this.webSocketService.socket.off('chat new message');
      this.webSocketService.socket.off('chat user joined');
      this.webSocketService.socket.off('chat user left');
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

  listenUserJoin(cb){
    this.webSocketService.listen('chat user joined', cb);
  }

  listenUserLeave(cb){
    this.webSocketService.listen('chat user left', cb);
  }
}

ChatService.$inject = ['webSocketService', '$q', '$rootScope'];