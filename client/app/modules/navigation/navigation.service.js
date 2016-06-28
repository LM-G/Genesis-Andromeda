export default class AuthService {
  constructor($state, commonStorage) {
    this.$state = $state;
    this.commonStorage = commonStorage;
  }

  refresh(){
    this.state = this.$state.current;
  }
}

AuthService.$inject = ['$state', 'commonStorage'];