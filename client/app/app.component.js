const AppComponent = {
  template: `
    <div layout="column" id="wrapper">
      <header></header>
      <div layout="row" id="content">
        <sidebar flex="15" layout="row" layout-fill></sidebar>
        <md-content flex>
          <div ui-view></div>
        </md-content>
      </div>
    </div>
  `
};

export default AppComponent;