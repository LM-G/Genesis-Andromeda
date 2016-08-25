import angular from 'angular';
/* librairies Angularjs */
import uiRouter from 'angular-ui-router';
import materialDesign from 'angular-material';
import ngAnimate from 'angular-animate';
import ngMessages from 'angular-messages';
/* config*/
import {appConfig} from './app.config';
import {appRun} from './app.config';
/* fonctionnalités de l'application */
import appComponent from './app.component';
import components from './components';
import commons from './commons';

/* dépendances nécessaires au bootstrap de l'application */
const requires = [
  /* gestion des routes et des états */
  uiRouter,
  /* interface graphique material design */
  materialDesign,
  /* animations */
  ngAnimate,
  /* *validation de form */
  ngMessages,
  /* configuration globale de l'application générée par gulp-ng-config */
  'genesis.config',
  /* nom du module des templates en cache angular générés par gulp-angular-templatecache*/
  'genesis.templates',
  /* composants réutilisables */
  components,
  /* composants spécifiques de l'application */
  commons
];

/**
 * @ngdoc overview
 * @name genesis
 *
 * @description
 * Main module, entry point
 */
const root = angular
  .module('genesis', requires)
  .component('app', appComponent)
  .config(appConfig)
  .run(appRun)
  .name;

export default root;