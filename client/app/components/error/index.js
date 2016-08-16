import angular from 'angular';

import ErrorService from './error-modal.service';
import ErrorController from './error.controller';

const modal = angular
  .module('genesis.commons.error', [])
  .controller('errorController', ErrorController)
  .service('errorService', ErrorService)
  .name;

export default modal;