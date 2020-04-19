var XO=angular.module('iksOks',['ngRoute'])
XO.config(function($routeProvider){
    $routeProvider
    .when("/multiplayer", {
        templateUrl : "2player/2player.html"
    });
})

XO.controller('sakrijMenu',function($scope){
    $scope.sakrij=function()
    {
        console.log("haris");
        $scope.stilMenu={"display":"none"}
    }
})
