var first = 0;
var firstMenu = 0;
var oldach = "";
var oldMenu = "";
var isinstruct = 1;
var expandedMenu = "";
var currCourse = "";
var clickTrigger = window.location.search.substring(1);

window.onload = function() {
    if(clickTrigger)
    loadAch(clickTrigger);
}

function expand(menu){
    
    // alert("Pressed Expand with menu: " + menu + " First menu = "+ firstMenu);
    if(firstMenu==0){
        //first time
        //alert("Pressed "+menu+" for the first time!");
        firstMenu=1;
        oldMenu = menu;
        document.getElementById(menu).style.display = "block";  
        document.getElementById('selected').innerHTML = "> " + menu;
        currCourse = document.getElementById('selected').innerHTML;
    }
    else{
        if(oldMenu != menu){
            //change (different)
            //alert("Changing menu's.. (Was" + oldMenu + ", now is pressed "+ menu + ")");
            document.getElementById(oldMenu).style.display = "none";
            document.getElementById(menu).style.display = "block";
            document.getElementById('selected').innerHTML = "> " + menu;
            currCourse = document.getElementById('selected').innerHTML;
            oldMenu = menu;
            loadAch("instructions");
        }
        else{
            //pressed again
            //alert("Pressed again! (" + menu + " = " + oldMenu + "). Now Hiding.");
            
            document.getElementById(menu).style.display = "none";
            loadAch("instructions");
            isinstruct = 1;
            document.getElementById('selected').innerHTML = "" ;
            firstMenu = 0;
            oldMenu = "";
            menu = "";
            currCourse = "";
        }
    }
}

function loadAch(ach){
    
    if(first==0){
        //first time (initialization)
        if(ach != "instructions"){
            //achievement is NOT INSTRUCTIONS
            document.getElementById("instructions").style.display = "none";
            isinstruct=0;
            //alert("Pressed "+ach+" for the first time!");
            first=1;
            oldach = ach;
            document.getElementById(ach).style.display = "block";
            currCourse = document.getElementById('selected').innerHTML;
            document.getElementById('navi').innerHTML += "<a id='sub' style='cursor:pointer;'> > " + ach +"</a> ";
        }
        
    }
    else{
        //not the first time (already initialized)
        if(oldach!=ach){
            //changing between achievements (new achievement selected)
            //alert("Changing ach's.. (Was " + oldach + ", now is pressed "+ ach + ")");
            document.getElementById('sub').innerHTML = "";
            document.getElementById(oldach).style.display = "none";
            if(ach != "instructions")
            {
                //changing achievement (not instructions)
                document.getElementById(ach).style.display = "block";
                document.getElementById('sub').innerHTML = " > " + ach;
                //document.getElementById('selected').innerHTML = currCourse + " > " + ach;
                oldach = ach;
            }
            else
            {
                //changing achievement (INSTRUCTION PAGE)
                isinstruct = 1;
                document.getElementById('navi').innerHTML = "<a id='selected' onclick='hideSub()' style='cursor: pointer;'>"+currCourse+"</a>"
                document.getElementById(ach).style.display = "none";
                document.getElementById("instructions").style.display = "flex";
                document.getElementById('selected').innerHTML = "";
                first = 0;
                oldach = "";
                document.getElementById('selected').innerHTML = currCourse;
            }
        }
        else{
            //changing between achievements (same achievement selected)
            //alert("Pressed again! (" + ach + " = " + oldach + "). Now Hiding."); 
            document.getElementById(ach).style.display = "none";
            document.getElementById("instructions").style.display = "flex";
            document.getElementById('selected').innerHTML = "";
            first = 0;
            oldach = "";
            document.getElementById('navi').innerHTML = "<a id='selected' onclick='hideSub()' style='cursor: pointer;'>"+currCourse+"</a>"
        }
    }
}

function hideSub(){
    isinstruct = 1;
    document.getElementById('navi').innerHTML = "<a id='selected' onclick='hideSub()' style='cursor: pointer;'>"+currCourse+"</a>"
    document.getElementById(oldach).style.display = "none";
    document.getElementById("instructions").style.display = "flex";
    first = 0;
    oldach = "";
    document.getElementById('selected').innerHTML = currCourse;
}