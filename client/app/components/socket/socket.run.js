/**
 * Handles socket mechanisms
 */
function handleSocket($rootScope, User, webSocketService, authService) {
  /* inialize the socket connection */
  if(User.isLogged){
    webSocketService.connect(authService.getAccessToken());
  }
}

handleSocket.$inject = [
  '$rootScope',
  'User',
  'webSocketService',
  'authService'
];

export default handleSocket;