function calculaIdade(){
    let dataAtual = new Date();
    let diferenca = dataAtual - dataNascimento.valueAsNumber
    let idade = Math.trunc(diferenca / (1000 * 60 * 60 * 24 * 30 * 12))

    if(isNaN(diferenca)){
        alert(`Informe uma data válida`);
        data1.focus();
        return
    }

    resultado.innerHTML = `Você tem ${idade} anos!`;
}

const dataNascimento = document.getElementById('dataNascimento');
const resultado = document.getElementById('resultado');
const calcular = document.getElementById('calcular');

calcular.addEventListener('click',calculaIdade)