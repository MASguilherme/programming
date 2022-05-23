const soma = {
    n1: 5,
    n2: 2
}

function somar(a, b){
    console.log(`A soma total é: ${this.n1 + this.n2 + a + b}`);
    
}

somar.call(soma, 5, 2);
// soma = 14.

const subtracao = {
    n1: 10,
    n2: 2
}

function subtrair(a, b){
    console.log(`A subtração total é: ${this.n1 - this.n2 - a - b}`)
}

subtrair.apply(subtracao, [2, 3]);
// subtração = 3