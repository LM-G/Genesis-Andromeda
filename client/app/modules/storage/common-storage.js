import BaseStorage from './base-storage';

export default class CommonStorage extends BaseStorage{
  constructor(store){
    super(store.getNamespacedStore('common'));
  }
}

CommonStorage.$inject = ['store'];