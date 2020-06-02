XO.run(function($rootScope){
    $rootScope.prviPut=false
    $rootScope.singleplayer=false
    $rootScope.multiplayer=false
})

XO.controller("resetRT",function(){
    $rootScope.singleplayer=false
    $rootScope.multiplayer=false
})

XO.controller("loadingIOtvoriMenu",function($scope,$timeout,$rootScope){
    //dok se ne sredi sve
    $scope.iskljuciPrivremeno=true

    $scope.SP=function(){
        $rootScope.singleplayer=true
    }

    $scope.MP=function(){
        $rootScope.multiplayer=true
    }
    
    if($rootScope.prviPut==false){
        $rootScope.prviPut=true
        $timeout(function(){
            $scope.stopAnimation={"filter":"opacity(0)"}
            $timeout(function(){
                $scope.stopAnimation={"display":"none"}
            },1000)
        },4500)

        $timeout(function(){
            $scope.gornjiMenu={"position":"relative","height":"fit-content"}
            $scope.donjiMenu={"position":"relative"}
        },6500)
    }
    else{
        $scope.stopAnimation={"display":"none"}
        $scope.gornjiMenu={"position":"relative","height":"fit-content"}
        $scope.donjiMenu={"position":"relative"}
    }
})