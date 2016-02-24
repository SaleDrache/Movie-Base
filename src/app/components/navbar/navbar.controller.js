(function() {
  'use strict';

  angular
    .module('movieBase.navbar')
    .controller('NavbarController', NavbarController);

  /** @ngInject */
  function NavbarController($rootScope, $auth, $state, UserService) {
    var vm = this;

    vm.logIn = logIn;
    vm.logOut = logOut;
    vm.userLoggedIn = $rootScope.userLoggedIn;
    vm.username = getUsername ();

    
    function logIn() {
        $state.go('login');
    }

    function logOut() {

        /*UserService.invalidateUserToken();*/

        $auth.logout();

        localStorage.removeItem('user');
        $rootScope.userLoggedIn = false;
        vm.userLoggedIn = $rootScope.userLoggedIn;
        $state.go('login');
    }
    
    function getUsername() {
        if ($rootScope.user) {
            return $rootScope.user.name;
        } else {
            return '';
        }
    }

  }
})();
