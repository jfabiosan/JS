/*Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
    função) e com ponto de exclamação "!" no final.
    Exemplos:
    cumprimentar("Leonardo") // retornará "Olá, Leonardo!"
    cumprimentar("Maria") // retornará "Olá, Maria!"
*/
function saudacao (n){
    console.log(`Olá, ${n}`);
}
saudacao('Leonardo!');

/*Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e
desconsidere também dias decorridos desde o último aniversário.
Exemplos:
converterIdadeEmAnosParaDias(25) // retornará 9125
converterIdadeEmAnosParaDias(70) // retornará 25550
*/

function convertIdade (idade){
    return idade * 365;
}
console.log(convertIdade(25));
console.log(convertIdade(70));