function buscarDados(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const dados = { nome: "Usuário Exemplo", idade: 25};
            if(Math.random() < 0.2){
                reject(new Error("Erro ao obter dados da API."));
            } else {
                resolve(dados);
            }
        }, 2000)
    })
}

async function processarDados(){
    const buscar = await buscarDados();

    try {
        console.log(`${buscar.nome} tem ${idade} anos!`);
    } catch {
        console.error(buscar);
    }
}

processarDados();