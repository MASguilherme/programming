$(function(){

    console.log($('.box').width())

    var th = $('.box').height()


    // $('.box').click(function(){
    //     var pluswidth = $('.box').width('1200px')
    // })

    console.log("Width é "+$('.box').width())
    console.log(`Witdh inner é `, $('.box').innerWidth())
    console.log(`Outer Width é`, $('.box').outerWidth(true))
})