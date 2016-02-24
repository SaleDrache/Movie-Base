(function() {
  'use strict';

  angular
    .module('movieBase.login')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($auth, $state, UserService, $rootScope) {
    var vm = this;

    vm.loginError = false;
    vm.logIn = logIn;

    function logIn (user) {
    	vm.loginError = false;

    	$auth.login(user)
    		.then(function(response) {

    			$rootScope.token = localStorage.satellizer_token;

    			UserService.getUser()    			
    				.then(function(result){
              localStorage.user = JSON.stringify(result.data.user);
              $rootScope.user = JSON.parse(localStorage.user);
              $rootScope.userLoggedIn = true;
    				})
            .then(function(result){
              $state.go('movies');
            })
    			;
			})
			.catch(function(response) {
				vm.loginError = true;
			});
    }

  }
})();
