import angular from 'angular';
import HomeComponent from './home.component';

const home = angular
  .module('genesis.commons.home', [])
  .component('home', HomeComponent)
  .config(HomeRouter)
  .name;

export default home;

HomeRouter.$inject = ['$stateProvider'];
function HomeRouter($stateProvider) {
  $stateProvider.state({
      name: 'home',
      url: '/home',
      template: `<home></home>`
    });
}
