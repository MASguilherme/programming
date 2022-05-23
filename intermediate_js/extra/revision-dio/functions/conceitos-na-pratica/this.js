const pessoa = {
    firstName: "Guilherme",
    lastName:"Souza",
    age: 21,
    weight: "80kg",
    height: 1.75,
    fullName: function(){
        return `${this.firstName} ${this.lastName}`;
    },
    WeightAndHeight: function(){
        return `Weight: ${this.weight} Height: ${this.height}`;
    }
}

console.log(pessoa.fullName());
console.log(pessoa.WeightAndHeight());