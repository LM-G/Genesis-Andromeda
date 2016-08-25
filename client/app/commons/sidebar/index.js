import angular from 'angular';

import SidebarComponent from './sidebar.component';
import SideBarContent from './sidebar-content.service';

/* sub components */
import SidebarMenuToggleComponent from './toggle/toggle-menu.component';
import sidebarLink from './link/sidebar-link.directive';

const sidebar = angular
  .module('genesis.commons.sidebar', [])
  .component('sidebar', SidebarComponent)
  .component('sidebarToggleMenu', SidebarMenuToggleComponent)
  .directive('sidebarLink', sidebarLink)
  .service('SideBarContent', SideBarContent)
  .name;

export default sidebar;