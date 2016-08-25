function ShowAuthed(User, accessLevelCst) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      scope.User = User;

      scope.$watch('User.isLogged', function(val) {
        // If user detected
        if (val) {
          // if he requires a higher access level
          if (attrs.gShowAuthed == 'admin') {
            if(User.getRoleAccess() >= accessLevelCst.admin){
              element.css({ display: 'inherit'});
            } else {
              element.css({ display: 'none'});
            }
          } else {
            element.css({ display: 'inherit'});
          }

          // no user detected
        } else {
          element.css({ display: 'none'});
        }
      });
    }
  };
}

ShowAuthed.$inject = ['User', 'accessLevelCst'];

export default ShowAuthed;