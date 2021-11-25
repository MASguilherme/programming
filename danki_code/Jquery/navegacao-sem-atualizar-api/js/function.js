$(function(){

    VerificarCliqueMenu()

    function VerificarCliqueMenu(){
        $('a').click(function(){
            let href = $(this).attr('href')
            $.ajax({
                'beforeSend': function(){
                    console.log(`Estamos chamando o beforeSend`)
                },
                'timeout':10000,
                'url': href,
                'error':function( jqXHR, textStatus, errorThrown){
                    if(jqXHR.statusText == 'Not Found'){
                        alert('página não encontrada')
                    }
                },
                'success':function(data){
                    $('#container').html(data)
                }
                
            })
            return false            
        })
    }

})