import angular from 'angular';
import angularJWT from 'angular-jwt';

import confAuthentication from './auth.config';
import auth from './auth.run';
import AuthService from './auth.service';
import accessLevel from './auth-access';

const config = angular
  .module('genesis.modules.auth', [
    angularJWT
  ])
  .config(confAuthentication)
  .service('authService', AuthService)
  .constant('accessLevelCst', accessLevel)
  .run(auth)
  .name;

export default config;