/*.controller("myCtrl", function($scope, $compile) {
    $scope.name = ' BILAL';
    $scope.test = function() {
        var element = angular.element($('#proba'));
        element.html('<p>HARIS{{name}}</p>');
        $compile(element)($scope);
    };
})*/


XO.run(function($rootScope){
    $rootScope.prvoImeP1=""
    $rootScope.prvaSlikaP1=""
    $rootScope.drugoImeP1=""
    $rootScope.drugaSlikaP1=""
    $rootScope.daLiJeHoverovnoRTP1=false
    $rootScope.vrstaIgre=""
})

XO.controller("resetRootScope-aP1",function($rootScope){
    $rootScope.prvoImeP1=""
    $rootScope.prvaSlikaP1=""
    $rootScope.drugoImeP1=""
    $rootScope.drugaSlikaP1=""
    $rootScope.daLiJeHoverovnoRTP1=false
    $rootScope.vrstaIgre=""
})

XO.controller("kontrolerPomjeranjaAvataraP1",function($scope){
    var right1=0;
    var right2=-500;
    var ponavljanje=0;
    var animacija2={
        "right":"0px",
        "animation-duration":"0.15s",
        "animation-iteration-count":"1",
        "animation-timing-function":"linear",
        "animation-name":"animacija" 
    }

    $scope.naprijed=function()
    {
        //Pomjeranje naprijed
        if(right1!=500)
        {
            ponavljanje=0;
            $scope.stil11={"right":right1+100+'px'}
            $scope.stil22={"right":right2+100+'px'}
            right1=right1+100
            right2=right2+100
        }
        //animacija ako dodje do kraja
        else
        {
            //Varijabla ponavljanje - da se na svaki klik uradi animacija;
            $scope.stil22=animacija2;
            ponavljanje++;
            if(ponavljanje%2==0)
            {animacija2["animation-name"]="animacija"}
            else
            {animacija2["animation-name"]="animacijaa"}
        }
    }
    $scope.nazad=function()
    {
        //pomjeranje nazad
        if(right1!=0)
        {
            ponavljanje=0;
            $scope.stil11={"right":right1-100+'px'}
            $scope.stil22={"right":right2-100+'px'}
            right1=right1-100
            right2=right2-100
        }
        //animacija ako dodje do kraja
        else
        {
            //Varijabla ponavljanje - da se na svaki klik uradi animacija;
            $scope.stil11=animacija2;
            ponavljanje++;
            if(ponavljanje%2==0)
            animacija2["animation-name"]="animacija2"
            else
            animacija2["animation-name"]="animacijaa2"
        }
    }
})

XO.controller("kontrolerZaOznakuSlikeP1",function($scope,$rootScope){
    
    //pamtilo koji je hoverovan
    var hoverovano=[hoverovano0=false,hoverovano1=false,hoverovano2=false,hoverovano3=false,hoverovano4=false,hoverovano5=false,hoverovano6=false,hoverovano7=false,hoverovano8=false,hoverovano9=false,hoverovano10=false]
    
    //id-evi za prvi red
    var divovi=["#nulti","#prvi","#drugi","#treci","#cetvrti","#peti","#sesti","#sedmi","#osmi","#deveti",]
        
    //niz za $rootScope.prvaSlika i $rootScope.drugaSlika
    var slike=["Avatars/PUBG.jpg","Avatars/1.jpg","Avatars/2.png","Avatars/3.jpg","Avatars/4.png","Avatars/5.png","Avatars/6.jpg","Avatars/7.png","Avatars/8.png","Avatars/9.jpg"]
    var imenaSlika=["NightWitch","SnowMan","IronMan","Jasuo","Garen","Spiderman","Sonic","Minecrafter","MrGreen","CaptainPrice"]
    //provjera da li je hoverovana slika
    var daLiJeHoverovano=false
    
    $scope.hoveruj=function(redniBroj)
    {
        if(daLiJeHoverovano==false)
        {
            zapamtiPrvuIDruguSliku(redniBroj)
            oznaciAvatara(hoverovano,redniBroj)
            
            daLiJeHoverovano=true
            $rootScope.daLiJeHoverovnoRTP1=true
            return {"opacity":".25"}
        }

        else if(hoverovano[redniBroj]==true)
        {
            odpamtiPrvuIDruguSliku()
            odOznaciAvatara(redniBroj)
            
            hoverovano[redniBroj]=false
            daLiJeHoverovano=false
            $rootScope.daLiJeHoverovnoRTP1=false
            return {"opacity":"1"}
        }

        function zapamtiPrvuIDruguSliku(redniBroj){
            $rootScope.prvaSlikaP1=slike[redniBroj+1]
        }
        
        function odpamtiPrvuIDruguSliku(){
            $rootScope.prvaSlikaP1=""
        }

        function oznaciAvatara(hoverovano,redniBroj){
            for (var i=0;i<hoverovano.length;i++) {
                if(i==redniBroj)
                {
                    var element=angular.element($(divovi[i]))
                    element.html("<img src='checkSign.png'>")
                    hoverovano[i]=true
                }
            }
        }

        function odOznaciAvatara(redniBroj){
            var element=angular.element($(divovi[redniBroj]))
            element.html("")
        }
    }
})

XO.controller("kontroler3P1",function($scope,$interval,$rootScope,$timeout){
    $scope.player1=""

    //za promjenu laznog u pravo dugme
    $interval(function(){

        var player11=$scope.player1
        
        if(player11!="" && $rootScope.prvaSlikaP1!="")
        {
            $scope.laznoDugme={"display":"none"}
            $scope.pravoDugme={"display":"block"}

            $rootScope.vrstaIgre="1player"
        }
        else
        {
            $scope.laznoDugme={"display":"block"}
            $scope.pravoDugme={"display":"none"}
        }
    },0)

    //////////////////////////////////////
    //Ako je dugme pravo, uzima podatke, a ako nije oznacva prazna polja
    $scope.pokreni=function(player1){
        if(player1!="" && $rootScope.prvaSlikaP1!=""){
            $rootScope.prvoImeP1=player1

            var slike=["Avatars/PUBG.jpg","Avatars/1.jpg","Avatars/2.png","Avatars/3.jpg","Avatars/4.png","Avatars/5.png","Avatars/6.jpg","Avatars/7.png","Avatars/8.png","Avatars/9.jpg"]
            var imenaSlika=["NightWitch","SnowMan","IronMan","Jasuo","Garen","Spiderman","Sonic","Minecrafter","MrGreen","CaptainPrice"]
            var randomNumber=Math.floor(Math.random()*10)
            $rootScope.drugaSlikaP1=slike[randomNumber]
            $rootScope.drugoImeP1=imenaSlika[randomNumber-1]
            console.log($rootScope.drugaSlikaP1+"  "+$rootScope.drugoImeP1);
        }
        else {
            if($rootScope.prvaSlikaP1!="")
            $scope.problem2={"display":"none"}
            else
            {
                if($rootScope.prvaSlikaP1==""){
                    $scope.problem2={"display":"block"}
                }
                else{$scope.missing1=""}
            }
            if(player1!="")
                $scope.problem1={"display":"none"}
            else
            {
                if(player1==""){
                    $scope.problem1={"display":"block"}
                }
                else{$scope.missing3=""}
            }
        }
    }

    //zaOkretanjeSlike
    $scope.okreni=function(broj){
        $scope.stil111={"transform":"rotate(360deg)","transition":".5s"}

        $timeout(function(){
            $scope.stil111=""
        },500)
    }
    //ugasit upaljene okvire
    $scope.ugasiOkvir3=function(){
        $scope.missing3=""
    }
    $scope.ugasiOkvir4=function(){
        $scope.missing4=""
    }
})