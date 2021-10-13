$(function(){


    let b1 = $('.box')
    let b2 = $('.box2').find('.child2')

    b1.click(function(){
        b1.addClass('classe-dina')
    })


    b1.click(function(){
        b1.find('.child1').css('background-color','white').css('transition','5s')
    })
    
    b2.css('background-color','yellow').css('transition','4s').css('color','black')

})