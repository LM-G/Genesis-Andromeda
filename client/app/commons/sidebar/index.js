import angular from 'angular';

import SidebarComponent from './sidebar.component';

const sidebar = angular
  .module('genesis.commons.sidebar', [])
  .component('sidebar', SidebarComponent)
  .name;

export default sidebar;