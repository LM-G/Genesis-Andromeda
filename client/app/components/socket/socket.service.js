export default class WebSocketService {
  constructor(io, genesisCfg, commonStorage){
    this.io = io;
    this.genesisCfg = genesisCfg;
    this.commonStorage = commonStorage;
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
    });

    this.socket.on('unauthorized', function(error) {
      if (error.data.type == "UnauthorizedError" || error.data.code == "invalid_token") {
        // redirect user to login page perhaps?
        console.log("User's token has expired");
      }
    });

    this.socket.on('message', function(res) {
      debugger;
    });

    this.socket.on('room joined', function(data){
      debugger;
    });


    this.socket.on('room left', function(name){
      debugger;
    });
  }

  disconnect(){
    if(this.socket) {
      this.socket.disconnect(true);
    }
  }

  enterRoom(name, cb){
    if(this.socket) {
      this.socket.emit('join room', name);
      this.socket.on('room joined ' + name, cb);
    }
  }

  leaveRoom(name, cb){
    if(this.socket) {
      this.socket.emit('leave room', name);
      this.socket.on('room joined ' + name, cb);
    }
  }
}

WebSocketService.$inject = ['io','genesisCfg', 'commonStorage'];
