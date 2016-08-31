/**
 * Controls the chat view
 */
export default class ChatController {
  constructor($scope, $timeout, $document, User, chatService, chatContenu) {
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.$document =$document;
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
          this.scrollToBottom();
        });
    }
  }

  onNewMessage(message){
    debugger;
  }

  init(){
    this.$timeout(() => {
      debugger;
      this.enterChat();
      this.chatService.listenNewMessage(this.onNewMessage);
    });
  }

  scrollToBottom(){
    /* todo scroll to bottom */
  }
}
ChatController.$inject = ['$scope', '$timeout', '$document', 'User', 'chatService', 'chatContenu'];