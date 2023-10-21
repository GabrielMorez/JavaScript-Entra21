// function exibirMensagem() {
//     let mensagem = document.querySelector('#mensagem');
//     mensagem.innerHTML = 'A mensagem após 3 segundos.'
// }

// setTimeout(exibirMensagem, 3000);

var contador = 1;

function atualizadoContador(){
    var contadorHTML = document.getElementById('contador')
    contadorHTML.innerHTML = 'Contagem ' + contador;
    contador++;
}

var intervalo = setInterval(atualizadoContador,1000);

setTimeout(function () {
    clearInterval(intervalo);
    document.getElementById('contador').innerHTML = 'Contagem finalizada!'
}, 10000);