function obterUsuario(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: "Aladin",
            dataNacimento: new Date(),
        });
    }, 1000);
}

function obterTelefone(idUsuario, callback) {
    setTimeout(function () {
        return callback(null, {
            telefone: 997445151,
            ddd: 47,
            userId: 1,
        });
    }, 2000);
}

obterUsuario(function (erro, usuario) {
    if(usuario.id === undefined){
        erro = `Usuário inexistente`
        return console.log(erro);
    } else {
        obterTelefone(usuario.id, function (erro, telefoneUsuario) 
        {
            if(telefoneUsuario === undefined){
                erro = `Telefone inexistente`
                return console.log(erro);
            } else if (usuario.id === telefoneUsuario.userId) {
                telefoneComDDD = `(${telefoneUsuario.ddd}) ${telefoneUsuario.telefone}`
                usuario = {
                           nome: usuario.nome, 
                           telefone: telefoneComDDD,
                          }
                return console.log(usuario);
            } else {
                erro = `Não identifiquei o telefone deste usuário`
                usuario = {
                            nome: usuario.nome, 
                            telefone: erro,
                          }
                return console.log(usuario);
            }
        })
    }
})