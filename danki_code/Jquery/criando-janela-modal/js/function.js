$(function(){

    let back = $('.bg')
    let bt = $('.botao')
    let close = $('#fechar')
    let sended = $('#enviado')
    let form = $('.container-form')

    // $(function(){
    //     let frase = 'guilherme@gmail.com'
    //     let encontrar = frase.match(/^(.*?)@(.*?)$/)
    //     if(encontrar != null) {
    //         console.log('Encontrei algo:')
    //         console.log(encontrar)
    //         console.log('detalhado:')
    //         console.log(encontrar[1])
    //         console.log(encontrar[2])

    //     }else{
    //         console.log('Não temos nada')
    //     }
    // })
  

    abrirJanela()
    fecharJanela()
    enviado()

    function abrirJanela(){
        bt.click(function(){
            back.fadeIn()
        })
    }

    function fecharJanela(){
        close.click(function(){
            back.fadeOut()
        })
        back.click(function(){
            back.fadeOut()
        })
    }
    function enviado(){
        sended.click(function(){
            alert('enviado!')
        })
    }

    form.click(function(e){
        e.stopPropagation()
    })


    $('form#form1').submit(function(){

        let nome = $('input[name=nome]').val()
        let telefone = $('input[name=tel').val()
        let email = $('input[nmae=email]').val()
    
        let amount = nome.split(' ').length
        let splitStr = nome.split(' ')
    
        // Contando a quantidade de espações e respectivos valores
        if(amount >= 2){
            for(let i = 0; i < amount; i++){
                if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
                    alert('Nome completo foi cadastrado sem números')
                }else{
                    alert('Nome completo não pode conter números ou começar com letra minuscula')
                    campoInvalido($('input[name=nome]'))
                    return false
                }
            }
        }else{
            alert('Nome completo não foi cadastrado!')
            campoInvalido($('input[name=nome]'))
            return false
        }
    })
    // el == elemento
    function campoInvalido(el){
        $('input[name=nome]').css('border','2px solid red')
        $('input[name=nome]').data('invalido','true')
    }

})


