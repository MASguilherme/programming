// ==> Ex 01 - Uso de colchetes:

let frutas: string[] = ["Abacaxi", "Banana", "Tomate", "Goiaba"];
// console.log('frutas: ' + frutas[3]);

// ==> Ex 02 - Object Array:
let frutas01: Array<string> = ["Abacaxi", "Banana", "Tomate", "Goiaba"];
// console.log('frutas01: ' + frutas01[0]);

let listaNumeros: Array<number> = [52, 65, 84, 52.5565656];
// console.log('Lista de números: ' + listaNumeros);

// ==> EX 03 - Adicionando com push
let arrPush: Array<string> = ["Guilherme", "João"];
arrPush.push("José");
// console.log(arrPush);

//  ==> EX 04 - Length do Array
let idiomas: Array<string> = ["Mandarim", "Francês", "Português"];
// console.log("Comprimento do array: " + idiomas.length);

// ==> EX 05 Spread Operator
let numeros: Array<number> = [1, 2, 3, 4, 5];
let comida: Array<string> = ['arroz', 'feijão', 'batata'];
numeros = [ ...numeros, 6, 7, 8, 9, 10];
// console.log(numeros);


//  EX 06 Array com laço de Repetição

let linguagensArr: string[] = new Array('Java', 'TypeScript', 'Python', 'PHP');

const ListaLinguagens  = (linguagens: string[]) => {
    for(let i = 0; i < linguagens.length; i++){
        console.log(linguagensArr[i]);
    }
}

ListaLinguagens(linguagensArr);
