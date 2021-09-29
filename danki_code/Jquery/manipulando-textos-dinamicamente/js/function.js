$(function(){

 var text = $('.box1')
 var text2 = $('.box2')
 var itext = $('.inputtext')
 var clico = $('.box3')
 var btn_enviar = $('.btn-form')
 var btn_split = $('.btn-form2')
 let itext2 = $('.text2')
 let itext3 = $('.text3')
 var btn_enviar3 = $('.btn-form3')


    text.html('<div class="texto"><p>Meu texto que foi incluído com jquery</p></div>')
    text.html(text.html()+'adicionei mais uma linha')


    text2.text("Olá mundo pelo javascript")

    itext.val('texto no input text via javascript')

    clico.click(function(){
        clico.text('mudei o texto com o click em javascript')
    })

    btn_enviar.click(function(){
        btn_enviar(window.alert('Enviado'))
    })

    btn_split.click(function(){
        let valor = itext2.val()
        let valor2 = valor.split('@')
        window.alert(valor2)

        if(itex2 == 'gmail.com'){
            alert('e-mail validado.')
        }else(
            alert('E-mail inválido, aceitamos apenas gmail') 
        )
    })

    btn_enviar3.click(function(){
        let valor = itext3.val()
        let splittext = valor.split('@')
    
        if(splittext[1] == 'gmail.com'){
            alert('e-mail validado.')
        }else(
            alert('E-mail inválido, aceitamos apenas gmail') 
        )
    })

})


