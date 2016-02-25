(function() {
  'use strict';

  angular
    .module('movieBase')
    .service('MovieService', MovieService);

    /** @ngInject */
    function MovieService($http, $rootScope, config) { 
      var vm = this;
      vm.deleteMovie = deleteMovie;
      vm.editMovie = editMovie;
      vm.getMovies = getMovies;


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
	
    }
    

})();
