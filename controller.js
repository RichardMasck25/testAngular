angular.module('app').controller('Controlador1',function($scope, DistribuidorFactory){
	
	$scope.Distribuidor = null;
        
        $scope.Descripcion = "Descripción del distribuidor";
        
	$scope.distribuidores = [
		{idDistribuidor:1,Distribuidor:"Distribuidor 1 "},
		{idDistribuidor:2,Distribuidor:"Distribuidor 2 "}
	];

	$scope.listado = [
		{id:1,descripcion:"Distribuidor 1 "},
		{id:2,descripcion:"Distribuidor 2 "}
	];

	$scope.submit=function(){
                var str = "id Distribuidor : " + $scope.Distribuidor;
                str = "Descripcion : " + $scope.Descripcion;
		alert(str);
	};

        var getlistdistribuidores = function(){
            DistribuidorFactory.getlist();
        };
        getlistdistribuidores();
});