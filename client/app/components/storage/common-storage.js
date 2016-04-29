commonStorage.$inject = ['store'];

angular
  .module('genesis.services.storage')
  .factory('commonStorage', commonStorage);

function commonStorage(store) {
  return store.getNamespacedStore('common');
}