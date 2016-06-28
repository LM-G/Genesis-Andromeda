import angular from 'angular';

import ProtectedComponent from './header-protected.component';

const module = angular
  .module('genesis.commons.header.protected', [])
  .component('headerProtected', ProtectedComponent)
  .name;

export default module;