
function calcularMediaAluno(notas){
    const somaNotas = notas.reduce((acc,nota) => acc + nota, 0);
    return somaNotas / notas.length;
}

function adicionarMediaAluno(listaAlunos){
    listaAlunos.listaAlunos.forEach(aluno => {
        const mediaAluno = calcularMediaAluno(aluno.notas);
        if(mediaAlunos >= 7){

        } else {
            
        }
    });
}

var alunos = [
            {
                aluno: "João", 
                notas: [10,6,8,7.5]
            },
            {
                aluno: "Maria", 
                notas: [6,6.5,7,8]
            },
            {
                aluno: "José", 
                notas: [7.5,7,8,7.5],
            },
            {
                aluno: "Elias",
                notas: [10,9.5,8,8.5]
            }
        ]