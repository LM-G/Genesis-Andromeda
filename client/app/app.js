import angular from 'angular';
/* librairies Angularjs */
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
/* config*/
import {appRouter} from './config/app.config';
import {appRun} from './config/app.config';
/* fonctionnalités de l'application */
import appComponent from './app.component';
import components from './components';
import commons from './commons';

/* dépendances nécessaires au bootstrap de l'application */
const requires = [
  /* gestion des routes et des états */
  uiRouter,
  /* interface graphique bootstrap en angular */
  uiBootstrap,
  /* configuration globale de l'application générée par gulp-ng-config */
  'genesis.config',
  /* nom du module des templates en cache angular générés par gulp-angular-templatecache*/
  'genesis.templates',
  /* composants réutilisables */
  components,
  /* composants spécifiques de l'application */
  commons
];

const root = angular
  .module('genesis', requires)
  .component('app', appComponent)
  .config(appRouter)
  .run(appRun)
  .name;

export default root;