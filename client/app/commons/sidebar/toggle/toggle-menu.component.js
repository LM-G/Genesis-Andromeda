import SidebarMenuToggleController from './toggle-menu.controller';

const SidebarMenuToggleComponent = {
  require: {
    parent : '^sidebar'
  },
  bindings: {
    section: '='
  },
  controller: SidebarMenuToggleController,
  templateUrl: '/commons/sidebar/toggle/toggle-menu.html'

};

export default SidebarMenuToggleComponent;