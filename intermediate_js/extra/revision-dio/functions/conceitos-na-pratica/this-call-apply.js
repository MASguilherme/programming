const pessoa = {
    nome: "Miguel"
}

const animal = {
    nome: "Aristinho"
}

function getNome(){
    console.log("O nome é " + this.nome);
}

getNome.call(pessoa);
getNome.apply(animal);