/*.controller("myCtrl", function($scope, $compile) {
    $scope.name = ' BILAL';
    $scope.test = function() {
        var element = angular.element($('#proba'));
        element.html('<p>HARIS{{name}}</p>');
        $compile(element)($scope);
    };
})*/


XO.run(function($rootScope){
    $rootScope.prvoIme=""
    $rootScope.drugoIme=""
    $rootScope.prvaSlika=""
    $rootScope.drugaSlika=""
})

XO.controller("resetRootScope-a",function($rootScope){
    $rootScope.prvoIme=""
    $rootScope.drugoIme=""
    $rootScope.prvaSlika=""
    $rootScope.drugaSlika=""
})

XO.controller("kontrolerPomjeranjaAvatara",function($scope){
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

XO.controller("kontrolerZaOznakuSlike",function($scope,$rootScope){
    
    //pamtilo koji je hoverovan
    var hoverovano=[hoverovano0=false,hoverovano1=false,hoverovano2=false,hoverovano3=false,hoverovano4=false,hoverovano5=false,hoverovano6=false,hoverovano7=false,hoverovano8=false,hoverovano9=false,hoverovano10=false]
    
    //id-evi za prvi red
    var divovi=["#nulti","#prvi","#drugi","#treci","#cetvrti","#peti","#sesti","#sedmi","#osmi","#deveti",]
    
    //id-evi za drugi red
    var divovi2=["#nulti0","#prvi1","#drugi2","#treci3","#cetvrti4","#peti5","#sesti6","#sedmi7","#osmi8","#deveti9",]
    
    //niz za $rootScope.prvaSlika i $rootScope.drugaSlika
    var slike=["Avatars/PUBG.jpg","Avatars/1.jpg","Avatars/2.png","Avatars/3.jpg","Avatars/4.png","Avatars/5.png","Avatars/6.jpg","Avatars/7.png","Avatars/8.png","Avatars/9.jpg"]
    
    //provjera da li je hoverovana slika
    var daLiJeHoverovano=false
    $scope.hoveruj=function(prviIliDrugiRed,redniBroj,redniBroj2)
    {
        
        if(daLiJeHoverovano==false)
        {
            zapamtiPrvuIDruguSliku(prviIliDrugiRed,redniBroj)
            oznaciAvatara(hoverovano,redniBroj,redniBroj2,daLiJeHoverovano)
            
            daLiJeHoverovano=true
            return {"opacity":".25"}
            
        }

        else if(hoverovano[redniBroj]==true)
        {
            odpamtiPrvuIDruguSliku(prviIliDrugiRed)
            odOznaciAvatara(hoverovano,redniBroj,redniBroj2,daLiJeHoverovano)

            hoverovano[redniBroj]=false
            daLiJeHoverovano=false
            return {"opacity":"1"}
        }

        function zapamtiPrvuIDruguSliku(prviIliDrugiRed,redniBroj){
            if(prviIliDrugiRed==1)
            $rootScope.prvaSlika=slike[redniBroj+1]
            else
            $rootScope.drugaSlika=slike[redniBroj+1]
        }
        
        function odpamtiPrvuIDruguSliku(prviIliDrugiRed){
            if(prviIliDrugiRed==1)
            $rootScope.prvaSlika=""
            else
            $rootScope.drugaSlika=""
        }

        function oznaciAvatara(hoverovano,redniBroj,redniBroj2,daLiJeHoverovano){
            for (var i=0;i<hoverovano.length;i++) {
                if(i==redniBroj)
                {
                    if(redniBroj2<10)
                    {
                        var element=angular.element($(divovi[i]))
                        element.html("<img src='/X-O - game/checkSign.png'>")
                    }
                    else
                    {
                        var element=angular.element($(divovi2[i]))
                        element.html("<img src='checkSign.png'>")
                    }
                }
                hoverovano[i]=true
            }
        }

        function odOznaciAvatara(hoverovano,redniBroj,redniBroj2,daLiJeHoverovano){
            if(redniBroj2<10)
            {
                var element=angular.element($(divovi[redniBroj]))
                element.html("")
            }
            else
            {
                var element=angular.element($(divovi2[redniBroj]))
                element.html("")
            }
        }
        
    }
})

XO.controller("kontroler3",function($scope,$timeout,$rootScope){
    $scope.player1=""
    $scope.player2=""
    
    $scope.pokreni=function(player1,player2){
        if(player1!="" && player2!="")
        {
            $rootScope.prvoIme=player1
            $rootScope.drugoIme=player2

            //popravit kasnije
            /*
            $scope.stilEkrana={
                "transition":"3s",
                "background":"black",
                "filter":"brightness(.0)"
            }
            $timeout(function(){
                $scope.sakrij={"display":"none"}
                $scope.otkrij={"display":"block"}
                $scope.stilEkrana={
                    "transition":"3s",
                    "background":"white",
                    "filter":"brightness(1)"
                }
            },3000)
            */
        }
    }

    //zaOkretanjeSlike
    $scope.okreni=function(broj){
        if(broj==1)
        $scope.stil111={"transform":"rotate(360deg)","transition":".5s"}
        else if(broj==2)
        $scope.stil222={"transform":"rotate(360deg)","transition":".5s"}

        if(broj==11)
        {
            $timeout(function(){
                $scope.stil111=""
            },500)
        }
        else if(broj==22)
        {
            $timeout(function(){
                $scope.stil222=""
            },500)
        }
    }
})