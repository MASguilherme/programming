$(function(){


    let b1 = $('.box1')
    let b2 = $('.box2')
    let btimeout = function(){

        b2.animate({
            marginTop: '50px',
        },3000,function(){
            b2.animate({
                marginLeft:'200px'
            },3500)
        })
        

        
    }
    b1.hover(function(){
        b1.animate({
            width:'500px',
            height:'500px'
        },2000)
    
    },function(){
        setTimeout(btimeout,3000)
    })

        let timer
        timer = setTimeout(function(){
         alert('teste')   
        },3000)

        
    
})