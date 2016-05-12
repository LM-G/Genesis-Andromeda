console.log('Chargement des modules OK');

// composants
angular.module('genesis.views', [
  'genesis.views.login',
  'genesis.views.signup',
  'genesis.views.header',
  'genesis.views.sidebar',
  'genesis.views.home',
  'genesis.views.game',
  'genesis.views.dashboard'
]);

// composants
angular.module('genesis.services', [
  'angular-storage',
  'genesis.services.utils',
  'genesis.services.storage',
  'genesis.services.auth',
  'genesis.services.error'
]);

// templates html
angular.module('genesis.templates', []);