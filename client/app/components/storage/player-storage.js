playerStorage.$inject = ['store'];

angular
  .module('genesis.services.storage')
  .factory('playerStorage', playerStorage);

function playerStorage(store) {
  return store.getNamespacedStore('player');
}