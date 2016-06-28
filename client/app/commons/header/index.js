import angular from 'angular';

import headerPublic from './header-public';
import headerProtected from './header-protected';
import HeaderComponent from './header.component';

const header = angular
  .module('genesis.commons.header', [
    headerPublic,
    headerProtected
  ])
  .component('header', HeaderComponent)
  .name;

export default header;