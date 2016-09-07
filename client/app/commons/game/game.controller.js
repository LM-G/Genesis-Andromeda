/**
 * Controls the game view
 */
export default class GameController {
  constructor($animate, $mdToast, User, galaxyService, galaxyContent) {
    this.$animate = $animate;
    this.$mdToast = $mdToast;
    this.User = User;
    this.galaxyService = galaxyService;
    this.galaxyContent = galaxyContent;
    this.system = {};
    this.planet = {};

    this.getSystems = () => {
      return galaxyContent.getSystems();
    }
  }

  $onInit() {
    this.$animate.enabled(false);
    this
      .galaxyService
      .getSystems()
      .then((res) => {
        this.galaxyContent.setSystems(res);
      })
      .finally(() => {
        this.isLoaded = true;
      });
    console.log('Game controller chargé !');
  }

  create(form, type, name){
    this
      .galaxyService
      .generate({
        type : type,
        data : this.system
      })
      .then(() => {
        this.system = {};
        form.$setUntouched();
        form.$setPristine();
        this.hasError = false;
        this.displayToast(name);
      })
      .catch((err) => {
        if(err && err.data.code){
          if(err.data.code == '11000') {
            this.hasError = true;
            this.descriptionError = 'Une ' + name + ' existe déjà sur ces coordonnées';
          }
        }
      });
  }

  createSystem(form){
    if (!form.$valid){
      return;
    }
    this.create(form, 'system', 'Système');

  }

  createPlanet(form){
    if (!form.$valid){
      return;
    }
    this.create(form, 'planet', 'Planète');
  }

  displayToast(param){
    const $mdToast = this.$mdToast;
    $mdToast.show(
      $mdToast.simple()
        .textContent(param + ' ajouté')
        .position('bottom right')
        .hideDelay(3000)
    );
  }
}
GameController.$inject = ['$animate', '$mdToast', 'User', 'galaxyService', 'galaxyContent'];