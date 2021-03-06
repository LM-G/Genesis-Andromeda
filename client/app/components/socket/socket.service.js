export default class WebSocketService {
  constructor(io, genesisCfg, commonStorage, $rootScope){
    this.io = io;
    this.genesisCfg = genesisCfg;
    this.commonStorage = commonStorage;
    this.$rootScope = $rootScope;
  }

  connect(token){
    const io = this.io;
    const config = this.genesisCfg;
    this.socket = io.connect(config.url, {
      'query': 'token=' + token
    });

    this.socket.on('connect', () => {
      let sessionId = this.socket.io.engine.id;
      console.log("WEBSOCKET connected with session id", sessionId);
      this.$rootScope.$broadcast('SOCKET_CONNECTED');
    });

    this.socket.on('unauthorized', function(error, callback) {
      if (error.data.type == "UnauthorizedError" || error.data.code == "invalid_token") {
        // redirect user to login page perhaps?
        callback();
        console.log("User's token has expired");
      }
    });
  }

  isConnected(){
    return this.socket.connected;
  }

  disconnect(){
    if(this.socket) {
      this.socket.disconnect(true);
    }
  }

  enterRoom(name, cb){
    if(this.socket) {
      this.socket.emit('join room', name, cb);
    }
  }

  leaveRoom(name, cb){
    if(this.socket) {
      this.socket.emit('leave room', name, cb);
    }
  }

  listen(name, cb){
    var scope = this.$rootScope;
    this.socket.on(name, function(data){
      scope.$apply(() => {
        cb(data)
      });
    });
  }
}

WebSocketService.$inject = ['io','genesisCfg', 'commonStorage', '$rootScope'];
