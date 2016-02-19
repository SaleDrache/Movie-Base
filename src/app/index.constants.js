/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('movieBase')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('config', {
    	api: 'https://api-testingnet.rhcloud.com/api'
    });

})();
