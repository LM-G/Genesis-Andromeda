import angular from 'angular';
import home from './home';
import header from './header';
import login from './login';
import dashboard from './dashboard';
import sidebar from './sidebar';
import register from './register';
import game from './game';
import map from './map';
import chat from './chat';
import resource from './resource';

/**
 * @ngdoc overview
 * @name genesis.commons
 *
 * @description
 * Container reference for all application specific components.
 */
const commons = angular
  .module('genesis.commons', [
    header,
    home,
    login,
    dashboard,
    sidebar,
    register,
    game,
    map,
    chat,
    resource
  ])
  .name;

export default commons;