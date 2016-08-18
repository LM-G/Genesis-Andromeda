import angular from 'angular';
import angularStorage from 'angular-storage';

import CommonStorage from './common-storage';
import TokenStorage from './token.storage';


const config = angular
  .module('genesis.components.storage', [
    angularStorage
  ])
  .service('commonStorage', CommonStorage)
  .service('tokenStorage', TokenStorage)
  .name;

export default config;