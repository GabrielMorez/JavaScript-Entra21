const enviar = document.getElementById("gravar");
var pessoas = []

enviar.addEventListener('click',function (){
    
    var dadosPessoa = new Object();
    dadosPessoa.nome = document.getElementById("nome").value
    dadosPessoa.idade = document.getElementById("idade").value
    dadosPessoa.estadoCivil = document.getElementById("estadoCivil").value

    pessoas.push(dadosPessoa);

    document.getElementById("resultado").innerHTML = ''
    document.getElementById("nome").value = ''
    document.getElementById("idade").value = ''
    document.getElementById("estadoCivil").value = ''

    pessoas.map(pessoa => {
        document.getElementById("resultado").innerHTML += (`${pessoa.nome} `)
    });
})