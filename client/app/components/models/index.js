import angular from 'angular';

import User from './User';


const config = angular
  .module('genesis.components.models', [])
  .service('User', User)
  .name;

export default config;