export default class ClockController {
  constructor($interval, $timeout){
    this.$interval = $interval;
    this.$timeout = $timeout;
    /* taux de completion de la barre de progression de l'heure */
    this.completion = 0;
    this.gClockWidth = this.gClockWidth || 'md';

  }

  $onInit() {
    /* todo : récupération des informlations de la date */
    let dateIG = {
      start : new Date('2016-08-19T00:00:00'),
      value : new Date('0001-01-01T00:00:00'),
      factor : 365.25
    };

    const factor = dateIG.factor;

    this.timer = this.$interval(() => {
      let now = new Date();
      const delta = (now.getTime() - dateIG.start.getTime()) * dateIG.factor;

      var result = dateIG.value.getTime() + delta;

      this.date = new Date(result);
      this.completion = (this.date.getHours() * 60 + this.date.getMinutes()) * 100 / 1440 ;
    },  500);
  }
}

ClockController.$inject = ['$interval', '$timeout'];

