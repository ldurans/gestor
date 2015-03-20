'use strict';

angular.module('gestorApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/pj', {
        templateUrl: 'app/pj/pj.html',
        controller: 'PjCtrl'
      });
  });
