import ClockController from './clock.controller';

const HomeComponent = {
  controller: ClockController,
  templateUrl: '/components/clock/clock.html',
  bindings: {
    gClockWidth: '@'
  }
};

export default HomeComponent;