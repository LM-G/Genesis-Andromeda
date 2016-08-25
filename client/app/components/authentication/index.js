import angular from 'angular';
import angularJWT from 'angular-jwt';

import confAuthentication from './auth.config';
import auth from './auth.run';
import AuthService from './auth.service';
import showAuthed from './auth-show-element.directive';
import accessLevel from './auth-access';

const config = angular
  .module('genesis.components.auth', [
    angularJWT
  ])
  .config(confAuthentication)
  .service('authService', AuthService)
  .directive('gShowAuthed', showAuthed)
  .constant('accessLevelCst', accessLevel)
  .run(auth)
  .name;

export default config;