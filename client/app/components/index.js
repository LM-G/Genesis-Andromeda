import angular from 'angular';
import form from './form';
import error from './error';
import translate from './translate';
import storage from './storage';
import auth from './authentication';
import models from './models';
import nav from './navigation';
import clock from './clock';
import socket from './socket';

const components = angular
  .module('genesis.components', [
    form,
    error,
    translate,
    storage,
    auth,
    models,
    nav,
    clock,
    socket
  ])
  .name;

export default components;