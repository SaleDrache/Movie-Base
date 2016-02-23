(function() {
  'use strict';

  angular
    .module('movieBase')
    .service('MovieService', MovieService);

    /** @ngInject */
    function MovieService($http, $rootScope, config) { 
      var vm = this;
      vm.getMovies = getMovies;

	    function getMovies() {
  	    return $http.get(config.api.concat('/movies'));
	    }

	
    }
    

})();
