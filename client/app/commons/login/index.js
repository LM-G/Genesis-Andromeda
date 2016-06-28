import angular from 'angular';
import LoginController from './login.controller';
import LoginModalService from './login-modal.service';
import LoginService from './login.service';

const login = angular
  .module('genesis.commons.login', [])
  .controller('loginController', LoginController)
  .service('loginModalService', LoginModalService)
  .service('loginService', LoginService)
  .name;

export default login;