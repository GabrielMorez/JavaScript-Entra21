function apresentaMensagem(){
    mensagem.innerHTML = 'Obrigado pela paciência.'
}

const mensagem = document.getElementById('mensagem');

setTimeout(apresentaMensagem, 5000);