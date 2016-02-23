(function() {
  'use strict';

  angular
    .module('movieBase')
    .run(runAuthentication);

  /** @ngInject */

  function runAuthentication($rootScope, $state) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {

      if ($rootScope.user === 'undefined') {
        $rootScope.userLoggedIn = false;
      }

      if (toState.name === 'login' && typeof $rootScope.user !== 'undefined') {
        event.preventDefault();
        $state.go('movies');
      }

    });

  }
  

})();
