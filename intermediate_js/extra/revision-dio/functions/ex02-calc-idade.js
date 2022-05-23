const pessoa = {
    nome: "José",
    idade: 10
}

function calcIdade(anos){

    return `Daqui ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`
}

let resultadoCall = calcIdade.call(pessoa, 10);

let resultadoApply = calcIdade.apply(pessoa, [10]);

console.log(resultadoCall);

console.log("------------------");

console.log(resultadoApply);
