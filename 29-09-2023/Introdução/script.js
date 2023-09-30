var array = [1,2,3,4,5,6,7,8,9,10];
var pares = array.filter((array) => array % 2 === 0); 

console.log(`Os números pares são ${pares}`);

var nomes = ['João','Maria','José','Paulo','Elias'];
var nomesMaiusculos = nomes.map((nomes) => (nomes.toUpperCase()));

console.log(`Os nomes maiúsculos são ${nomesMaiusculos}`);

var pessoas = ['João','Maria','José','Paulo','Elias'];
var saudacao = pessoas.forEach((pessoa) => (console.log(`Olá ${pessoa}, Tudo bem?`)));

var frutas = ['banana','maçã','melancia','pêssego','mamão','laranja']
var frutasComM = frutas.filter((frutas) => frutas.charAt(0) === 'm');
var frutasMaiusculas = frutasComM.map((frutasComM) => (frutasComM.toUpperCase()))

console.log(`As frutas são ${frutas}.`);
console.log(`As frutas que iniciam com "M" são ${frutasComM}.`);
console.log(`Seus nomes maiúsculos ficam assim ${frutasMaiusculas}.`);