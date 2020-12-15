$(document).ready(function(){
    var link = window.location.href;
    $("main").animate({"opacity":"1"},"slow");
    
    if(link.includes("about.html") || link.includes("index.html")){
        $(".left-side").css({"width":"0%"});
        $(".right-side").css({"width":"100%","margin":"0%"});
    }
    
     
    //sitemap toggle buttons
    $(".expandBtn").click(function(){
        $('#'+this.value).toggle("fast");
    });
    
});

function loadPage(page) {
    window.location.href = page;
}

