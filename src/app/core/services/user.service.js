(function() {
  'use strict';

  angular
    .module('movieBase')
    .service('UserService', UserService);

    /** @ngInject */
    function UserService($http, $rootScope, config) { 
      var vm = this;
      vm.getUser = getUser;
      /*vm.invalidateUserToken = invalidateUserToken;*/

	    function getUser() {
  	    return $http.get(config.api.concat('/authenticate/user?token=') + $rootScope.token );
	    }

      /*function invalidateUserToken() {
        return $http.get(config.api.concat('/authenticate/logout'));
      }*/

	
    }
    

})();
