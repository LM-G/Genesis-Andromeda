/**
 * Form control.
 */
const FormValidate = ($timeout) => ({
  require: '^form',
  link: ($scope, $element, $attrs, formCtrl) => {
    var validateOnSubmit = $attrs.formValidate == 'on-submit';
    // nom de l'input
    var inputName = $element.find('input')[0].name;
    // model de l'input ( au sens element du controller du formulaire)
    var inputModel = formCtrl[inputName];
    // element angular attaché
    var inputElement = angular.element($element[0].querySelector('[name="' + inputName + '"]'));
    // block des messages de warning
    var helpBlock = angular.element($element[0].querySelector('.help-block'));
    // listener sur le blur de l'input du form-group
    inputElement.bind('blur', (evt) => {
      console.debug('form-validate event : ', evt);
      var cond = inputModel.$invalid && inputModel.$dirty && (validateOnSubmit ? inputModel.$submitted : true);
      toggleError(cond);
    });

    // listener sur la validité du model du champ
    $scope.$watch(() => {
      return inputModel.$invalid;
    }, (invalid) => {
      var cond = invalid && inputModel.$dirty && (validateOnSubmit ? inputModel.$submitted : true);
      // il faut en plus que l'utilisateur est interagit avec le champ
      toggleError(cond);
    });

    // listener sur l'event d'envoi du formaulaire
    var deregisterSubmitListener = $scope.$watch(() => {
      return formCtrl.$submitted;
    }, (submitted) => {
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
      if(helpBlock){
        helpBlock.toggleClass('ng-hide', !invalid);
      }
    }
  }
});

FormValidate.$inject = ['$timeout'];

export default FormValidate;




