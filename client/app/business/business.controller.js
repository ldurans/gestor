'use strict';

angular.module('gestorApp')
  .controller('BusinessCtrl', function ($scope,$http) {
    $scope.businesses = [];

    /*$scope.filter = '';
    $scope.message = {texto:''};


    function showBusiness(){
      Business.query(
        function(businesses){
          $scope.businesses = businesses;
          $scope.message = {};
        },
        function(err){
          console.log(err);
          $scope.message = {texto:'Não foi possivel localizar empresas'};
        }
      );
    }
    showBusiness();

    $scope.remove = function(business){
      Business.delete({id:business._id},
        showBusiness,
        function(erro){
          $scope.message = {texto:'Não foi possivel remover empresa'};
          console.log(erro);
        }
      );
    }
  */

   // $http.get('/api/business').success(function(businesses){
    //  $scope.businesses = businesses;
    //});
    $http.get('/api/businesss').success(function(businesses) {
      $scope.businesses = businesses;
      //console.log(businesses);
    });


  });
