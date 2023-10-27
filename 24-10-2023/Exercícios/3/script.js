function obterUsuario() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      return resolve({
        id: 1,
        nome: "Aladin",
        dataNascimento: new Date(),
      });
    }, 1000);
  });
}
 
function obterTelefone(idUsuario) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      return resolve({
        telefone: "997445151",
        ddd: 47,
      });
    }, 2000);
  });
}
 
const usuarioPromise = obterUsuario();
 
usuarioPromise
  .then((usuario) => {
    return obterTelefone(usuario.id)
    .then((tudo) => {
      return {
        user: {
          nome: usuario.nome,
          telefone: tudo.telefone,
        },
      };
    });
  })
  .then(function (resultado) {
    console.log("Sucesso", resultado);
  })
  .catch(function (error) {
    console.error("Deu ruim", error);
  });