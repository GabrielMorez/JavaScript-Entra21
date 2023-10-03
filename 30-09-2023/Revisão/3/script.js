const enviar = document.getElementById("enviar");

enviar.addEventListener('click',function (){
    var pessoas = document.getElementById("pessoas").value;
    var gramaPessoa = document.getElementById("gramaPessoa").value;
    var tipoCarne = document.getElementById("tipoCarne").value;
    var precoCarne = document.getElementById("precoCarne").value;

    var kgCarne = ((pessoas * gramaPessoa) / 1000);
    var valorCarne = (precoCarne * kgCarne);

    if(pessoas > 10){
        valorCarne = valorCarne * 1.10
    }

    document.getElementById("resultado").innerHTML = `Comprar ${kgCarne.toFixed(2)} kg com R$${valorCarne.toFixed(2)} para ${pessoas} pessoas e o total por pessoa é de R$${(valorCarne/pessoas).toFixed(2)}`
})