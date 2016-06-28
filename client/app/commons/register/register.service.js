export default class RegisterService{
  constructor($q, $http, genesisCfg){
    this.$q = $q;
    this.$http = $http;
    this.url = genesisCfg.authUrl + '/register';
  }
  register (credentials) {
    return this.$http
      .post(this.url, credentials)
      .then((res) => res);
  };
}

RegisterService.$inject = ['$q', '$http', 'genesisCfg'];