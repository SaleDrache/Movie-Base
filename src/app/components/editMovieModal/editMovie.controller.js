(function() {
  'use strict';

  angular
    .module('movieBase.editMovie')
    .controller('EditMovieController', EditMovieController);

  /** @ngInject */
  function EditMovieController(MovieService) {
    var vm = this;

    vm.editingMovie = MovieService.editingMovie;

  }
})();
