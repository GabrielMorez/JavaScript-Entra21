const carro = new Map();

carro.set("RLE1F12",{modelo: "Honda - CG", ano: 2022, cor: "Branca"})

console.log(carro);

const numeros = new Set([1,2,3,4,5,6])

console.log(numeros);
numeros.add(4)
console.log(numeros);

let dataAtual = new Date();

console.log(dataAtual);
console.log('Dia da semana', dataAtual.getDay());
console.log('Dia do mês', dataAtual.getDate());
console.log('Mês', dataAtual.getMonth(), '//Lembrando que é um array de 0-11');
console.log('Ano', dataAtual.getFullYear());
console.log(dataAtual.getTime());