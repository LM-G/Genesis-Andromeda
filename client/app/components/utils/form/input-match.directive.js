/**
 * Directive de validation de formulaire
 */
angular
  .module('genesis.services.utils')
  .directive('inputMatch', function() {
    return {
      require: ['^form', 'ngModel'],
      link: link,
    }
  });

function link($scope, $element, $attrs, controllers) {
  var formCtrl = controllers[0];
  var ngModel = controllers[1];
  debugger;
}