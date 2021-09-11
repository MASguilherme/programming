// mudar a cor do elemento artigoB ao clicar no artigoA
$(function(){

    $('body').click(function(){
        $('.box').css('background-color','red')
    })
    $('.box').click(function(e){
        // função para para parar a propação de uma função: e.StopPropagation
        e.stopPropagation();
    })
})

