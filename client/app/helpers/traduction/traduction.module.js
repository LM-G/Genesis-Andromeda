angular
	.module('genesis.traduction', [
		'pascalprecht.translate'
	])
	.config(['$translateProvider', configurationTranslation]);

function configurationTranslation($translateProvider) {
  $translateProvider.useStaticFilesLoader({
    prefix: '/lang/locale-',
    suffix: '.json'
  });
  $translateProvider
    .useSanitizeValueStrategy(null)
    .determinePreferredLanguage()
    .fallbackLanguage('fr');
}

console.log('Chargement module traduction OK');
