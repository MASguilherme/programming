$(function(){

    let b = $('.box')
    let b2 = $('.box2')
   
    
    b.click(function(){
        b.fadeOut(1000, function(){
            b2.fadeIn(2000)
        })
})
    b2.click(function(){
        b2.fadeOut(1000,function(){
            b.fadeIn(2000)
        })
    })
})