var p1 = new pessoa ('Guilherme','20','70')
function pessoa (nome, idade, peso){
    this.nome = nome
    this.idade = idade
    this.peso = peso
    console.log(`Seu nome é ${this.nome} você tem ${this.idade} anos e pesa ${this.peso} Kg.`)
}

if(p1.peso >= 70){
    console.log(`Você está muito gordo, com ${p1.peso} Kg.`)
}else{
    console.log(`Você está bem magro com ${p1.peso} Kg.`)
}