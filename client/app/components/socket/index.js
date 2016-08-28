import angular from 'angular';

import handleSocket from './socket.run';
import WebSocketService from './socket.service';

const config = angular
  .module('genesis.components.socket', [])
  .service('webSocketService', WebSocketService)
  .run(handleSocket)
  .name;

export default config;