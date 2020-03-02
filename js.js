var glKlasa=document.getElementsByClassName("polje")
var iksOks="X"
var nizXO=["","","","","","","","",""]
var kombinacije=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
var won=false
var poruka=document.getElementById("poruka")

function dodaj_Evente_i_ostala_pravila()
{
    for(var i=0;i<glKlasa.length;i++)
    {
        glKlasa[i].addEventListener('click',klikEvent)
        function klikEvent(event)
        {
            if(won==false)
            {
                dodaj_X_ili_O_u_tabelu()
                dodaj_X_ili_O_u_niz()
                pobjeda_ili_nerijeseno()
                promijeni_igraca()
            }
        }

        glKlasa[i].addEventListener('mouseover',mouseOverEvent,true)
        glKlasa[i].addEventListener("mouseleave",mouseLeaveEvent,false)
    }
    
}

function mouseOverEvent(event2)
{
    event2.target.style.backgroundColor="gray"
}

function mouseLeaveEvent(event3)
{
    event3.target.style.backgroundColor="white"
}

function dodaj_X_ili_O_u_tabelu()
{
    if(event.target.innerHTML=="")
    {
        event.target.innerHTML=iksOks;
    }
}

function dodaj_X_ili_O_u_niz()
{
    if(nizXO[event.target.getAttribute("index")-1]=="")
    nizXO[event.target.getAttribute("index")-1]=iksOks;
}

function promijeni_igraca()
{
    iksOks= iksOks=="X"?"O":"X";
}

function pobjeda_ili_nerijeseno()
{
    for(var i=0;i<kombinacije.length;i++)
    {
        var kombinacija=kombinacije[i]
        var a=kombinacija[0]
        var b=kombinacija[1]
        var c=kombinacija[2]
        
        if(nizXO[a]==nizXO[b] && nizXO[b]==nizXO[c] && nizXO[a]!='' && nizXO[b]!='' && nizXO[c]!='')
        {
            won=true
            glKlasa[a].removeEventListener("mouseleave",mouseLeaveEvent, false)
            glKlasa[a].style.backgroundColor="gray"
            glKlasa[b].removeEventListener("mouseleave",mouseLeaveEvent, false)
            glKlasa[b].style.backgroundColor="gray"
            glKlasa[c].removeEventListener("mouseleave",mouseLeaveEvent, false)
            glKlasa[c].style.backgroundColor="gray"
            nizXO[a]=="X"?pobjeda("X"):pobjeda("O")
            return
        }
    }
}

function pobjeda(znak)
{
    znak=="X"?
    poruka.innerHTML="Pobijedio je X":
    poruka.innerHTML="Pobijedio je O"
}

function resetuj()
{
    document.getElementById("poruka").innerHTML="Na redu je: player1"
    iksOks="X"
    nizXO=["","","","","","","","",""]
    won=false
    for(var i=0;i<glKlasa.length;i++)
    {
        glKlasa[i].innerHTML=""
        glKlasa[i].style.backgroundColor="white"
        glKlasa[i].addEventListener('mouseover',mouseOverEvent,true)
        glKlasa[i].addEventListener("mouseleave",mouseLeaveEvent,false)
    }
}

dodaj_Evente_i_ostala_pravila()





