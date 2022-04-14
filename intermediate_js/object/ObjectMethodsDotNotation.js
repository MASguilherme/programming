

function bellBoy(name, age, color){
    this.name = name;
    this.age = age;
    this.color = color;
    this.takeSuitCase = function takeSuitCase(){
        console.log("I take your suitCase!")
    }
    
}


var boy1 = new bellBoy("Guilherme",21,"brown");
console.log(boy1.takeSuitCase());