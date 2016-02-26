(function() {
  'use strict';

  angular
    .module('movieBase.navbar')
    .controller('NavbarController', NavbarController);

  /** @ngInject */
  function NavbarController($rootScope, $auth, $state, UserService) {
    var vm = this;

    vm.goToMovies = goToMovies;
    vm.logIn = logIn;
    vm.logOut = logOut;
    vm.userLoggedIn = $rootScope.userLoggedIn;
    vm.username = getUsername ();

    function getUsername() {
        if ($rootScope.user) {
            return $rootScope.user.name;
        } else {
            return '';
        }
    }
    
    function goToMovies() {
        $state.go('movies');
    }

    function logIn() {
        $state.go('login');
    }

    function logOut() {

        UserService.invalidateUserToken()
            .then(function(){
                $auth.logout();

                localStorage.removeItem('user');
                $rootScope.userLoggedIn = false;
                vm.userLoggedIn = $rootScope.userLoggedIn;
            })
            .then(function(){
                $state.go('login');
            })
        ;
        
    }

  }
})();
