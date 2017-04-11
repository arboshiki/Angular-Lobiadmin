(function () {
  'use strict';

  angular
    .module('angularLobiadmin', [
      'ngAnimate',
      'ngCookies',
      'ngTouch',
      'ngSanitize',
      'ngMessages',
      'ngAria',
      'ngResource',
      'ui.router',
      'ui.bootstrap',
      'toastr',

      'app.core',

      'app.pages',

      'app.dashboard'
    ]);

})();