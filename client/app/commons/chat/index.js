import angular from 'angular';

import ChatService from './chat.service';
import ChatContenu from './chat-contenu.service';
import ChatComponent from './chat.component';
import ChatFooterComponent from './footer';


const chat = angular
  .module('genesis.commons.chat', [])
  .service('chatService', ChatService)
  .service('chatContenu', ChatContenu)
  .component('chat', ChatComponent)
  .component('chatFooter', ChatFooterComponent)
  .config(Router)
  .name;

export default chat;

Router.$inject = ['$stateProvider'];
function Router($stateProvider) {
  $stateProvider.state({
    name: 'chat',
    url: '/chat',
    template: `<chat layout flex></chat>`,
    authLevel: 0
  });
}
