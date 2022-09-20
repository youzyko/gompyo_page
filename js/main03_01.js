$(document).ready(function(){

$(".recipe_txt").hide();
$(".recipe_wrap_whole").mouseover(function(){
    $(".recipe_txt").css("border-bottom","1px solid red");
    $(".recipe_txt").stop().fadeIn();
}).mouseleave(function(){
    $(".recipe_txt").stop().fadeOut();
});


var w= 250*$(".recipe_wrap li").size()+"px";
$(".recipe_wrap").css("width",w);
$(".recipe_wrap li:last").prependTo(".recipe_wrap"); //마지막li를 맨앞으로 이동 
$(".recipe_wrap").css("margin-left","-250px");

$(".recipe_btn1").click(function(){
    $(".recipe_wrap:not(:animated)")
        .animate({marginLeft:parseInt($(".recipe_wrap").css("margin-left"))-250+"px"},"slow","swing",function(){
            $(".recipe_wrap li:first").appendTo(".recipe_wrap");  //맨앞li를 맨뒤로 이동
            $(".recipe_wrap").css("margin-left","-250px");
        });
});

$(".recipe_btn2").click(function(){
    $(".recipe_wrap:not(:animated)")
        .animate({marginLeft:parseInt($(".recipe_wrap").css("margin-left"))+250+"px"},"slow","swing",function(){
            $(".recipe_wrap li:last").prependTo(".recipe_wrap"); //맨앞li를 맨앞로 이동
            $(".recipe_wrap").css("margin-left","-250px");
        });
});

var img_fade1=setInterval(function(){
    var showimg1=$("#img_wrap1 img:eq(0)");
    var nextimg1=$("#img_wrap1 img:eq(1)");
    nextimg1.addClass("selected1");
    nextimg1.css("opacity","0").animate({opacity:1},1000,function(){
        showimg1.appendTo("#img_wrap1").removeClass("selected1");
    });
},3000)






});