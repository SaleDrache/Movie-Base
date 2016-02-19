(function() {
  'use strict';

  angular
    .module('movieBase.main')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(MovieService) {
    var vm = this;

    vm.movies = [];
    
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


  }
})();
