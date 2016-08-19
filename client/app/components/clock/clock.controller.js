export default class ClockController {
  constructor(moment, $interval){
    this.moment = moment;
    this.$interval = $interval;
    this.completion = 0;
  }

  $onInit() {
    const moment = this.moment;
    let dateIRL = moment();

    /* todo : récupération des informlations de la date */
    this.dateIG = {
      start : new Date('2016-08-18T18:00:00'),
      value : new Date('0000-01-01T00:00:00'),
      factor : 365
    };

    const factor = this.dateIG.factor;
      this.$interval(() => {
        let now = new Date();
      const delta = (now.getTime() - this.dateIG.start.getTime()) * this.dateIG.factor;

      var result = this.dateIG.value.getTime() + delta;

      this.date = new Date(result);
      this.completion = (this.date.getHours() * 60 + this.date.getMinutes()) * 100 / 1440 ;
    },  100);
  }
}

ClockController.$inject = ['moment', '$interval'];

