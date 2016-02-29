(function() {
  'use strict';

  angular
    .module('movieBase.movieCard')
    .directive('movieCard', movieCard);

  /** @ngInject */
  function movieCard() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/movieCard/movieCard.html',
      controller: 'MovieCardController',
      controllerAs: 'movieCard'
    };

    return directive;
  }

})();
