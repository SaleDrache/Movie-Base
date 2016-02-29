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
    vm.isError = $rootScope.isError;
    vm.errorMessage = $rootScope.errorMessage;

    function logIn (user) {
    	vm.loginError = false;
      removeErrorMsg();

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

    function removeErrorMsg() {
      localStorage.isError = false;
      localStorage.errorMessage = '';

      $rootScope.isError = JSON.parse(localStorage.isError);
      $rootScope.errorMessage = localStorage.errorMessage;

      vm.isError = $rootScope.isError;
      vm.errorMessage = $rootScope.errorMessage;
    }

  }
})();
