/**
 * Controls the game view
 */
export default class GalaxyController {
  constructor(User, galaxyService) {
    this.User = User;
    this.galaxyService = galaxyService;
  }

  $onInit() {
    this.isLoaded = true;
    console.log('Galaxy controller chargé !');
  }

  testAPI(){
    console.log('test api ...');
    this.galaxyService
      .generate()
      .then((res) => {
        console.log('test api :', res);
      });
  }
}
GalaxyController.$inject = ['User', 'galaxyService'];