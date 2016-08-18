import angular from 'angular';

import NavService from './navigation.service';

const config = angular
  .module('genesis.components.nav', [])
  .service('navService', NavService)
  .name;

export default config;