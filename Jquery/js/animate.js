$("#btn-tittle").on("click", function(){
    $("h1").slideUp("slow").slideDown("slow").animate({opacity:0.6})
})



$(".htres1btn").on("click", function(){
    $(".htres1").slideToggle();
});


$(".htres2").prepend("Adicionado ");

$(".htres2btn").on("click",function(){
    $(".htres2").fadeToggle();
});

