const usuario = {
    id: 1,
    nome: "Aladin",
    dataNacimento: new Date(),
}

const telefone = {
    telefone: 997445151,
    ddd: 47,
}

function obterUsuario() {
    setTimeout(function () {
        return new Promise ((resolve, reject) => {
            if(isNaN(usuario.id)){
                reject(`Id inválido. Verifique.`) 
            } else {
                resolve(obterTelefone(usuario.id,telefone))
            }
        });
    }, 1000);
}

function obterTelefone(idUsuario, tel) {
    setTimeout(function () {
        return new Promise((resolve, reject) => {
            if(isNaN(idUsuario)){
                reject(`Id inválido para consulta. Verifique.`) 
            } else{
                resolve(console.log({
                    nome: usuario.nome,
                    telefone: `(${tel.ddd}) ${tel.telefone}` 
                 }));
            }
        });
    }, 2000);
}


obterUsuario();