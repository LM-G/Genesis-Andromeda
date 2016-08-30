/**
 * Controls the chat view
 */
export default class ChatController {
  constructor($scope, User, chatService, chatContenu) {
    this.$scope = $scope;
    this.User = User;
    this.chatService = chatService;
    this.chatContenu = chatContenu;

    if(!this.chatService.webSocketService.isConnected()){
      $scope.$on('SOCKET_CONNECTED', () => {
        this.enterChat();
      })
    }
  }

  $onInit() {
    if(this.chatService.webSocketService.isConnected()){
      this.enterChat();
    }
    console.log('Chat controller chargé !');
  }

  enterChat(){
    this
      .chatService
      .enterChat()
      .then((res) => {
        this.chatContenu.setMessages(res.data);
        this.chatContenu.setUsers(res.users);
        /*
        this.$scope.$apply(() => {

        });*/
      })
      .finally(() => {
        this.isLoaded = true;
      });
  }

  $onDestroy(){
    this.chatService.leaveChat();
  }
}
ChatController.$inject = ['$scope', 'User', 'chatService', 'chatContenu'];