angular
  .module('genesis.views.partials')
  .service('signUpService', signUpService);

signUpService.$inject = ['$http', '$timeout', '$q', 'genesisCfg'];

function signUpService($scope, $timeout, $q, genesisCfg) {
  var service = this;
  /***********************************************************************************************/
  /* Variables                                                                                   */
  /***********************************************************************************************/

  var url = genesisCfg.apiUrl + '/register';

  /***********************************************************************************************/
  /* API publique                                                                                */
  /***********************************************************************************************/
  service.register = function(userParams) {
    return $http.post(url, userParams).then(function(res) {
      debugger;
      return res;
    })
  }

  /***********************************************************************************************/
  /* API interne                                                                                 */
  /***********************************************************************************************/

}