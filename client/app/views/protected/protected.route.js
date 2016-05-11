angular
  .module('genesis.views')
  .config(configProtectedState);

configProtectedState.$inject = ['$stateProvider'];

/* configuration des états dont l'acces est restreint aux joueur connectés */
function configProtectedState($stateProvider) {
  $stateProvider
    .state('protected', {
      abstract: true,
      views: {
        '': {
          template: '<div ui-view></div>'
        },
        'header': {
          templateUrl: '/views/partials/header_protected/header.html',
          controller: 'headerGameCtrl',
          controllerAs: 'vm'
        }
      },
      resolve: {
        '_authorize': authenticate
      }
    });
}

/* Détermine si l'utilisateur est connecté et peut accèder à l'état */
authenticate.$inject = ['$q', 'User', 'NotConnectedError'];

function authenticate($q, User, NotConnectedError) {
  var deffered = $q.defer();
  if (User.isLogged) {
    deffered.resolve(true);
  } else {
    deffered.reject(new NotConnectedError());
  }
  return deffered.promise;
}