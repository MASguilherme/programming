

function bellBoy(name, age, color){
    this.name = name;
    this.age = age;
    this.color = color;
    this.takeSuitCase = function () {
        console.log(`My name is ${name}, and I will take your suitcase.`);
    }
    
}


var boy1 = new bellBoy("Guilherme",21,"brown");

console.log(boy1.takeSuitCase());