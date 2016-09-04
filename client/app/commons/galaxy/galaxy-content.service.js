export default class GalaxyContent{
  constructor(){
    this.systems = [];
  }

  setSystems(systems){
    this.systems = systems;
  }

  getSystems(){
    return this.systems;
  }
}

GalaxyContent.$inject = [];