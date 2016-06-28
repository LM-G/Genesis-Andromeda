import angular from 'angular';
import FormValidate from './form-validate.directive';
import InputMatch from './input-match.directive';

const form = angular
  .module('genesis.commons.form', [])
  .directive('formValidate', FormValidate)
  .directive('inputMatch', InputMatch)
  .name;

export default form;