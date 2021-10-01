$(function(){

    // $('body').on('click', function(){
    //     alert('Sim! Está funcionando')
    // })
    // $('body').html('<a href="">Meu link está funcionando?</a>')

    var func = function(){
        $(this).css('background-color','green').css('color','#fff')
    }

    $('input[name=nome]').keyup(func)

    var func2 = function(){
        $(this).css('background-color','red').css('color','#fff')
    }
    $('input[name=nome1]').keydown(func2)
})