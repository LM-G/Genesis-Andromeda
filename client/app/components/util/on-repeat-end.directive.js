export default function onRepeatEnd($timeout) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      if (scope.$last === true) {
        $timeout(() => {
          scope.$eval(attrs.onRepeatEnd);
        });
      }
    }
  };
}
onRepeatEnd.$inject = ['$timeout'];
