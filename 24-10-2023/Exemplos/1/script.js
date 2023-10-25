// const minhaPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Operação concluída!");
//     }, 1000);
// });

// console.log(minhaPromise);

// minhaPromise.then((resultado) => {
//     console.log(resultado);
// })


// Callback:
// function somaNumeros (sucesso, erro) {
//     let result = 1 + 1;
    
//     if(result == 2){
//         sucesso();
//     } else {
//         erro();
//     }
// }

// function sucesso (){
//     console.log(`Deu certo, número 2`);
// }

// function erro(){
//     console.log(`Erroooooou`);
// }

// somaNumeros(sucesso,erro);

//Promisse:
let promise = new Promise ((resolve, reject) => {
    let result = 1 + 1;
    
    if(result == 2){
        resolve(`Deu certo, número 2!`);
    } else {
        reject(`Errooooou.`);
    }
})

promise
    .then((mensagem) => {
        console.log('Then', mensagem);
    }).catch((erro) => {
        console.log('Catch', erro);
    })