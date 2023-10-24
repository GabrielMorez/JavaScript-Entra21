const arrayNumeros = [5,7,8,10,20]

const calculaMedia = (numeros, callback) => {
    let media = callback(numeros);
    return console.log(`A média de ${numeros} é ${media}.`);
}

const callback = (numeros) => {
        let soma = numeros.reduce((total, numero) => total + numero, 0);
        return soma / numeros.length
}

calculaMedia(arrayNumeros, callback)