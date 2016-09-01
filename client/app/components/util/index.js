import angular from 'angular';

import onRepeatEnd from './on-repeat-end.directive';
import gCapitalize from './g-capitalize.filter';

const util = angular
  .module('genesis.components.util', [])
  .directive('onRepeatEnd', onRepeatEnd)
  .filter('gCapitalize', gCapitalize)
  .name;

export default util;

console.log('Chargement module util OK');


