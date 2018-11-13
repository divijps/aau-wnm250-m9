$(document).ready(function(){
    $("#hide").click(function(){
        $("img").hide();
    });
    $("#show").click(function(){
        $("img").show();
    });
});

$(document).ready(function(){
 $("#menu li").hover(function(){
   $(".dropdown-menu", this).slideDown(100);
 }, function(){
   $(".dropdown-menu", this).stop().slideUp(100);
 });
});

