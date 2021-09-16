$(function() {
    var elemento = $('div.box');
    var b = $('body')

    elemento.click(function(){
        elemento.css('background-color','white')
        elemento.css('color', 'black')
    })

    b.click(function(){
        b.css('background-color','#000')
    })

})