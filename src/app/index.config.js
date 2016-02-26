(function() {
  'use strict';

  angular
    .module('movieBase')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $authProvider, config, $httpProvider ) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    // Set configuration options for Satellizer
    $authProvider.loginUrl = config.api.concat('/authenticate');
    $authProvider.authHeader = 'Authorization';
    $authProvider.authToken = 'Bearer';

    // Push the new service onto the $http interceptor array
    $httpProvider.interceptors.push('InterceptorService');
  }

})();
