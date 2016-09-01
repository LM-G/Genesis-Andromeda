/**
 * Controls the chat view
 */
"use strict";
export default class ChatController {
  constructor($scope, $timeout, User, chatService, chatContenu) {
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.User = User;
    this.chatService = chatService;
    this.chatContenu = chatContenu;

    if(!this.chatService.webSocketService.isConnected()){
      $scope.$on('SOCKET_CONNECTED', () => {
        this.init();
      })
    }
  }

  $onInit() {
    if(this.chatService.webSocketService.isConnected()){
      this.init();
    }
    console.log('Chat controller chargé !');
  }

  $onDestroy(){
    this.chatService.leaveChat();
  }

  enterChat(){
    this
      .chatService
      .enterChat()
      .then((res) => {
        this.chatContenu.setMessages(res.data);
        this.chatContenu.setUsers(res.users);
      })
      .finally(() => {
        this.isLoaded = true;
      });
  }

  send(message){
    if(message != null && message != ""){
      var newMessage = {user : angular.copy(this.User), content: message, createdAt : new Date()};
      this.chatContenu.addMessage(newMessage);

      this
        .chatService
        .sendMessage(message)
        .then((resp) => {
          angular.extend(newMessage, resp);
          this.chatContenu.sortMessages();
        });

      this.$timeout(() => {
        this.scrollToBottom();
      });
    }
  }

  onNewMessage(message){
    this.chatContenu.addMessage(message);
  }

  init(){
    this.$timeout(() => {
      this.enterChat();
      this.chatService.listenNewMessage((message) => { this.onNewMessage(message); });
    });
  }

  scrollToBottom(canceler){
    if(canceler && this.alreadyScrolled){
      return;
    }
    var messageDiv = document.getElementById('messages');
    messageDiv.scrollTop = messageDiv.scrollHeight;
    if(canceler){
      this.alreadyScrolled = true;
    }
  }
}

ChatController.$inject = ['$scope', '$timeout', 'User', 'chatService', 'chatContenu'];