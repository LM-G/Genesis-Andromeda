import angular from 'angular';
import GalaxyListComponent from './galaxy-list.component';

const galaxyList = angular
  .module('genesis.commons.galaxy.list', [])
  .component('galaxyList', GalaxyListComponent)
  .config(Router)
  .name;

export default galaxyList;

Router.$inject = ['$stateProvider'];
function Router($stateProvider) {
  $stateProvider.state({
    name: 'galaxy.list',
    url: '/list',
    template: `<galaxy-list layout flex></galaxy-list>`,
    authLevel: 0
  });

  console.log('route galaxy-list chargée');
}

Resolver.$inject = ['$q', 'galaxyService'];
function Resolver($q, galaxyService){
  let deferred = $q.defer();
  galaxyService
    .getSystems()
    .then((res) => {
      deferred.resolve(res);
    })
    .catch((err) => {
      deferred.reject(err);
    });

  return deferred.promise;
}


