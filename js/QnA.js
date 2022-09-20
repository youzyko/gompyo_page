$(document).ready(function(){
    $(".qna_wrap dl dd:not(:first)").hide();
    $(".qna_wrap dl dt:first a").addClass("selected");

    $(".qna_wrap dl dt a").click(function(){
        $(".qna_wrap dl dt a").removeClass("selected");
        $(this).addClass("selected");
       if($(this).parent().next().css("display")=="none"){
        $(".qna_wrap dl dd").slideUp("fast");
        $(".star_wrap img").attr("src","images/star1.png");
       }
        $(this).parent().next().slideDown("fast");
        return false;
    });

    $(".star_wrap img").click(function(){

        $(".star_wrap img").attr("src","images/star1.png");
        $(this).attr("src","images/star2.png");
        $(this).prevAll("img").attr("src","images/star2.png");
    });

    $(".qna_five ul li a").click(function(){
        $(".qna_five ul li a").removeClass("selected2");
        $(this).addClass("selected2")
    });

    $(".qna_five ul li:first a").addClass("selected2");
    

});//end 