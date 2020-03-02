var varijabla = angular
                .module("modul",[])
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

                .controller("kontroler2",function($scope){
                    var hoverovano=[hoverovano0=false,hoverovano1=false,hoverovano2=false,hoverovano3=false,hoverovano4=false,hoverovano5=false,hoverovano6=false,hoverovano7=false,hoverovano8=false,hoverovano9=false,hoverovano10=false]
                    var daLiJeHoverovano=false
                    $scope.hoveruj=function(redniBroj)
                    {
                        if(daLiJeHoverovano==false)
                        {
                            for (var i=0;i<hoverovano.length;i++) {
                                if(i==redniBroj)
                                {
                                    daLiJeHoverovano=true
                                    hoverovano[i]=true
                                    return {"opacity":".25"}
                                }
                            }
                        }

                        else if(hoverovano[redniBroj]==true)
                        {
                            hoverovano[redniBroj]=false
                            daLiJeHoverovano=false
                            return {"opacity":"1"}
                        }
                    }
                })

                .controller("kontroler3",function($scope){
                    $scope.player1=""
                    $scope.player2=""

                    $scope.pokreni=function(player1,player2){
                        if(player1!="" && player2!="")
                        {
                            $scope.stilEkrana={
                                "transition":"1s",
                                "filter":"brightness(.0)",
                                "background":"black"
                            }
                            //Popraviti ovdje bug;
                            setTimeout(function(){
                                $scope.stilEkrana={
                                    "transition":"1s",
                                    "filter":"brightness(1)",
                                    "background":"white"
                                }
                            },5000)
                        }
                    }
                })
