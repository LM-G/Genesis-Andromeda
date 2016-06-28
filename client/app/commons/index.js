import angular from 'angular';
import home from './home';
import header from './header';
import login from './login';
import dashboard from './dashboard';
import sidebar from './sidebar';
import register from './register';
import game from './game';

const commons = angular
  .module('genesis.commons', [
    header,
    home,
    login,
    dashboard,
    sidebar,
    register,
    game
  ])
  .name;

export default commons;