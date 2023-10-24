function minhaFuncao(nome){
    return nome
}

let meuNome = minhaFuncao('Gabriel');

console.log(meuNome);

const anonima = function (){
    console.log('anônima');
}

anonima();

const arrowFunction = () => {
    console.log('Arrow function');
}

const arrowFunctionInline = um => console.log('Arrow function', um);

arrowFunction();
arrowFunctionInline('Um');