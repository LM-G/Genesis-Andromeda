export default class MapService {
  constructor($http, $q, genesisCfg) {
    this.$http = $http;
    this.$q = $q;
    this.url = genesisCfg.apiUrl + '/galaxy';
  }

  generate(){
    return this.$http
      .post(this.url + '/generate')
      .then((res) => {
      return res.data;
    });
  }
}

MapService.$inject = ['$http', '$q', 'genesisCfg'];