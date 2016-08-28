export default class WebSocketService {
  constructor(io, genesisCfg, authService){
    this.io = io;
    this.genesisCfg = genesisCfg;
  }

  connect(token){
    const io = this.io;
    const config = this.genesisCfg;
    this.socket = io.connect(config.url, {
      'query': 'token=' + token,
      'forceNew': true
    });

    this.socket.on('connect', () => {
      let sessionId = this.socket.io.engine.id;

      console.log("WEBSOCKET connected with session id", sessionId);
    });

    this.socket.on("unauthorized", function(error) {
      if (error.data.type == "UnauthorizedError" || error.data.code == "invalid_token") {
        // redirect user to login page perhaps?
        console.log("User's token has expired");
      }
    });
  }

  disconnect(){
    if(this.socket) {
      this.socket.disconnect();
    }
  }

}

WebSocketService.$inject = ['io','genesisCfg'];
