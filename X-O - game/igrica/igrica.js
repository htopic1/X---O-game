//var XO = angular.module('iksoks',[])

XO.run(function($rootScope){
    //prva igra,prva pravila
    $rootScope.prviIgrac='X'
    ////////////////////////
    $rootScope.brojacPobjedaX=0
    $rootScope.brojacPobjedaO=0
    $rootScope.brojacX=0
    $rootScope.brojacO=0
    $rootScope.XiliO='X'
    $rootScope.oznacenaPolja=[false,false,false,false,false,false,false,false,false]
    $rootScope.oznacenaPoljaSaXiliO=["","","","","","","","",""]
    $rootScope.kombinacije=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    $rootScope.pobjeda=false
    //definise se da bi se mogla izbrisat pri resetu
    $rootScope.zaIzbrisatTimeout
})

.controller("resetRT",function($rootScope,$scope){
    
    if($rootScope.prvoIme=="" || $rootScope.drugoIme=="" || $rootScope.prvaSlika=="" || $rootScope.drugaSlika=="")
    {
        $scope.zaUklonitiAkoNemaImena={"display":"none"}
        var element=angular.element($("#defaultLink"))
        element.html("<br><br><br><br><br><br><br><br><hr><br><br><p>Nazad na <a href='#!/'>MAIN MENU</a>!</p><br><br><hr>")
    }
    else
    {
        //prva igra,prva pravila
        $rootScope.prviIgrac='X'
        ////////////////////////
        $rootScope.brojacPobjedaX=0
        $rootScope.brojacPobjedaO=0
        $rootScope.brojacX=0
        $rootScope.brojacO=0
        $rootScope.XiliO='X'
        $rootScope.oznacenaPolja=[false,false,false,false,false,false,false,false,false]
        $rootScope.oznacenaPoljaSaXiliO=["","","","","","","","",""]
        $rootScope.kombinacije=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
        $rootScope.pobjeda=false
    }
    
})

.controller("kontrolerXiliO",function($scope,$rootScope,$timeout,$interval,$compile){

    //crveni okvir oko prvog igraca na pocetku igre
    $scope.prviAvatarPotez={"box-shadow":"0px 0px 10px 15px rgba(255,0,0,1)"}

    //za promjenu dugmeta "continue" i "reset"
    $interval(function(){
        if($rootScope.brojacO==0 && $rootScope.brojacX==0)
        $scope.iskljucitiDugme=true
        else
        $scope.iskljucitiDugme=false
    },0)
    
    //glavni kod
    $scope.staviXiliO=function(broj){

        if($rootScope.pobjeda==false)
        var daIliNe=postaviXiliOuTabelu(broj)
        else
        var daIliNe=true

        if(daIliNe==false)
        {
            $rootScope.pobjeda=provjeraPobjeda()
            
            if($rootScope.pobjeda==false)
            {
                promjenaXiliO()
                promjenaIgraca()
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
            $scope.drugiAvatarPotez={"box-shadow":"0px 0px 10px 15px rgba(255,0,0,1)"}
            $scope.prviAvatarPotez={}
            element.html("<p>Na redu je: {{imeAvatara2}}</p>")
            $compile(element)($scope)
        }
        else
        {
            $scope.prviAvatarPotez={"box-shadow":"0px 0px 10px 15px rgba(255,0,0,1)"}
            $scope.drugiAvatarPotez={}
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
                var element=angular.element($('#pobjedaIgraca'))
                
                //ko je pobijedio...
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
                
                ////////////////////////////////////////////
                /*Animacija brojaca za X*/
                if($rootScope.oznacenaPoljaSaXiliO[a]=='X')
                {
                    $rootScope.brojacPobjedaX++
                    $rootScope.brojacX++;

                    var element2=angular.element($("#padajuciX"))
                    element2.html($rootScope.brojacX)

                    //Ovdje se mijenja ime zbog ponavljanja animacije
                    //Ne moze uvijek isto ime
                    if($rootScope.brojacPobjedaX%2==0)
                    $scope.padajuciX={"animation-name":"padajuciX"}
                    else
                    $scope.padajuciX={"animation-name":"padajuciXX"}
                    
                    $rootScope.zaIzbrisatTimeout=$timeout(function(){
                        $scope.X={"background":"black","color":"white"}
                        var element=angular.element($("#X"))
                        element.html($rootScope.brojacX)
                        $timeout(function(){
                            $scope.X={"background":"rgb(88, 88, 88)","color":"black","transition":".5s"}
                        },1000)
                    },2000)
                }
                //Animacija za Oks
                else
                {
                    $rootScope.brojacPobjedaO++
                    $rootScope.brojacO++;

                    var element2=angular.element($("#padajuciO"))
                    element2.html($rootScope.brojacO)

                    //Ovdje se mijenja ime zbog ponavljanja animacije
                    //Ne moze uvijek isto ime
                    if($rootScope.brojacPobjedaO%2==0)
                    $scope.padajuciO={"animation-name":"padajuciO"}
                    else
                    $scope.padajuciO={"animation-name":"padajuciOO"}
                    
                    $timeout(function(){
                        $scope.O={"background":"black","color":"white"}
                        var element=angular.element($("#O"))
                        element.html($rootScope.brojacO)
                        $timeout(function(){
                            $scope.O={"background":"rgb(88, 88, 88)","color":"black","transition":".5s"}
                        },1000)
                    },2000)
                }
                /*$scope.stilPobjede={
                    "background":"transparent",
                    "position":"absolute",
                    "width":"316px",
                    "height":"316px",
                    "top":"54px",
                    "left":"525px"
                }*/
                //$scope.newGame()
                return true
            }
        }
        return false
    }

    $scope.newGame=function(){
        //reset pobjede
        $rootScope.pobjeda=false

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
            $scope.drugiAvatarPotez={"box-shadow":"0px 0px 10px 15px rgba(255,0,0,1)"}
            $scope.prviAvatarPotez={}

            $rootScope.XiliO='O'
            element.html("<p>Na redu je: "+$rootScope.drugoIme+"</p>")
            $rootScope.prviIgrac='O'
        }
        else
        {
            $scope.prviAvatarPotez={"box-shadow":"0px 0px 10px 15px rgba(255,0,0,1)"}
            $scope.drugiAvatarPotez={}

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
        //reset pobjede
        $rootScope.pobjeda=false

        //sklanjanje pobjede instant
        $scope.izlazakPobjede={"display":"none"}
        $timeout.cancel($rootScope.zaIzbrisatTimeout)

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
        $rootScope.brojacX=0;
        $rootScope.brojacO=0;
        var element2=angular.element($("#XO"))
        element2.html("<div ng-style='X' id='X'>0</div> <div ng-style='padajuciX' id='padajuciX'>0</div> <div id='dvotacka'>:</div> <div  ng-style='O' id='O'>0</div><div ng-style='padajuciO' id='padajuciO'>0</div>")
        $compile(element2)($scope)

        //brisanje ime animacije
        $scope.padajuciX=""
        $scope.padajuciO=""
        
    }

    //posudjeno iz multiplayer ili singleplayera
    $scope.avatar1=$rootScope.prvaSlika
    $scope.avatar2=$rootScope.drugaSlika

    $scope.imeAvatara1=$rootScope.prvoIme
    $scope.imeAvatara2=$rootScope.drugoIme
})