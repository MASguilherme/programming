function tabuada(n){
    output = [];
    for(let i = 1; i <= 10; i++){
        let resultado = i * n;
        output.push(resultado);
    }
    return output;
}

var output = tabuada(58);
console.log(`Resultado da tabuada: ${output}.`);
