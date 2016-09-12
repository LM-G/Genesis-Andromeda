"use strict";
export default function errorRun($rootScope){
  $rootScope.$on('$stateNotFound', handleStateChangeStart);

  function handleStateChangeStart(event, transition){
    console.log('pas cool :\'\( ');

  }
}
errorRun.$inject = ['$rootScope'];