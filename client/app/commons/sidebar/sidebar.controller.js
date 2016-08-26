import * as _ from 'lodash';

/**
 * Controls the side bar
 */
export default class SidebarController {

  constructor($state, User, SideBarContent, $rootScope) {
    this.User = User;
    this.$state = $state;
    this.content = SideBarContent;
    this.$rootScope = $rootScope;
  }

  $onInit() {
    this.isLoaded = true;
    console.log('sidebar controller chargé !');

    this.$rootScope.$on('$stateChangeSuccess', refresh.bind(this));
  }

  isHome(){
    return this.$state.is('home');
  }
}

SidebarController.$inject = ['$state', 'User', 'SideBarContent', '$rootScope'];

function refresh(event, toState, toParams, fromState, fromParams){
  var sections = _.flatMap(this.content.sections, function(section){
    var result = [];
    result.push(section)
    /* todo : penser à l'éventualité d'avoir plus de 2 niveaux (recursion sur les pages) */
    if(section.type == 'toggle' && section.pages.length){
      for(let page of section.pages){
        result.push(page);
      }
    }
    return result;
  });

  var sectionToFocus = _.find(sections, function(section){
    if(section.state == toState.name){
      return section;
    }
  });
  if(sectionToFocus){
    this.content.focusSection(sectionToFocus.id);
  }
}
