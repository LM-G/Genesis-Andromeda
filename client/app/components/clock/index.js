import angular from 'angular';
import angularMoment from 'angular-moment';

import ClockComponent from './clock.component';


const config = angular
  .module('genesis.components.clock', [
    angularMoment.name
  ])
  .component('clock', ClockComponent)
  .name;

export default config;