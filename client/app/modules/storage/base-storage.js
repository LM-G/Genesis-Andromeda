export default class BaseStorage{
  constructor(store){
    this.store = store;
  }

  set(field, value){
    this.store.set(field, value);
  }

  get(field){
    return this.store.get(field);
  }

  remove(field){
    this.store.remove(field);
  }
}