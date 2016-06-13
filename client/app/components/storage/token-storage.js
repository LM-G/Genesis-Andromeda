angular
  .module('genesis.services.storage')
  .factory('tokenStorage', tokenStorage);

tokenStorage.$inject = ['store'];

function tokenStorage(store) {
  return store.getNamespacedStore('token');
}