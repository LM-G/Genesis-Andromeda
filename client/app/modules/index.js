import angular from 'angular';

import translate from './translate';
import storage from './storage';
import auth from './authentication';
import models from './models';
import nav from './navigation';

const modules = angular
  .module('genesis.modules', [
    translate,
    storage,
    auth,
    models,
    nav
  ])
  .name;

export default modules;