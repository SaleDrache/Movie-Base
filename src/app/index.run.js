(function() {
  'use strict';

  angular
    .module('movieBase')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope) {

    $log.debug('runBlock end');

    /*At the beginning, put tokin error on login page to false */
    $rootScope.isError = false;
    $rootScope.errorMessage = '';


    if (localStorage.user) {
      $rootScope.user = JSON.parse(localStorage.user);
    } else {
      $rootScope.user = '';
    }
    $rootScope.userLoggedIn = !_.isEmpty($rootScope.user);

  }

})();
