/**
 * Configuration du module de traduction de l'application
 * @param $translateProvider
 */
function confTraduction($translateProvider) {
  $translateProvider.useStaticFilesLoader({
    prefix: '/lang/locale-',
    suffix: '.json'
  });
  $translateProvider
    .useSanitizeValueStrategy(null)
    .determinePreferredLanguage()
    .fallbackLanguage('fr');
}
confTraduction.$inject = ['$translateProvider'];

export default confTraduction;