function SalaAula(alunos){
    this.alunos = alunos;
}

SalaAula.prototype = {
    adicionarAlunos: function(aluno){
        this.alunos.push(aluno);
    }
}

const minhaSala = new SalaAula(["João", "Maria"]);

minhaSala.adicionarAlunos("Pedro");
minhaSala.adicionarAlunos("Guilherme");

console.log(minhaSala.alunos);