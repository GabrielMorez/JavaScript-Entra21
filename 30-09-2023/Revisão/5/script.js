function limparAdicionar(){
    document.getElementById("titulo").value = ''
    document.getElementById("autor").value = ''
    document.getElementById("anoPublicacao").value = ''
}

function limparBuscar(){
    document.getElementById("filtro").value = ''
}

function adicionar(){
    var livro = new Object();
    livro.titulo = document.getElementById("titulo").value;
    livro.autor = document.getElementById("autor").value;
    livro.anoPublicacao = document.getElementById("anoPublicacao").value;

    limparAdicionar();

    livros.push(livro);

}

function buscar(){
    let consultaLivro = livros.find(({titulo}) => titulo === document.getElementById("filtro").value)

    document.getElementById("tituloEncontrado").innerHTML = consultaLivro.titulo;
    document.getElementById("autorEncontrado").innerHTML = consultaLivro.autor;
    document.getElementById("anoEncontrado").innerHTML = consultaLivro.anoPublicacao;

    limparBuscar()

}

const adicionarLivro = document.getElementById("adcLivro")
const consultarLivro = document.getElementById("buscarLivro")
var livros = [];

adicionarLivro.addEventListener('click', adicionar)
consultarLivro.addEventListener('click', buscar)
