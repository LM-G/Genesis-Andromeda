export default class LoginService{
  constructor($q, $http, genesisCfg){
    this.$q = $q;
    this.$http = $http;
    this.url = genesisCfg.authUrl + '/login';
  }
  signin (credentials) {
    return this.$http.post(this.url, credentials).then(function(res) {
      switch (res.status) {
        case 200:
          return res.data;
        case 401:
          return this.$q.reject();
        default:
          break;
      }
    });
  };
}

LoginService.$inject = ['$q', '$http', 'genesisCfg'];