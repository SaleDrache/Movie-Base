(function() {
  'use strict';

  angular
    .module('movieBase.main')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(MovieService, $rootScope) {
    var vm = this;

    vm.fromStringToDate = fromStringToDate;
    vm.isLoading = false;
    vm.movies = [];
    vm.movieSortType = 'id';
    vm.movieSortReverse = false;
    vm.sortMovie = sortMovie;
    
    
    activate();

    function activate() {
      getMovies();
    }

    function getMovies() {
      vm.isLoading = true;
      MovieService.getMovies()
        .then(function(result){
          vm.movies = result.data;
        })
        .finally(function(){
          vm.isLoading = false;
        });
    }

    function fromStringToDate (stringDate) {
      var newDate = new Date(stringDate);
      return newDate;
    }

    function sortMovie(sortType, reverse) {
      vm.movieSortType = sortType;
      vm.movieSortReverse = reverse;
    }

  }
})();
