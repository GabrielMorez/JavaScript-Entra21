function adicionar(){
    if(tarefa.value === null || tarefa.value === ''){
        alert('Informe uma tarefa!')
        tarefa.focus();
    } else {
        infoTarefa.descricao = tarefa.value;
        infoTarefa.status = false;
        
        alocaTarefaLinha(infoTarefa.descricao);

        listaDeTarefas.push(infoTarefa);

        limpaCampo(tarefa);
    }
}

function alocaTarefaLinha(descTarefa){
    let check = document.createElement('input');
    let remover = document.createElement('button');
    let linha = document.createElement('li');
    let tarefa = document.createTextNode(descTarefa);
    let posicao = document.getElementsByTagName('ul')[0];

    check.setAttribute('type','checkbox');
    check.setAttribute('name','checkBox');
    check.setAttribute('id',`checkBox${listaDeTarefas.length}`);
    linha.setAttribute('id',`linha${listaDeTarefas.length}`);
    linha.appendChild(check);
    linha.appendChild(tarefa);
    remover.appendChild(document.createTextNode('Remover'))
    remover.setAttribute('id',`remover${listaDeTarefas.length}`);
    linha.appendChild(remover);
    posicao.appendChild(linha);

    check.addEventListener('click', () => {
        concluirTarefa(check.id);
    });

    remover.addEventListener('click', () => {
        removeTarefa(remover.id);
    });
}

function limpaCampo(elemento){
    elemento.value = '';
}

function concluirTarefa(id){
    
    let elementoCheck = document.getElementById(id);
    let elementoPai = elementoCheck.parentElement;

    if(elementoCheck.checked){
        elementoPai.setAttribute('class','concluido');
    } else{
        elementoPai.setAttribute('class','linha');
    }
}

function removeTarefa(id){
    let elementoBotao = document.getElementById(id);
    let elementoLinha = elementoBotao.parentElement;
    let elementoLista = elementoLinha.parentElement;

    elementoLista.removeChild(elementoLinha);
}

var infoTarefa = new Object();
var listaDeTarefas = [];

const incluirTarefa = document.getElementById('incluir');
const lista = document.getElementById('lista');
const tarefa = document.getElementById('tarefa');

incluirTarefa.addEventListener('click', adicionar);