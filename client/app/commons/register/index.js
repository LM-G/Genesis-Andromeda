import angular from 'angular';
import RegisterController from './register.controller';
import RegisterModalService from './register-modal.service';
import RegisterService from './register.service';

const register = angular
  .module('genesis.commons.register', [])
  .controller('registerController', RegisterController)
  .service('registerModalService', RegisterModalService)
  .service('registerService', RegisterService)
  .name;

export default register;