const alunos = [
  {
    nome: "Guilherme",
    nota: 10,
    turma: "1° B",
  },
  {
    nome: "Paula",
    nota: 5,
    turma: "1° A",
  },
  {
    nome: "John",
    nota: 6,
    turma: "1° C",
  },
  {
    nome: "Gilberto",
    nota: 2,
    turma: "1° C",
  },
];

function alunosAprovados(arr, media) {
  let aprovados = [];
 
  for (let i = 0; i < arr.length; i++) {
    const { nome, nota } = arr[i];
    if (nota >= media) {
      aprovados.push(nome);
    }
  }
  return aprovados;
}

function AlunosReprovados(arr, media){
    let reprovados = [];
    
  for (let i = 0; i < arr.length; i++) {
    const { nome, nota } = arr[i];
    if (nota < media) {
      reprovados.push(nome);
    }
  }
  return reprovados;
}

console.log(`Os alunos aprovados foram ${alunosAprovados(alunos, 6)}`);

console.log(`Os alunos reprovados foram ${AlunosReprovados(alunos, 6)}`);

