/*Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
    função) e com ponto de exclamação "!" no final.
    Exemplos:
    cumprimentar("Leonardo") // retornará "Olá, Leonardo!"
    cumprimentar("Maria") // retornará "Olá, Maria!"
*/
function cumprimentar (nome){
    console.log(`Olá, ${nome}`);
}
cumprimentar('Leonardo!');

/*Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e
desconsidere também dias decorridos desde o último aniversário.
Exemplos:
converterIdadeEmAnosParaDias(25) // retornará 9125
converterIdadeEmAnosParaDias(70) // retornará 25550
*/

function convertIdade (idade){
    const diasAno = 365;
    return idade * diasAno;
}
console.log(convertIdade(25));
console.log(convertIdade(70));

/*Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês.
Exemplos:
calcularSalario(150, 40.5) // retornará "Salário igual a R$ 6075"
*/
function calculaSalario (horas, valorHora){
    return horas * valorHora;
}
console.log(`"Salario igual a R$ ${calculaSalario(150, 40.5)}"`);

/*Crie uma função que recebe um número (de 1 a 12  e retorne o mês correspondente como uma string. Por
    exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
    Exemplos:
    nomeDoMes(1) // retornará "janeiro"
    nomeDoMes(4) // retornará "abril"
*/
function nomeDoMes (mes){
    switch (mes){
        case 1:
            return "Janeiro";
        case 2:
            return "Fevereiro"
        case 3:
            return "Março"
        case 4:
            return "Abril"
        case 5:
            return "maio"
        case 6:
            return "Junho"
        case 7:
            return "Julho"
        case 8:
            return "Agosto"
        case 9:
            return "Setembro"
        case 10:
            return "Outubro"
        case 11:
            return "Novembro"
        case 12:
            return "Dezembro"
            
    } 
}
console.log(nomeDoMes(12));
