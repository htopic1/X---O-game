var XO=angular.module('iksOks',['ngRoute'])

XO.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl : "main/main.html"
    })
    .when("/singleplayer",{
        templateUrl : "1player/1player.html"
    })
    .when("/multiplayer", {
        templateUrl : "2player/2player.html"
    })
    .when("/igrica",{
        templateUrl : "igrica/igrica.html"
    })
})

