// mudar a cor do elemento artigoB ao clicar no artigoA
$(function(){

    function TrocaCorClickHover(){

            $('#artigoA').click(function(){
                $('#artigoB').css('background-color','#000').css('color','#fff')
            })
            $('#artigoA').hover(function(){
                $('#artigoB').css('background-color','red').css('color','#000')
            })
           
            
    }

    function ValidarTextArea(){
        $('#txta').focus(function(){
            console.log('com focus')
        }).blur(function(){
           console.log('função blur')
        })
   
        
    }

        // Chama a função quando dado o nome    
        ValidarTextArea();
        TrocaCorClickHover()
})

