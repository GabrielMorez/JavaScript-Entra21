const arrayNumeros = [1,1,3,3,5,5];

const promise = new Promise((resolve, reject)=>{
    let resultado = arrayNumeros.filter((numero) => numero % 2 === 0);
    if(resultado.length === 0){
        reject('Não existe números pares na lista informada.')
    } else {
        resolve(`A lista de pares é ${resultado}`)
    }
})


promise
    .then((resolve) => {
        console.log(resolve);
    })
    .catch((reject) => {
        console.log(reject);
    })