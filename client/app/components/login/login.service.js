angular
  .module('genesis.views.login')
  .service('loginService', loginService);

loginService.$inject = ['$http', '$timeout', '$q', 'genesisCfg'];

function loginService($http, $timeout, $q, genesisCfg) {
  var service = this;
  /***********************************************************************************************/
  /* Variables                                                                                   */
  /***********************************************************************************************/

  var url = genesisCfg.apiUrl + '/auth';

  /***********************************************************************************************/
  /* API publique                                                                                */
  /***********************************************************************************************/
  service.auth = function(credentials) {
    return $http.post(url, credentials).then(function(res) {
      switch (res.status) {
        case 200:
          return res.data;
        case 401:
          return $q.reject();
        default:
          break;
      }
    });
  };

  /***********************************************************************************************/
  /* API interne                                                                                 */
  /***********************************************************************************************/

}