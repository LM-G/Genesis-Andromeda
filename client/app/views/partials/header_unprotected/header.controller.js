angular
  .module('genesis.views.partials')
  .controller('headerCtrl', [
    '$state',
    headerCtrl
  ]);

function headerCtrl($state) {
  console.log('controller header');
  var vm = this;

  vm.isActive = function(state) {
    return $state.includes(state);
  };
}
