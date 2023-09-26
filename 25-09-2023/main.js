var n1 = prompt('Digite um numero: ');
var n2 = prompt('Digite outro numero: ');
var n1Convertida = Number(n1);
var n2Convertida = Number(n2);

var soma = n1Convertida + n2Convertida

var teste = soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

console.log(teste)

// var nome = prompt(`Digite o seu nome:`)

// document.write(`<h2> Seu nome é ${nome} </h2>`)
// document.write(`<p> Seu nome tem ${nome.length} caracteres </p>`)

// document.write(`<p> Seu nome maísculo fica ${nome.toUpperCase()}</p>`)
// document.write(`<p> Seu nome minúsculo fica ${nome.toLowerCase()}</p>`)
