/**
 * Controls the game view
 */
export default class GalaxyController {
  constructor(User, galaxyService, galaxyContent) {
    this.User = User;
    this.galaxyService = galaxyService;
    this.galaxyContent = galaxyContent;

    this.getSystems = () => {
      return galaxyContent.getSystems();
    }
  }

  $onInit() {
    this
      .galaxyService
      .getSystems()
      .then((res) => {
        this.galaxyContent.setSystems(res);
      })
      .finally(() => {
        this.isLoaded = true;
      });

    console.log('Galaxy controller chargé !');
  }
}
GalaxyController.$inject = ['User', 'galaxyService', 'galaxyContent'];