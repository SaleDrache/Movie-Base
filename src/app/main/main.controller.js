(function() {
  'use strict';

  angular
    .module('movieBase.main')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(MovieService, $rootScope) {
    var vm = this;

    vm.editMovie = editMovie;
    vm.deleteMovie = deleteMovie;
    vm.fromStringToDate = fromStringToDate;
    vm.isLoading = false;
    vm.editingModal = false;
    vm.deletingModal = false;
    vm.movies = [];
    vm.movieSortType = 'id';
    vm.movieSortReverse = false;
    vm.openDeleteMovieModal = openDeleteMovieModal;
    vm.openEditMovieModal = openEditMovieModal;
    vm.sortMovie = sortMovie;
    vm.userLoggedIn = $rootScope.userLoggedIn;
    
    
    activate();

    function activate() {
      getMovies();
    }

    function deleteMovie() {
      $('#movieModal').modal('hide');
      MovieService.deleteMovie(vm.deletingMovie.id)
        .then( function(result) {
          getMovies();
        });
    }

    function editMovie() {
      $('#movieModal').modal('hide');
      MovieService.editMovie(vm.editingMovie)
        .then( function(result) {
          getMovies();
        });
    
    }

    function fromStringToDate (stringDate) {
      var newDate = new Date(stringDate);
      return newDate;
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

    function openDeleteMovieModal (movie) {
      vm.editingModal = false;
      vm.deletingModal = true;
      vm.deletingMovie = angular.copy(movie);
      $("#movieModal").modal();

      
    }

    function openEditMovieModal (movie) {
      vm.deletingModal = false;
      vm.editingModal = true;
      vm.editingMovie = angular.copy(movie);      
      $("#movieModal").modal();
      
    }

    function sortMovie(sortType, reverse) {
      vm.movieSortType = sortType;
      vm.movieSortReverse = reverse;
    }

  }
})();
