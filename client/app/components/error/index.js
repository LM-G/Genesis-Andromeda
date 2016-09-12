import angular from 'angular';

import ErrorService from './error-modal.service';
import ErrorController from './error.controller';
import errorRun from './error.run';

const modal = angular
  .module('genesis.components.error', [])
  .controller('errorController', ErrorController)
  .service('errorService', ErrorService)
  .run(errorRun)
  .name;

export default modal;