var first = 0;
var oldWeek = "";
var isinstruct = 1;
var clickTrigger = window.location.search.substring(1);
window.onload = function() {
    if(clickTrigger)
    loadWeek(clickTrigger);
}

function loadWeek(week){
    if(first==0){
        //first time
        if(week != "instructions"){
        document.getElementById("instructions").style.display = "none";
        isinstruct=0;
        //alert("Pressed "+week+" for the first time!");
        first=1;
        oldWeek = week;
        document.getElementById(week).style.display = "block";
        document.getElementById('selected').innerHTML = "> " + week;
        }
        
    }
    else{
        if(oldWeek!=week){
            //alert("Changing weeks.. (Was" + oldWeek + ", now is ressed "+ week + ")");
            document.getElementById(oldWeek).style.display = "none";
            if(week != "instructions")
            {
                document.getElementById(week).style.display = "block";
                document.getElementById('selected').innerHTML = "> " + week;
                oldWeek=week;
            }
            else
            {
                isinstruct = 1;
                document.getElementById(week).style.display = "none";
                document.getElementById("instructions").style.display = "flex";
                document.getElementById('selected').innerHTML = "";
                first = 0;
                oldWeek = "";
            }
        }
        else{
            //alert("Pressed again! (" + week + " = " + oldWeek + "). Now Hiding.");
            document.getElementById(week).style.display = "none";
            document.getElementById("instructions").style.display = "flex";
            document.getElementById('selected').innerHTML = "";
            first = 0;
            oldWeek = "";
        }
    }
}