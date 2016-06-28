import HeaderController from './header.controller';

const HeaderComponent = {
  controller: HeaderController,
  template: `
        <header-public ng-if="$ctrl.isHome()"></header-public>
        <div ng-if="!$ctrl.isHome() && $ctrl.User.isLogged">
            <header-protected ></header-protected>
            <sidebar></sidebar>
        </div>
        
  `
};

export default HeaderComponent;