/**
 * Handles socket mechanisms
 */
function handleSocket($rootScope, User, webSocketService, errorService) {
  /* inialize the socket connection */
  if(User.isLogged){
    webSocketService.connect();
  }
}

handleSocket.$inject = [
  '$rootScope',
  'User',
  'webSocketService',
  'errorService'
];

export default handleSocket;