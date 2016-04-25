/**
 *  Module home
 *
 * Gestion de la page home des visiteurs du site
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