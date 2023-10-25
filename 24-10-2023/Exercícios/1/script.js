const arrayNumeros = [5,7,15,10,20]

const promise = new Promise((resolve, reject) => {
    let soma = arrayNumeros.reduce((total, numero) => total + numero, 0);
    if (isNaN(soma)) {
        reject(`Foi informado um número inválido.`)
    } else {
        resolve(soma)
    }
})

promise
    .then((resolve) => {
        let media = resolve / arrayNumeros.length
        console.log(`A média é ${media}.`);
    })
    .catch((reject)=>{
        console.log(reject);
    })

