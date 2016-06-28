import angular from 'angular';

import PublicComponent from './header-public.component';

const module = angular
  .module('genesis.commons.header.public', [])
  .component('headerPublic', PublicComponent)
  .name;

export default module;