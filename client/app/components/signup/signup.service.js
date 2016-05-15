angular
  .module('genesis.views.signup')
  .service('signUpService', signUpService);

signUpService.$inject = ['$http', '$timeout', '$q', 'genesisCfg'];

function signUpService($http, $timeout, $q, genesisCfg) {
  var service = this;
  /***********************************************************************************************/
  /* Variables                                                                                   */
  /***********************************************************************************************/

  var url = genesisCfg.authUrl + '/register';

  /***********************************************************************************************/
  /* API publique                                                                                */
  /***********************************************************************************************/
  service.register = function(credentials) {
    return $http.post(url, credentials).then(function(res) {
      return res;
    });
  };

  /***********************************************************************************************/
  /* API interne                                                                                 */
  /***********************************************************************************************/

}