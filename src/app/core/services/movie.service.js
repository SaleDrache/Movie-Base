(function() {
  'use strict';

  angular
    .module('movieBase')
    .service('MovieService', MovieService);

    /** @ngInject */
    function MovieService($http, $rootScope, config, $mdDialog) { 
      var vm = this;
      vm.deleteMovie = deleteMovie;
      vm.editMovie = editMovie;
      vm.editingMovie = '';
      vm.getMovies = getMovies;
      vm.verifyDelete = verifyDelete;
      vm.verifyEdit = verifyEdit;


	    function getMovies() {
  	    return $http.get(config.api.concat('/movies'));
	    }

      function editMovie(movieData) {

        var id = movieData.id;
        var data = {
          title: movieData.title,
          director: movieData.director,
          actors: movieData.actors,
          year: movieData.year
        }

        return $http.post(config.api.concat('/movie/edit/') + id, data );
      }

      function deleteMovie(movieId) {
        return $http.get(config.api.concat('/movie/delete/') + movieId );
      }

      function verifyDelete(movie) {
        var confirm = $mdDialog.confirm()
          .title('Confirm Your Choice')
          .content('Are you sure you want to delete ' + movie.title + ' ?')
          .ariaLabel('Delete Movie')
          .ok('Delete Movie')
          .cancel('Cancel');
        return $mdDialog.show(confirm);
      }

      function verifyEdit() {
        var custom = {
          controller: 'EditMovieController',
          controllerAs: 'edit',
          templateUrl: 'app/components/editMovieModal/editMovie.html',
          parent: angular.element(document.body),
          clickOutsideToClose:true,
        }
        return $mdDialog.show(custom);
      }
	
    }
    

})();
