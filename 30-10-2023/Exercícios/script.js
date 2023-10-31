function consultaClientes(){
    fetch('http://localhost:3000/clientes')
    .then(response => response.json())
    .then(clientes.forEach(cliente => {
        let posicao = document.getElementsByTagName("tr")[0]
        let linha = document.createElement("tr");
        let id = document.createElement("th");
        let nome = document.createElement("td");
        let email = document.createElement("td");
        let fone = document.createElement("td");

        listaClientes.appendChild(linha);
        linha.appendChild(id);
        id.createTextNode(cliente.id);
        linha.appendChild(nome);
        nome.createTextNode(cliente.nome);
        linha.appendChild(email);
        email.createTextNode(cliente.nome);
        linha.appendChild(fone);
        fone.createTextNode(cliente.nome);
        posicao.appendChild(linha);
    }))
    .catch()
}

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const cadastrar = document.getElementById("cadastrar");
const pesquisar = document.getElementById("pesquisar");
const listaClientes = document.getElementById("listaClientes");

pesquisar.addEventListener('click', consultaClientes);