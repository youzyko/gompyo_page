$(document).ready(function(){
    $(".login_container input").focus(function(){
        $(this).css({"border-color":"#0db5cb","background-color":"#eaeaea"});
    }).blur(function(){
        $(this).css({"border-color":"","background-color":""});
    })
});