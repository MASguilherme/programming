"use strict";
// ==> String [Type Annotation]
let nome = "Guilherme Souza";
console.log(nome);
// ==> Array [Type Annotation]
let arrAnimals = ['Elephant', 'Lion', 'Pig', 'Dog'];
console.log(arrAnimals);
// ==> Object [Type Annotation]
let model;
model = { name: 'Fox', price: 25000, year: 2000 };
console.log(model);
// ==> Function [Type Annotation]
function multiplicarNumeros(num1, num2) {
    return num1 * num2;
}
console.log(`Resultado: ${multiplicarNumeros(2, 6)}`);
