//Callback:
// const melhorDev = 'Joao';

// function quemEMelhor(callback, erroCallback){
//     if(melhorDev != 'Fernanda' && melhorDev != 'Andre'){
//         erroCallback({
//             name: "Está errado",
//             message: `${melhorDev}? Sério?`,
//         })
//     } else {
//         callback({
//             name: melhorDev,
//             message: "Somos os melhores!"
//         })
//     }
// }

// quemEMelhor((result) => {
//     console.log(`${result.name}? Uhuuuu ${result.message}`);
// }, (erro) => {
//     console.log(`${erro.name} ${erro.message}`);
// })

//Promise:

const melhoredev = 'João'

function quemEMelhor() {
    return new Promise((resolve, reject) => {
        if(melhoredev != 'Fernanda' && melhoredev != 'Andre'){
            reject({
                name: "Está errado",
                message: melhoredev + ' ? Sério?'
            })
        } else {
            resolve({
                name: melhoredev,
                message: 'Somos os melhores!'
            })
        }
    })
}

quemEMelhor()
    .then((result) => {
        console.log(result.name + '? Uhuu' + result.message);
    })
    .catch((erro) => {
        console.log(erro.name + ' ' + erro.message);
    });