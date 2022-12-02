"use strict";
// ==> Ex 01 - Uso de colchetes:
let frutas = ["Abacaxi", "Banana", "Tomate", "Goiaba"];
// console.log('frutas: ' + frutas[3]);
// ==> Ex 02 - Object Array:
let frutas01 = ["Abacaxi", "Banana", "Tomate", "Goiaba"];
// console.log('frutas01: ' + frutas01[0]);
let listaNumeros = [52, 65, 84, 52.5565656];
// console.log('Lista de números: ' + listaNumeros);
// ==> EX 03 - Adicionando com push
let arrPush = ["Guilherme", "João"];
arrPush.push("José");
// console.log(arrPush);
//  ==> EX 04 - Length do Array
let idiomas = ["Mandarim", "Francês", "Português"];
// console.log("Comprimento do array: " + idiomas.length);
// ==> EX 05 Spread Operator
let numeros = [1, 2, 3, 4, 5];
let comida = ['arroz', 'feijão', 'batata'];
numeros = [...numeros, 6, 7, 8, 9, 10];
// console.log(numeros);
//  EX 06 Array com laço de Repetição
let linguagensArr = new Array('Java', 'TypeScript', 'Python', 'PHP');
const ListaLinguagens = (linguagens) => {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagensArr[i]);
    }
};
ListaLinguagens(linguagensArr);
