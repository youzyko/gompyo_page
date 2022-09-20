$(document).ready(function(){
    
    $(".notice").hide();
    $(".notice").delay(1000).slideDown(1000);
    $(".notice a").click(function(){
        $(".notice").slideUp(1000)
    })
});