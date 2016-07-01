import BaseStorage from './base-storage';

export default class TokenStorage extends BaseStorage{
  constructor(store){
    super(store.getNamespacedStore('token'));
  }
}

TokenStorage.$inject = ['store'];