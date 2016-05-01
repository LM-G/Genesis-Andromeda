angular
  .module('genesis.services.utils')
  .directive('formValidate', function() {
    return {
      require: '^form',
      link: link,
    }
  });

function link($scope, $element, $attrs, formCtrl) {
  var inputName = $element.find('input')[0].name;
  var input = formCtrl[inputName];

  console.log('directive : ', input, helpBlock);
}