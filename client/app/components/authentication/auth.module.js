console.log('Chargement module authentification OK');

angular
  .module('genesis.services.auth', [
  	'angular-storage'
  ])
  .run(mainAuth);

mainAuth.$inject = ['$log'];

function mainAuth($log){
	$log.info('initialisation du model user');
}