export default class SidebarMenuToggleController {

  constructor() {}

  $onInit() {
    this.isLoaded = true;
    console.log('sidebar menu controller chargé !');
  }

  toggle(){
    this.section.isOpen = !this.section.isOpen;
    if(this.section.isOpen){
      this.parent.content.focusSection(this.section.id);
    }
  }
}

SidebarMenuToggleController.$inject = [];