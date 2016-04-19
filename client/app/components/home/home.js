/**
 *  Module home
 *
 * Gestion de la page d'accueil des visiteur du site
 */
angular
  .module('genesis.views.home')
  .controller('homeCtrl', [
	homeCtrl
  ]);

function homeCtrl() {
  console.log('controller home');
  var vm = this;
}