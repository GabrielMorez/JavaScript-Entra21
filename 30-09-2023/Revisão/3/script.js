const enviar = document.getElementById("gravar");

enviar.addEventListener('click',function (){
    
    var dadosPessoa = new Object();
    dadosPessoa.nome = document.getElementById("nome").value
    dadosPessoa.idade = document.getElementById("idade").value
    dadosPessoa.estadoCivil = document.getElementById("estadoCivil").value

    document.getElementById("resultado").innerHTML = ''
    document.getElementById("nome").value = ''
    document.getElementById("idade").value = ''
    document.getElementById("estadoCivil").value = ''

    console.log(dadosPessoa);

})