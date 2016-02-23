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

    					localStorage.userCreatedAt = result.data.user.created_at;
    					localStorage.userEmail = result.data.user.email;
    					localStorage.userId = result.data.user.id;
    					localStorage.userName = result.data.user.name;
    					localStorage.userUpdatedAt = result.data.user.updated_at;

    					$rootScope.user = {
    						createdAt : localStorage.userCreatedAt,
    						email : localStorage.userEmail,
    						id : localStorage.userId,
    						name : localStorage.userName,
    						updatedAt : localStorage.userUpdatedAt
    					};
    				})
    			;

				$state.go('movies');
			})
			.catch(function(response) {
				vm.loginError = true;
			});
    }

  }
})();
