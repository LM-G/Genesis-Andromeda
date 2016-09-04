export default class GalaxyService {
  constructor($http, $q, genesisCfg) {
    this.$http = $http;
    this.$q = $q;
    this.url = genesisCfg.apiUrl + '/galaxy';
  }

  generate(requestParams){
    return this.$http
      .post(this.url + '/generate', requestParams)
      .then((res) => {
        return res.data;
      });
  }

  getSystems(){
    return this.$http
      .get(this.url)
      .then((res) => {
        return res.data;
      });
  }
}

GalaxyService.$inject = ['$http', '$q', 'genesisCfg'];