(function() {
  'use strict';

  angular
    .module('movieBase')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope) {

    $log.debug('runBlock end');
    if (localStorage.user) {
      $rootScope.user = JSON.parse(localStorage.user);
    } else {
      $rootScope.user = '';
    }
    $rootScope.userLoggedIn = !_.isEmpty($rootScope.user);
  }

})();
