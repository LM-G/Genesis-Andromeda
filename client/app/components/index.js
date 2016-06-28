import angular from 'angular';
import form from './form';
import error from './error';

const components = angular
  .module('genesis.components', [
    form,
    error
  ])
  .name;

export default components;