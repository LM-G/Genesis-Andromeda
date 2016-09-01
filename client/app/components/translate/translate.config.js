/**
 * @ngdoc overview
 *
 * @description
 * Configurates the translate module
 *
 * @param $translateProvider
 * @param tmhDynamicLocaleProvider
 */
function confTraduction($translateProvider, tmhDynamicLocaleProvider) {
  /* configurates the app specific translations */
  $translateProvider.useStaticFilesLoader({
    prefix: '/lang/locale-',
    suffix: '.json'
  });
  $translateProvider
    .addInterpolation('$translateMessageFormatInterpolation')
    .useSanitizeValueStrategy(null)
    .determinePreferredLanguage()
    .fallbackLanguage('fr');

  /* enable the i18n internationalization */
  tmhDynamicLocaleProvider.localeLocationPattern('/lang/i18n/angular-locale_{{locale}}.js');
}
confTraduction.$inject = ['$translateProvider', 'tmhDynamicLocaleProvider'];

export default confTraduction;