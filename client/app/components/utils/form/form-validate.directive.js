/**
 * Directive de validation de formulaire
 */
angular
  .module('genesis.services.utils')
  .directive('formValidate', function() {
    return {
      require: '^form',
      link: link,
    }
  });

function link($scope, $element, $attrs, formCtrl) {
  // nom de l'input
  var inputName = $element.find('input')[0].name;
  // model de l'input ( au sens element du controller du formulaire)
  var inputModel = formCtrl[inputName];
  // element angular attaché
  var inputElement = angular.element($element[0].querySelector('[name="' + inputName + '"]'));
  // block des messages de warning
  var helpBlock = angular.element($element[0].querySelector('.help-block'));

  // listener sur le blur de l'input du form-group
  inputElement.bind('blur', function(evt) {
    toggleError(inputModel.$invalid && inputModel.$dirty);
  });

  // listener sur la validité du model du champ
  $scope.$watch(function() {
    return inputModel.$invalid;
  }, function(invalid) {
    // il faut en plus que l'utilisateur est interagit avec le champ
    toggleError(invalid && inputModel.$dirty);
  });

  // listener sur l'event d'envoi du formaulaire
  var deregisterSubmitListener = $scope.$watch(function() {
    return formCtrl.$submitted;
  }, function(submitted) {
    if (submitted) {
      toggleError(inputModel.$invalid);
      deregisterSubmitListener();
    }
  });

  /**
   * Si le champ du formulaire de la directive est en erreur, alors la classe has-error est ajouté
   * sur l'input et le block des warning est affiché.
   * @param  {boolean} invalid si il faut ou non activer le mode "erreur"
   * @return {undefined}
   */
  function toggleError(invalid) {
    $element.toggleClass('has-error', invalid);
    helpBlock.toggleClass('ng-hide', !invalid);
  }
}