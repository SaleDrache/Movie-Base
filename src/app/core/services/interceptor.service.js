(function() {
  'use strict';

  angular
    .module('movieBase')
    .service('InterceptorService', InterceptorService);

    /** @ngInject */
    function InterceptorService($q, $injector) { 
      var vm = this;
      
      vm.responseError = responseError;

      function responseError(rejection) {

        // Need to use $injector.get to bring in $state, $auth and $rootScope or else we get a circular dependency error
        var $state = $injector.get('$state');
        var $auth = $injector.get('$auth');
        var $rootScope = $injector.get('$rootScope');

        var rejectionReasons = ['token_not_provided', 'token_expired', 'token_absent', 'token_invalid', 'user_not_found'];

        angular.forEach(rejectionReasons, function(value, key) {

            if(rejection.data.error === value) {

                $auth.logout();

                localStorage.removeItem('user');
                $rootScope.userLoggedIn = false;

                $state.go('login');
            }
        });

        return $q.reject(rejection);

      }
	
    }
    

})();
