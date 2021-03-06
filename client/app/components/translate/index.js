import angular from 'angular';
import ngTranslate from 'angular-translate';
import i18n from 'angular-dynamic-locale';
import ngTranslatePluralization from 'angular-translate-interpolation-messageformat';
import messageFormat from 'messageformat';

import confTraduction from './translate.config';
import runTraduction from './translate';

const translate = angular
  .module('genesis.components.translate', [
    ngTranslate,
    i18n,
    ngTranslatePluralization
  ])
  .config(confTraduction)
  .run(runTraduction)
  .name;

export default translate;

console.log('Chargement module traduction OK');


