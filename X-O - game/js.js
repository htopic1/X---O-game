var XO=angular.module('iksOks',['ngRoute'])

XO.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl : "main/main.html"
    })
    .when("/multiplayer", {
        templateUrl : "2player/2player.html"
    })
    .when("/igrica",{
        templateUrl : "igrica/igrica.html"
    })
})

