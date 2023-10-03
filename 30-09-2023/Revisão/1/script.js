const enviar = document.getElementById("enviar")

enviar.addEventListener('click',function (){
    var nome = document.getElementById("nome").value
    var sobrenome = document.getElementById("sobrenome").value

    document.getElementById("nomeSobrenome").value = `${nome} ${sobrenome}`
})