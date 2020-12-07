var arr = [];
var first = true;
$(document).ready(function(){
    var link = window.location.href;
    if(link.includes("about.html") || link.includes("index.html")){
        //^^^^ Tuka ne raboti
         $(".left-side").css({"width":"0%"});
         $(".right-side").css({"width":"auto","margin":"0% 5%"});
        
     }
});




function loadPage(page) {
    window.location.href = page;

    
}

 function expandFooter(thisID) {
    //check if existing
    if (arr.length == 0) {
        first = true;
    }
    if (first) {
        //if arr is empty - add this as a first element
        //alert("First element arr.push("+thisID+ "). Display = block")
        document.getElementById(thisID).style.display = "block";
        arr.push(thisID);
        first = false;
    } else {
        //if arr is NOT empty - add this as a next element
        //alert("NOT First element.");
        for (var i = 0; i < arr.length; i++) {
            if (thisID == arr[i]) {
                //alert("ID found: arr["+ i +"]="+arr[i]+" = thisID["+thisID+"]! Now Hiding..");
                document.getElementById(arr[i]).style.display = "none";
                var index = arr.indexOf(arr[i]);
                if (index > -1) {
                    arr.splice(index, 1);
                    return 0;
                }
            }
        }
        //alert("Element not found. Now Adding arr["+i+"] = "+thisID+".");
        document.getElementById(thisID).style.display = "block";
        arr[i] = thisID;
    }
}

