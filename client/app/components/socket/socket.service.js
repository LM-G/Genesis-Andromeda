export default class WebSocketService {
  constructor(io, genesisCfg){
    this.io = io;
    this.genesisCfg = genesisCfg;
  }

  connect(){
    const io = this.io;
    const config = this.genesisCfg;
    this.socket = io.connect(config.url);
    this.socket.on('connect', () => {
      let sessionId = this.socket.io.engine.id;

      console.log("WEBSOCKET connected with session id", sessionId);
    });
  }

}

WebSocketService.$inject = ['io','genesisCfg'];
