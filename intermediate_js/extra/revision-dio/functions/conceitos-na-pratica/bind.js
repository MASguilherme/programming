const retornaNome = function(){
    console.log(`Seu nome é ${this.nome}, você tem ${this.idade} anos de idade.`);
}

let bruno = retornaNome.bind({nome: "Bruno", idade: 20});

bruno();