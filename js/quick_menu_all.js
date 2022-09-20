
    function banner1(){
        $(".quick_menu").animate({marginLeft:parseInt($(".quick_menu").css("margin-left"))-400+"px"},"slow","swing",function(){
            $(".quick_menu li:first").appendTo(".quick_menu");
            $(".quick_menu").css("margin-left","-400px");
        });
    }
    $(document).ready(function(){
        var width1=400*$(".quick_menu li").size()+"px";
        $(".quick_menu").css("width",width1);
        $(".quick_menu li:last").prependTo(".quick_menu");
        $(".quick_menu").css("margin-left","-400px");

        var banner=setInterval("banner1()",3000);

        $(".quick_menu li").mouseover(function(){
            clearInterval(banner);
            $(this).find("a").css("opacity","0.5");
        }).mouseout(function(){
            banner=setInterval("banner1()",3000);
            $(this).find("a").css("opacity","1");
        });

        $(".prev").click(function(){

        });

        
    });
// --------------------------------------------------------------------------------------------


