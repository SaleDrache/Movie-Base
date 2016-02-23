(function() {
  'use strict';

  angular
    .module('movieBase')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope) {

    $log.debug('runBlock end');
    $rootScope.userLoggedIn = false;
  }

})();
