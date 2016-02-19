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
    vm.isLoading = false;
    
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

  }
})();
