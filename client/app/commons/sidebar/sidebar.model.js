class SideBarSection{
  constructor (name, state, icon, type = 'link'){
    this.name = name;
    this.type = type;
    this.state = state;
    this.icon = icon;
    /* todo : utilisation de constante a la place de valeur en dur */
    if(this.type == 'toggle'){
      this.pages = [];
    }
  }

  addPage(section){
    if(this.type == 'toggle' && this.pages) {
      section.id = this.id;
      this.pages.push(section);
    }
  }
}

export default SideBarSection;