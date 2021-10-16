$(function(){

    let back = $('.bg')
    let bt = $('.botao')
    let close = $('#fechar')
    let sended = $('#enviado')
    let form = $('.container-form')

    abrirJanela()
    fecharJanela()
    enviado()

    function abrirJanela(){
        bt.click(function(){
            back.fadeIn()
        })
    }

    function fecharJanela(){
        close.click(function(){
            back.fadeOut()
        })
        back.click(function(){
            back.fadeOut()
        })
    }
    function enviado(){
        sended.click(function(){
            alert('enviado!')
        })
    }

    form.click(function(e){
        e.stopPropagation()
    })
})


