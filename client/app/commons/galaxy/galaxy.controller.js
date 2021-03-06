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
    console.log('Galaxy controller chargé !');
  }
}
GalaxyController.$inject = ['User', 'galaxyService', 'galaxyContent'];