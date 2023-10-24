const saudar = (responder) => {
    const horaAtual = new Date().getHours();

    if(horaAtual <= 12){
        return responder(`Bom dia.`);
    } else if (horaAtual <= 18){
        return responder(`Boa tarde.`);
    } else {
        return responder(`Boa noite.`);
    }
}

const responderCallback = saudacao => console.log(saudacao);

saudar(responderCallback);
console.log(horaAtual);