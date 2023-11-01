function putCliente(id){

    fetch(`http://localhost:3000/clientes/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

function alteraCliente(id){
}

function deleteCliente(id){

    fetch(`http://localhost:3000/clientes/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

function postCliente(objeto){
    fetch('http://localhost:3000/clientes/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objeto)
        })
    .then(response => response.json())
    .catch(erro => erro.json())
}

function cadastraClientes(){

    let nomeCliente = nome.value;
    let emailCliente = email.value;
    let telefoneCliente = telefone.value;

    if(nomeCliente == false){
        validacoes.innerHTML = `O campo "Nome" está vazio. Verifique.`
    } else if(emailCliente == false){
        validacoes.innerHTML = `O campo "E-mail" está vazio. Verifique.`
    } else if(telefoneCliente == false){
        validacoes.innerHTML = `O campo "Telefone" está vazio. Verifique.`
    } else {
        let objetoCliente = {
            nome: nomeCliente,
            email: emailCliente,
            fone: telefoneCliente 
        }
        postCliente(objetoCliente)
    }
}

function getClientes(){
    fetch('http://localhost:3000/clientes/')
    .then(response => response.json())
    .then((response) => apresentaClientes(response))
    .catch(erro => console.error(erro))
}

function apresentaClientes(response){
    let clientes = response;

    listaClientes.innerHTML = ''

    clientes.forEach(cliente => {
    let linha = document.createElement("tr");
    let id = document.createElement("th");
    let nome = document.createElement("td");
    let email = document.createElement("td");
    let fone = document.createElement("td");
    let acoes = document.createElement("td");
    let remover = document.createElement("button");
    let alterar = document.createElement("button");
    let posicao = cliente.id
    
    listaClientes.appendChild(linha);
    linha.appendChild(id);
    id.appendChild(document.createTextNode(cliente.id));
    linha.appendChild(nome);
    nome.appendChild(document.createTextNode(cliente.nome));
    linha.appendChild(email);
    email.appendChild(document.createTextNode(cliente.email));
    linha.appendChild(fone);
    fone.appendChild(document.createTextNode(cliente.fone));

    linha.appendChild(acoes);

    acoes.appendChild(alterar);
    alterar.setAttribute('id', posicao)
    alterar.appendChild(document.createTextNode('Alterar'))
    alterar.setAttribute('class','btn btn-info');
    alterar.setAttribute('type','button');

    acoes.appendChild(remover);
    remover.setAttribute('id', posicao)
    remover.appendChild(document.createTextNode('Remover'));
    remover.setAttribute('class','btn btn-danger');
    remover.setAttribute('type','button');

    remover.addEventListener('click', () => {
        deleteCliente(remover.id)
    })

    alterar.addEventListener('click', () => {
        alteraCliente(alterar.id)
    })
    });
}

function limpaConsulta(){
    listaClientes.innerHTML = ''
}

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const cadastrar = document.getElementById("cadastrar");
const pesquisar = document.getElementById("pesquisar");
const listaClientes = document.getElementById("listaClientes");
const limpaBusca = document.getElementById("limpar");
const validacoes = document.getElementById("retornaValidacoes");

cadastrar.addEventListener('click', cadastraClientes);
pesquisar.addEventListener('click', getClientes);
limpaBusca.addEventListener('click', limpaConsulta);