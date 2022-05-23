const local = {
    rua: "Rua do limeiro",
    n: 170,
    bairro: "Silveira"
}

function dadosLocal(dados){
    // prop: variavel pode conter qualquer nome, a função dela é correr pelo objeto.
    for(prop in dados){
        console.log(dados[prop]);
    }
}

console.log(dadosLocal(local));