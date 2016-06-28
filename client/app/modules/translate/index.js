import angular from 'angular';
import ngTranslate from 'angular-translate';

import confTraduction from './translate.config';


const translate = angular
  .module('genesis.modules.translate', [
    ngTranslate
  ])
  .config(confTraduction)
  .name;

export default translate;

console.log('Chargement module traduction OK');


