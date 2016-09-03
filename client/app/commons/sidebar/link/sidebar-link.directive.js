const sidebarLink = (SideBarContent) => ({
    restrict: 'E',
    scope: {
      section : '<'
    },
    link: (scope, element, attrs) => {
      scope.focusSection = function(id){
        SideBarContent.focusSection(id);
      }
    },
    templateUrl: '/commons/sidebar/link/sidebar-link.html'
  });

sidebarLink.$inject = ['SideBarContent'];

export default sidebarLink;