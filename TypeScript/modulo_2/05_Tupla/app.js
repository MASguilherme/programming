"use strict";
// EX 01 - Dados pessoais
let pessoa;
pessoa = ["Guilherme", 21, false];
// console.log(pessoa);
// Ex 02 - Acessando o valor de tuplas
let pessoa1;
pessoa1 = ['Guilherme', 21, false];
// console.log(...pessoa1);
// ex 03 - Outra forma de usar tuplas (com labels)
let aluno;
aluno = ['José', 10, true];
// console.log(`Aluno ${aluno[0]} tirou a nota ${aluno[1]}. Aprovação: ${aluno[2]}`);
// Ex 04 - Usando Tuplas com Spread Operation
let listaFrutas = ['🍐', '🍓', '🍈', '🍇', '🍌'];
// console.log(...listaFrutas);
// Ex 05 - Lista Heterogênea de Tupla
let infoListaFruta = [10, false, ...listaFrutas];
// console.log(infoListaFruta);
// Ex 06 - Uso da função com tuplas
function ListaNomes(nomes, idades) {
    return [nomes, idades];
}
let infoListaNomes = ListaNomes(['Guilherme', 'Saulo'], [21, 17]);
function CriarPessoa(...pessoa) {
    return [...pessoa];
}
console.log(CriarPessoa('Guilherme', 'Souza'));
