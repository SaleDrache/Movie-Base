(function() {
  'use strict';

  angular
    .module('movieBase')
    .run(runAuthentication);

  /** @ngInject */

  function runAuthentication($rootScope, $state) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {

      if ( toState.name === 'login' && $rootScope.userLoggedIn ) {
        event.preventDefault();
        $state.go('movies');
      }

    });

  }
  

})();
