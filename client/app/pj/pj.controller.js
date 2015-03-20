'use strict';

angular.module('gestorApp')
  .controller('PjCtrl', function ($scope,$http) {
    //$scope.message = 'Hello';
    $scope.empresas = [];

    $http.get('/api/empresas').success(function(empresas) {
      $scope.empresas = empresas;
    });


  });
