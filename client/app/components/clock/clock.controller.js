export default class ClockController {
  constructor(moment){
    this.moment = moment;
  }

  $onInit() {
    let date = moment();
    console.log('clock controller lancé');
    console.log(date);
  }

}

ClockController.$inject = ['moment'];

