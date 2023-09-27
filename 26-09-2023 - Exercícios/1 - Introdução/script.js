var nome = prompt(`Digite seu nome:`);

document.write(`<p> Seu nome é ${nome}.</p>`);
document.write(`<p> Seu nome possui ${nome.length} letras!</p>`);
document.write(`<p> Seu nome fica assim todo maiúsculo: ${nome.toUpperCase()}!</p>`);
document.write(`<p> Seu nome fica assim todo minúsculo: ${nome.toLowerCase()}!</p>`);

var n1 = Number(prompt(`${nome}, digite um número:`));
var n2 = Number(prompt(`${nome}, digite outro número:`));

document.write(`A soma dos números ${n1} e ${n2} é ${n1 + n2}!`)

