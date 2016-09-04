import SideBarSection from './sidebar.model';
import _find from 'lodash/find';

const sections = [
  {
    name : 'views.dashboard.title',
    state : 'dashboard',
    icon : 'fa fa-tachometer',
    type : 'link'
  },{
    name : 'views.chat.title',
    state : 'chat',
    icon : 'fa fa-comments',
    type : 'link'
  },{
    name : 'views.resource.title',
    state : 'resource',
    icon : 'fa fa-area-chart',
    type : 'link'
  },
  {
    name : 'views.galaxy.title',
    state : 'galaxy',
    icon : 'fa fa-globe',
    type : 'link',
  },
  {
    name : 'admin',
    type : 'toggle',
    auth : 'admin'
  },{
    name : 'views.game.title',
    state : 'game',
    icon : 'fa fa-gamepad',
    type : 'link',
    parent : 'admin'
  }
];

export default class SideBarContent{
  constructor(){
    this.sections = [];
    this.init();
  }

  /* focus a precise, section and collapse others */
  focusSection(id, liste){
    for(let section of (liste ||this.sections)) {
      if(section.type == 'toggle') {section.isOpen = false;}
    }
    let section = _find(this.sections, function(s){
      return s.id == id;
    });
    if(section.parent){
      var parent = _find(this.sections, function(s){
        return s.name == section.parent;
      });
      parent.isOpen = true;
    } else {
      section.isOpen = true;
    }
  }

  init(){
    for(var i = 0; i < sections.length; i++){
      var item = sections[i];
      var section = new SideBarSection(item.name, item.state, item.icon, item.type);
      section.auth = item.auth;
      section.id = i;
      if(item.parent){
        var parent = _find(this.sections, function(s){
          return s.name == item.parent;
        });
        section.auth = parent.auth;
        parent.addPage(section);
      } else {
        this.sections.push(section);
      }
    }
  }
}

SideBarContent.$inject = [];