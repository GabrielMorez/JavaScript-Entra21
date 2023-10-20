function comparaDatas(){
    let dataUm = data1.valueAsNumber;
    let dataDois = data2.valueAsNumber;

    if(isNaN(dataUm)){
        alert(`Data inválida. Verifique.`);
        data1.focus();
        return
    }else if(isNaN(dataDois)){
        alert(`Data inválida. Verifique.`);
        data2.focus();
        return
    }

    if(dataUm > dataDois){
        resultado.value = 'A primeira data é maior.'
    } else if(dataUm < dataDois){
        resultado.value = 'A segunda data é maior.'
    } else {
        resultado.value = 'As datas são iguais.'
    }
}

const data1 = document.getElementById('data1');
const data2 = document.getElementById('data2');
const resultado = document.getElementById('resultado');
const calcular = document.getElementById('calcular');

calcular.addEventListener('click',comparaDatas)