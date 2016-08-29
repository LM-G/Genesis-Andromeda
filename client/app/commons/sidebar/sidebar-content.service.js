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
  let section2 = new SideBarSection('views.chat.title', 'chat', 'fa fa-comments', 'link');
  let section3 = new SideBarSection('ADMIN', null, null, 'toggle');
  section3.addPage(new SideBarSection('views.game.title', 'game', 'fa fa-gamepad', 'link'));
  section3.addPage(new SideBarSection('views.map.title', 'map', 'fa fa-globe', 'link'));

  section1.id = 0;
  section2.id = 1;
  section3.id = 2;
  section3.auth = 'admin';

  sections.push(section1);
  sections.push(section2);
  sections.push(section3);
}