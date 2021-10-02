$(function(){

    $('.form_contato').submit(function(){

        let resposta = 'Nome: '+ $(' input[type=text]').val() + '<br> Idade: ' +$('input[type=number]').val()
                        + '<br> E-mail: '+$('input[type=email]').val()
        let container = $('.container')

        container.html(resposta)
        return false
    })
})