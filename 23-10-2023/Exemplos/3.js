const functionPrincipal = (parametro) => {
    const valor = 77;

    parametro(valor);
}

const callbackson = (number) => {
    console.log(number);
}

functionPrincipal(callbackson);