/**
 * Directive de confirmation de champ de formulaire
 */
const InputMatch = ($timeout) => ({
  require: ['^form', 'ngModel'],
  link: ($scope, $element, $attrs, $ctrl) => {
    var formCtrl = $ctrl[0];
    var ngModel = $ctrl[1];

    /* récupération de l'input surveillée */
    var inputMatched;

    try {
      inputMatched = formCtrl[$attrs.inputMatch];
      if (!angular.isObject(inputMatched)) throw "Input " + $attrs.inputMatch + " not found";

      /** L'input de l'utilsiateur est comparée avec l'input à faire matcher */
      ngModel.$validators.match = matchParser;
      /** La fonction coller est desactivée sur les champs de confirmation */
      $element.on('paste', disablePaste);
      /** Si la valeur à matcher change, mise à jour du validateur */
      $scope.$watch(function () {
        return inputMatched.$viewValue;
      }, updateParser);
    } catch (err) {
      console.warn(err);
    }

    function matchParser(modelValue, viewValue) {
      var value = modelValue || viewValue;
      return Object.is(value, inputMatched.$viewValue);
    }

    function disablePaste(event) {
      event.preventDefault();
    }

    function updateParser(value) {
      var invalid = Object.is(value, ngModel.$viewValue);
      ngModel.$setValidity('match', invalid);
    }
  }
});

InputMatch.$inject = ['$timeout'];

export default InputMatch;




