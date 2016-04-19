/**
 * Chargement des directives et états du menu
 */
angular
  .module('genesis.views.home')
  .config(configHomeState);

function configHomeState($stateProvider) {
  var config = {
    url: "/home",
    templateUrl: "/components/home/home.html",
    controller: "homeCtrl",
    controllerAs: "vm"
  };

  $stateProvider
    .state("home", config);

  console.log("[Route] home OK");
}