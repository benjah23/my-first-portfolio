$(document).ready(function() {
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100){
            $(".header").addClass("bg-other");
        }else{
            $(".header").removeClass("bg-other");
        }
    });
})