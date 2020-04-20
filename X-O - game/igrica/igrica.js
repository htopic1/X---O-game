//var XO = angular.module('iksoks',[])

XO.run(function($rootScope){
    //prva igra,prva pravila
    $rootScope.prviIgrac='X'
    ////////////////////////
    $rootScope.brojacX=0
    $rootScope.brojacO=0
    $rootScope.XiliO='X'
    $rootScope.oznacenaPolja=[false,false,false,false,false,false,false,false,false]
    $rootScope.oznacenaPoljaSaXiliO=["","","","","","","","",""]
    $rootScope.kombinacije=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
})

.controller("kontrolerXiliO",function($scope,$rootScope,$timeout,$compile){

    $scope.staviXiliO=function(broj){
        var daIliNe=postaviXiliOuTabelu(broj)
        if(daIliNe==false)
        {
            var pobjeda=provjeraPobjeda()
            if(pobjeda==false)
            {
                promjenaXiliO()
                promjenaIgraca()
            }
            else
            {
                $scope.stilPobjede={
                    "background":"transparent",
                    "position":"absolute",
                    "width":"316px",
                    "height":"316px",
                    "top":"36px",
                    "left":"525px"
                }
                $scope.newGame()
            }
        }
    }

    //vraca true ili false u zavisnosti da li je kliknuto mjesto prazno ili ne
    function postaviXiliOuTabelu(broj){
        var element=angular.element($('#celija'+broj))
        if(element.text()=='')
        {
            //oznacavanje u nizove kliknutih polja
            $rootScope.oznacenaPolja[broj]=true
            $rootScope.oznacenaPoljaSaXiliO[broj]=$rootScope.XiliO

            element.html($rootScope.XiliO)
            return false
        }
        else
        return true
    }

    function promjenaXiliO(){
        if($rootScope.XiliO=='X')
        $rootScope.XiliO='O'
        else
        $rootScope.XiliO='X'
    }

    function promjenaIgraca(){
        var element=angular.element($('#poruka'))
        if(element.html()=='<p class="ng-binding">Na redu je: '+$rootScope.prvoIme+'</p>')
        {
            element.html("<p>Na redu je: {{imeAvatara2}}</p>")
            $compile(element)($scope)
        }
        else
        {
            element.html("<p>Na redu je: {{imeAvatara1}}</p>")
            $compile(element)($scope)
        }
    }

    function provjeraPobjeda()
    {
        for(var i=0;i<$rootScope.kombinacije.length;i++)
        {
            var a=$rootScope.kombinacije[i][0]
            var b=$rootScope.kombinacije[i][1]
            var c=$rootScope.kombinacije[i][2]
            
            if($rootScope.oznacenaPolja[a]==true && $rootScope.oznacenaPolja[b]==true && $rootScope.oznacenaPolja[c]==true && $rootScope.oznacenaPoljaSaXiliO[a]==$rootScope.oznacenaPoljaSaXiliO[b] && $rootScope.oznacenaPoljaSaXiliO[a]==$rootScope.oznacenaPoljaSaXiliO[c])
            {
                $scope.pobjedaIgraca={}

                var element=angular.element($('#pobjedaIgraca'))
                if($rootScope.oznacenaPoljaSaXiliO[a]=='X')
                {
                    element.html('Bravooooo {{imeAvatara1}}')
                    $compile(element)($scope)
                }
                else
                {
                    element.html('Bravooooo {{imeAvatara2}}')
                    $compile(element)($scope)
                }
                

                $scope.izlazakPobjede={"animation-name":"zaPobjedu","display":"block"}
                $timeout(function(){
                    $scope.izlazakPobjede={"display":"none"}
                },5500)
                
                

                if($rootScope.oznacenaPoljaSaXiliO[a]=='X')
                {
                    $rootScope.brojacX++;
                    var element=angular.element($("#X"))
                    element.html("(X) "+$rootScope.brojacX)
                }
                else
                {
                    $rootScope.brojacO++;
                    var element=angular.element($("#O"))
                    element.html($rootScope.brojacO+" (O)")
                }
                return true
            }
        }
        return false
    }

    $scope.newGame=function(){
        //reset svih polja na prazno
        for(var i=0;i<9;i++)
        {
            var element=angular.element($("#celija"+i))
            element.html('')
        }

        //reset XiliO na X odnosno O u zavisnosti koja je runda i reset igraca
        var element=angular.element($("#poruka"))
        if($rootScope.prviIgrac=='X')
        {
            $rootScope.XiliO='O'
            element.html("<p>Na redu je: "+$rootScope.drugoIme+"</p>")
            $rootScope.prviIgrac='O'
        }
        else
        {
            $rootScope.XiliO='X'
            element.html("<p>Na redu je: "+$rootScope.prvoIme+"</p>")
            $rootScope.prviIgrac='X'
        }
        
        //reset oznaka na false
        $rootScope.oznacenaPolja=[false,false,false,false,false,false,false,false,false]

        //reset prekrivaca
        $scope.stilPobjede=""
    }

    $scope.reset=function(){
        //reset svih polja na prazno
        for(var i=0;i<9;i++)
        {
            var element=angular.element($("#celija"+i))
            element.html('')
        }

        //reset igraca
        var element=angular.element($("#poruka"))
        element.html("<p>Na redu je: "+$rootScope.prvoIme+"</p>")

        //reset XiliO na X
        $rootScope.XiliO='X'

        //reset oznaka na false
        $rootScope.oznacenaPolja=[false,false,false,false,false,false,false,false,false]

        //reset prekrivaca
        $scope.stilPobjede=""

        //reset brojaca pobjeda
        var element2=angular.element($("#XO"))
        element2.html("<div id='X'>(X) 0</div> : <div id='O'>0 (O)</div>")
        $rootScope.brojacX=0;
        $rootScope.brojacO=0;
    }

    //posudjeno iz multiplayer ili singleplayera
    $scope.avatar1=$rootScope.prvaSlika
    $scope.avatar2=$rootScope.drugaSlika

    $scope.imeAvatara1=$rootScope.prvoIme
    $scope.imeAvatara2=$rootScope.drugoIme
})