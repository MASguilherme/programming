
// ==> String [Type Annotation]
let nome: string = "Guilherme Souza";
console.log(nome);

// ==> Array [Type Annotation]

let arrAnimals: string[] = ['Elephant', 'Lion', 'Pig', 'Dog'];
console.log(arrAnimals);

// ==> Object [Type Annotation]

let model: {
    name: string, 
    price: number, 
    year: number
}
model = {name: 'Fox',price: 25000,year: 2000};
console.log(model);

// ==> Function [Type Annotation]

function multiplicarNumeros(num1: number, num2:number){
    return num1 * num2;
}
console.log(`Resultado: ${multiplicarNumeros(2,6)}`);