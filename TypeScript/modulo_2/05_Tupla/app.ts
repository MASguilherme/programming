// EX 01 - Dados pessoais
let pessoa: [string, number, boolean];
pessoa = ["Guilherme", 21, false];
// console.log(pessoa);

// Ex 02 - Acessando o valor de tuplas
let pessoa1: [string, number, boolean ];
pessoa1 = ['Guilherme', 21, false];
// console.log(...pessoa1);

// ex 03 - Outra forma de usar tuplas (com labels)
let aluno: [nome: string, nota: number, aprovado: boolean];
aluno = ['José', 10, true];
// console.log(`Aluno ${aluno[0]} tirou a nota ${aluno[1]}. Aprovação: ${aluno[2]}`);

// Ex 04 - Usando Tuplas com Spread Operation
let listaFrutas: [string, ...string[]] = ['🍐', '🍓', '🍈', '🍇', '🍌'];
// console.log(...listaFrutas);

// Ex 05 - Lista Heterogênea de Tupla
let infoListaFruta: [number, boolean, ...string[]] = [10, false, ...listaFrutas];
// console.log(infoListaFruta);

// Ex 06 - Uso da função com tuplas
function ListaNomes(nomes: string[], idades: number[]){
    return [nomes, idades];
}
let infoListaNomes = ListaNomes(['Guilherme', 'Saulo'], [21, 17]);
// console.log(infoListaNomes);

// Ex 07 - Labeled Tuples com Spread Operator numa função

type Pessoa =
            | [firstName: string, lastName: string]
            | [firstName: string, middleName: string, lastName: string]
            | [firstName: string, middleName:string, lastName:string, age: number];

function CriarPessoa(...pessoa: Pessoa){
    return [...pessoa];
}

// console.log(CriarPessoa('Guilherme', 'Souza'));