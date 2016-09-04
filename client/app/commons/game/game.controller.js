/**
 * Controls the game view
 */
export default class GameController {
  constructor($mdToast, User, galaxyService) {
    this.$mdToast = $mdToast;
    this.User = User;
    this.galaxyService = galaxyService;
    this.system = {};
  }

  $onInit() {
    this.isLoaded = true;
    console.log('Game controller chargé !');
  }

  createSystem(){
    const $mdToast = this.$mdToast;
    this
      .galaxyService
      .generate({
        type : 'system',
        data : this.system
      })
      .then(() => {
        $mdToast.show(
          $mdToast.simple()
            .textContent('Système ajouté')
            .position('top right')
            .hideDelay(3000)
        );
      });


  }
}
GameController.$inject = ['$mdToast', 'User', 'galaxyService'];