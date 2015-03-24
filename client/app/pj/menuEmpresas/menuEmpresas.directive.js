'use strict';

angular.module('gestorApp')
  .directive('menuEmpresas', function () {
    return {
      templateUrl: 'app/pj/menuEmpresas/menuEmpresas.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
      }
    };
  });
