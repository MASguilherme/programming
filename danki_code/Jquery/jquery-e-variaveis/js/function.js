$(function(){

    var b = $('.box')
    var body = $('body')

    b.click(function(){
        b.css('background-color','black'),b.css('color','white')
    })
    function funcaobody(){
        body.css('background-color','green')
    }

    funcaobody()
})

