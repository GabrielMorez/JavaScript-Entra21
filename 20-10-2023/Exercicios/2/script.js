function incrementarCem(){
    let valor = Number(valorInicial.value);
    let intervalo = setInterval(() => {
        progresso.value = valor + 100;
        valor = valor + 100;
    }, 1000)

    resultado.innerHTML = '';
    progresso.value = valor

    setTimeout(() => {
        clearInterval(intervalo);
        resultado.innerHTML = `Incrementei o número 100 3x, este foi o resultado ${valor}!`;
    }, 3000)
}

const valorInicial = document.getElementById('valorInicial');
const incrementar = document.getElementById('incrementar');
const progresso = document.getElementById('progresso');
const resultado = document.getElementById('resultado');

incrementar.addEventListener('click',incrementarCem)