{
    function diferencaDias(){
        let dataDe = data2.valueAsNumber;
        let dataAte = data1.valueAsNumber;
        let diferencaDias = Math.abs(dataDe - dataAte);

        if(isNaN(diferencaDias)){
            alert(`Informe datas válidas`);
            data1.focus();
            return
        }
        
        resultado.value = diferencaDias / (1000 * 60 * 60 * 24) + ' dias';
    }

    const data1 = document.getElementById('data1');
    const data2 = document.getElementById('data2');
    const resultado = document.getElementById('resultado');
    const calcular = document.getElementById('calcular');

    calcular.addEventListener('click', diferencaDias)
}