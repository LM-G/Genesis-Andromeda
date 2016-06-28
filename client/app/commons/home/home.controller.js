export default class HomeController{
  constructor($state,loginModalService, User) {
    this.$state = $state;
    this.loginModalService = loginModalService;
    this.User = User;
  }
  $onInit() {
    this.isLoaded = true;
    console.log('Home controller chargé !');
  }
  login(){
    this.loginModalService.open();
  }
}
HomeController.$inject = ['$state','loginModalService', 'User'];