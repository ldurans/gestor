'use strict';

angular.module('gestorApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/business', {
        templateUrl: 'app/business/business.html',
        controller: 'BusinessCtrl'
      });
  });
