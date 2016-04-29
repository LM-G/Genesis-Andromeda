console.log('Chargement des modules OK');

// composants
angular.module('genesis.views', [
	'genesis.views.partials',
	'genesis.views.home',
  	'genesis.views.game'
]);

// composants
angular.module('genesis.services', [
	'angular-storage',
	'genesis.services.utils',
	'genesis.services.storage',
	'genesis.services.auth'
]);

// templates html
angular.module('genesis.templates', []);