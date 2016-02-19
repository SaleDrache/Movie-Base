(function() {
  'use strict';

  angular
    .module('movieBase.main')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(MovieService) {
    var vm = this;

    vm.getMovies = getMovies;
    getMovies();

    function getMovies () {
      MovieService.getMovies()
        .then(function(result){
          console.log(result.data)
        });
    }


  }
})();
