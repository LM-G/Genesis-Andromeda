import angular from 'angular';

import onRepeatEnd from './on-repeat-end.directive';

const util = angular
  .module('genesis.components.util', [])
  .directive('onRepeatEnd', onRepeatEnd)
  .name;

export default util;

console.log('Chargement module util OK');


