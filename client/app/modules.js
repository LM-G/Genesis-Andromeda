console.log('Chargement des modules OK');

// composants
angular.module('genesis.views', [
	'genesis.views.partials',
	'genesis.views.home',
    'genesis.views.game'
]);

// templates html
angular.module('genesis.templates', []);