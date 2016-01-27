angular.module('app').factory('DistribuidorFactory',function($http, $q){
    var factory = {};
    factory.getlist = function(){
        var Parametros = {};
        var config = {
            headers:{
                Autorization:"71YTL0on00i7oL3ZnxS7TLged/S9qUwk"
            }
        };
        $http.post("http://52.35.23.247/SoftvWCFService.svc/Estado/GetEstadoList", JSON.stringify(Parametros),config).
                success(function(data,status,headers,config){
                    console.log(data);
                })
                .error(function(data,status,headers,config){
                    
                });
    };
    return factory;
});
    
    


