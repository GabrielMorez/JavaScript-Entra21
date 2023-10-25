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
                resolve(usuario)
            }
        });
    }, 1000);
}

function obterTelefone(idUsuario, tel) {
    setTimeout(function () {
        return new Promise((resolve, reject) => {
            if(isNan(idUsuario)){
                reject(`Id inválido para consulta. Verifique.`) 
            } else{
                resolve(tel)
            }
        });
    }, 2000);
}
