import angular from 'angular';

import HeaderComponent from './header.component';

const header = angular
  .module('genesis.commons.header', [])
  .component('header', HeaderComponent)
  .name;

export default header;