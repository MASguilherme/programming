// mudar a cor do elemento artigoB ao clicar no artigoA
$(
    function(){
        $('#artigoA').click(function(){
            $('#artigoB').css('background-color','#000').css('color','#fff')
        })
        $('#artigoA').hover(function(){
            $('#artigoB').css('background-color','red').css('color','#000')
        })
    }
)