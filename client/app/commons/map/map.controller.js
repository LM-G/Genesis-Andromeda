/**
 * Controls the game view
 */
export default class MapController {
  constructor(User, mapService) {
    this.User = User;
    this.mapService = mapService;
  }

  $onInit() {
    this.isLoaded = true;
    console.log('Map controller chargé !');
  }

  testAPI(){
    console.log('test api ...');
    this.mapService
      .generate()
      .then((res) => {
        console.log('test api :', res);
      });
  }
}
MapController.$inject = ['User', 'mapService'];