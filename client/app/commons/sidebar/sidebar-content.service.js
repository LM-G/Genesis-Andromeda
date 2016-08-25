import SideBarSection from './sidebar.model';

export default class SideBarContent{
  constructor(){
    this.sections = [];
    init(this.sections);
  }

  /* focus a precise, section and collapse others */
  focusSection(id, liste){
    for(let section of (liste || this.sections) ) {

      section.isOpen = section.id == id && section.type === 'toggle';

      /* todo : lodash isArray*/
      if(section.pages){
        this.focusSection(id, section.pages);
      }
    }
  }
}

SideBarContent.$inject = [];

function init(sections){
  let section1 = new SideBarSection('views.dashboard.title', 'dashboard', 'fa fa-tachometer', 'link');
  section1.id = 0;
  sections.push(section1);

  let section2 = new SideBarSection('ADMIN', null, null, 'toggle');
  section2.id = 1;
  section2.auth = 'admin';

  section2.addPage(new SideBarSection('views.game.title', 'game', 'fa fa-gamepad', 'link'));
  section2.addPage(new SideBarSection('views.map.title', 'map', 'fa fa-globe', 'link'));

  sections.push(section2);
}