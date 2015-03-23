'use strict';

angular.module('gestorApp')
  .controller('PjCtrl', function ($scope,$http) {
    //$scope.message = 'Hello';
    $scope.empresas = [];

    $http.get('/api/empresas').success(function(empresas) {
      $scope.empresas = empresas;
    });

    $scope.criarEmpresa = function() {
      if($scope.newEmpresa === '') {
        return;
      }
      $http.post('/api/empresas', {
        name: $scope.newEmpresa,
        cnpj: $scope.newEmpresa,
        fantasy: $scope.newEmpresa,
        email: $scope.newEmpresa,
        phone: $scope.newEmpresa
      });
      $scope.newEmpresa = '';
    };


    /*$scope.criarPj = function($scope,$http){
      $http({
        method: 'POST',
        url: '/api/empresas',
        params:{
          _id: $scope._id || null,
          name: $scope.name,
          cnpj: $scope.cnpj,
          fantasy: $scope.fantasy,
          email: $scope.email,
          phone: $scope.phone
        }
      }).success(function(data){
        if(typeof(data) =='object'){
          $scope.limparDados();
          $scope.criarfuncaolocaliza();
        } else{
          alert('Erro ao tentar salvar Empresa');
        }
      }).erro(function(){
        alert('Erro ao tentar salvar Empresa');
      });
    };*/

    $scope.mostrarBtn = false;
    $scope.botao1 = function(){
      alert('ok');
    }


  });
