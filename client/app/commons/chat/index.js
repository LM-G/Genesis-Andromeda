import angular from 'angular';

import ChatComponent from './chat.component';
import ChatFooterComponent from './footer';

const chat = angular
  .module('genesis.commons.chat', [])
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
