$(function(){

    let back = $('.bg')
    let bt = $('.btn')

    abrirJanela()

    function abrirJanela(){
        bt.click(function(){
            back.fadeIn()
        })
    }
})


