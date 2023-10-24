const arrayNumeros = [1,2,3,4,5,6];

const funcaoPrincipal = (numeros, callback) => {
    resultado = callback(numeros);
    return resultado;
}

const buscaPares = (numeros) => {
    let resultado = numeros.filter((numero) => numero % 2 === 0);
    return console.log(`Os pares de ${numeros} é ${resultado}.`);
}

funcaoPrincipal(arrayNumeros,buscaPares);