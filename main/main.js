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
        
        $timeout(_=>{
            $scope.otkrijSlovo1={"visibility":"visible"}
            $timeout(_=>{
                $scope.otkrijSlovo2={"visibility":"visible"}
                $timeout(_=>{
                    $scope.otkrijSlovo3={"visibility":"visible"}
                    $timeout(_=>{
                        $scope.otkrijSlovo4={"visibility":"visible"}
                        $timeout(_=>{
                            $scope.otkrijSlovo5={"visibility":"visible"}
                            $timeout(_=>{
                                $scope.otkrijSlovo6={"visibility":"visible"}
                                $timeout(_=>{
                                    $scope.stopAnimation={"filter":"opacity(0)"}
                                    $scope.otkrijSlovo7={"visibility":"visible"}
                                    $scope.loadingBar={"left":"0%"}
                                    $timeout(_=>{
                                        $scope.stopAnimation={"display":"none"}
                                        $timeout(_=>{
                                            $scope.gornjiMenu={"position":"relative","height":"fit-content"}
                                            $scope.donjiMenu={"position":"relative"}
                                        },1000)
                                    },1000)
                                },500)
                            },500)
                        },500)
                    },500)
                },500)
            },500)
        },500)

        
    }
    else{
        $scope.stopAnimation={"display":"none"}
        $scope.gornjiMenu={"position":"relative","height":"fit-content"}
        $scope.donjiMenu={"position":"relative"}
    }
})