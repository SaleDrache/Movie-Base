(function() {
  'use strict';

  angular
    .module('movieBase.main')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(MovieService) {
    var vm = this;

    vm.movies = [];
    vm.fromStringToDate = fromStringToDate;
    
    activate();

    function activate() {
      getMovies();
    }

    function getMovies() {
      MovieService.getMovies()
        .then(function(result){
          vm.movies = result.data
        });
    }

    function fromStringToDate (stringDate) {
      var newDate = new Date(stringDate);
      return newDate;
    }

  }
})();
