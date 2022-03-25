function contar(){

    // let  == var
    let inicio = window.document.getElementById('txtinicio')
    let fim = window.document.getElementById('txtfim')
    let passo = window.document.getElementById('txtpasso')
    let res = window.document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO!] Os campos não podem estar em branco!')
    }else{
        res.innerHTML = 'Contando: '
        i = Number(inicio.value)
        f = Number(fim.value)
        p = Number(passo.value)
        if(p <= 0){
            window.alert('passo inválido!')
        }else if( i <= f){
            // contagem crescente
        for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} Saulo Zé Oreia \u{1F442} ` 
        }
        res.innerHTML += ` END \u{2620} do Saulo Zé Oreia \u{1F442} `
         }else{
            //  contagem regressiva
             for(let c = i; c>= f; c-= p){
                res.innerHTML += ` ${c} Saulo Zé Oreia \u{1F442} `
             }
             res.innerHTML += ` END \u{2620} do Saulo Zé Oreia \u{1F442} `
         }
    }
}
