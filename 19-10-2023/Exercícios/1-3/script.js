//1)
{
    let dataAtual = new Date();
    console.log(dataAtual);
}

//2)
{
    let dataNascimento = new Date("2002-06-05");
    console.log(`Data de nascimento: dia ${dataNascimento.getUTCDate()} do ${(dataNascimento.getUTCMonth()+1)}º mês do ano de ${dataNascimento.getUTCFullYear()}`);
}

//3)
{
    let dataAtual = new Date();
    let dias = 20;
    let dataAjustada = new Date(dataAtual.setDate(dataAtual.getDate() + dias))

    console.log(dataAjustada);
}