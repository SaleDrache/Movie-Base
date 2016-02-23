(function() {
  'use strict';

  angular
    .module('movieBase.navbar')
    .directive('movieBaseNavbar', movieBaseNavbar);

  /** @ngInject */
  function movieBaseNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      controller: 'NavbarController',
      controllerAs: 'navig',
      bindToController: true
    };

    return directive;
  }

})();
