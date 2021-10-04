$(function(){

    let b = $('.box')
    let b2 = $('.box2')

    b.click(function(){
        b2.slideToggle(1000,function(){
            b2.fadeOut(2000)
        })
    })
})