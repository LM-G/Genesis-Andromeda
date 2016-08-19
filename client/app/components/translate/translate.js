/**
 * @ngdoc overview
 *
 * @description
 * Handles the translation changes dynamically
 *
 * @param $translate
 * @param tmhDynamicLocale
 */
function runTraduction($translate, tmhDynamicLocale) {
  tmhDynamicLocale.set('fr');
}
runTraduction.$inject = ['$translate', 'tmhDynamicLocale'];

export default runTraduction;