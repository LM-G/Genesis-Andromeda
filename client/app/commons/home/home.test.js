'use strict';

import {assert} from 'chai';

import HomeController from './home.controller';
import HomeComponent from './home.component';

describe('Home', () => {

  describe('controller', () => {
    // controller specs
    it('should have a User property', () => {
      let controller = new HomeController();
      expect(controller).to.have.property('User');
    });
  });

  describe('component', () => {
    // component/directive specs
    let component = HomeComponent;

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(HomeController);
    });
  });

});
