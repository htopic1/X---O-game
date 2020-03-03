var varijabla = angular
                .module("modul",[])
                /*.controller("myCtrl", function($scope, $compile) {
                    $scope.name = ' BILAL';
                    $scope.test = function() {
                        var element = angular.element($('#proba'));
                        element.html('<p>HARIS{{name}}</p>');
                        $compile(element)($scope);
                    };
                })*/
                .run(function($rootScope) {
                    $rootScope.daLiJeOznacenPrviAvatar=false
                    $rootScope.vrijPrvogAvatara=""
                    $rootScope.daLiJeOznacenDrugiAvatar=false
                    $rootScope.vrijDrugogAvatara=""

                    $rootScope.prvoIme=""
                    $rootScope.drugoIme=""
                })

                .controller("kontroler",function($scope){
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
                        if(right1!=500)
                        {
                            ponavljanje=0;
                            $scope.stil11={"right":right1+100}
                            $scope.stil22={"right":right2+100}
                            right1=right1+100
                            right2=right2+100
                        }
                        else
                        {
                            //Varijabla ponavljanje - da se na svaki klik uradi animacija;
                            $scope.stil22=animacija2;
                            ponavljanje++;
                            if(ponavljanje%2==0)
                            animacija2["animation-name"]="animacija"
                            else
                            animacija2["animation-name"]="animacijaa"
                        }
                    }
                    $scope.nazad=function()
                    {
                        if(right1!=0)
                        {
                            ponavljanje=0;
                            $scope.stil11={"right":right1-100}
                            $scope.stil22={"right":right2-100}
                            right1=right1-100
                            right2=right2-100
                        }
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

                .controller("kontroler2",function($scope,$rootScope){
                    var hoverovano=[hoverovano0=false,hoverovano1=false,hoverovano2=false,hoverovano3=false,hoverovano4=false,hoverovano5=false,hoverovano6=false,hoverovano7=false,hoverovano8=false,hoverovano9=false,hoverovano10=false]
                    var divovi=["#nulti","#prvi","#drugi","#treci","#cetvrti","#peti","#sesti","#sedmi","#osmi","#deveti",]
                    var divovi2=["#nulti0","#prvi1","#drugi2","#treci3","#cetvrti4","#peti5","#sesti6","#sedmi7","#osmi8","#deveti9",]
                    var slike=["PUBG.jpg","1.jpg","2.png","3.jpg","4.png","5.png","6.jpg","7.png","8.png","9.jpg"]
                    var daLiJeHoverovano=false
                    $scope.hoveruj=function(redniBroj,redniBroj2)
                    {
                        if(daLiJeHoverovano==false)
                        {
                            for (var i=0;i<hoverovano.length;i++) {
                                if(i==redniBroj)
                                {
                                    if(redniBroj2<10)
                                    {
                                        var element=angular.element($(divovi[i]))
                                        element.html("<img src='checkSign.png'>")
                                        $rootScope.daLiJeOznacenPrviAvatar=true
                                        $rootScope.vrijPrvogAvatara=slike[i]
                                    }
                                    else
                                    {
                                        var element=angular.element($(divovi2[i]))
                                        element.html("<img src='checkSign.png'>")
                                        $rootScope.daLiJeOznacenDrugiAvatar=true
                                        $rootScope.vrijDrugogAvatara=slike[i]
                                    }

                                    daLiJeHoverovano=true
                                    hoverovano[i]=true
                                    return {"opacity":".25"}
                                }
                            }
                        }

                        else if(hoverovano[redniBroj]==true)
                        {
                            if(redniBroj2<10)
                            {
                                var element=angular.element($(divovi[redniBroj]))
                                element.html("")
                                $rootScope.daLiJeOznacenPrviAvatar=false
                                $rootScope.vrijPrvogAvatara=""
                            }
                            else
                            {
                                var element=angular.element($(divovi2[redniBroj]))
                                element.html("")
                                $rootScope.daLiJeOznacenDrugiAvatar=false
                                $rootScope.vrijDrugogAvatara=""
                            }

                            hoverovano[redniBroj]=false
                            daLiJeHoverovano=false
                            return {"opacity":"1"}
                        }
                    }
                })

                .controller("kontroler3",function($scope,$timeout){
                    $scope.player1=""
                    $scope.player2=""

                    $scope.pokreni=function(player1,player2){
                        if(player1!="" && player2!="")
                        {
                            $rootScope.prvoIme=player1;
                            $rootScope.drugoIme=player2;
                            $scope.stilEkrana={
                                "transition":"3s",
                                "background":"black",
                                "filter":"brightness(.0)"
                            }
                            var stilEkrana2=$timeout(callTimeout,3000)

                            function callTimeout(){
                                $scope.sakrij={"display":"none"}
                                $scope.otkrij={"display":"block"}
                                $scope.stilEkrana={
                                    "transition":"3s",
                                    "background":"white",
                                    "filter":"brightness(1)"
                                }
                            }
                        }
                    }
                    $scope.okreni=function(broj){
                        if(broj==1)
                        $scope.stil111={"transform":"rotate(360deg)","transition":"2s"}
                        else if(broj==2)
                        $scope.stil222={"transform":"rotate(360deg)","transition":"2s"}

                        if(broj==11)
                        {
                            $timeout(function(){
                                $scope.stil111=""
                            },2000)
                        }
                        else if(broj==22)
                        {
                            $timeout(function(){
                                $scope.stil222=""
                            },2000)
                        }
                    }
                })