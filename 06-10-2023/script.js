function adicionar(){
    infoTarefa.descricao = tarefa.value
    infoTarefa.status = 'Não concluída'

    alocaTarefaLinha(infoTarefa.descricao)

    listaDeTarefas.push(infoTarefa)
}

function alocaTarefaLinha(descTarefa){
    let check = document.createElement('input');
    let linha = document.createElement('li');
    let tarefa = document.createTextNode(descTarefa);
    let posicao = document.getElementsByTagName('ul')[0];
    
    check.setAttribute('type','checkbox');
    linha.appendChild(check);
    linha.appendChild(tarefa);
    posicao.appendChild(linha);
}

var infoTarefa = new Object();
var listaDeTarefas = [];

const incluirTarefa = document.getElementById('incluir')
const lista = document.getElementById('lista')
const tarefa = document.getElementById('tarefa')

incluirTarefa.addEventListener('click', adicionar)