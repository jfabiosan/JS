//Operador Logico AND (&&)
let temDinheiro = true;
let estaEnsolarado = true;
//para ser verdadeiro os dois precisam ser verdadeiros pois só com dinheiro e com sol pra sair ao shopping
let resultadoAND = temDinheiro && estaEnsolarado;
console.log("AND Vai para o shopping? "+ resultadoAND);


//Operador Logico OR (||)
let saldoDebito = true;
let saldoCredito = true;
/*para ser verdadeiro somente um ou os dois precisam ser verdadeiros pois so com saldo em alguma modalidade
para comprar */
let resultadoOR = saldoDebito || saldoCredito;
console.log("\nOR Vou comprar no mercado? " +resultadoOR);

//Operador Logico XOR (^)bit a bit (!=) booleano exemplo:
console.log("\nXOR " +(true ^ false));
console.log("XOR " +(true != false));

let carro = false;
let moto = true;
//para ser verdadeiro somente um pode ser verdadeiros pois nao consegue pilotar os dois ao mesmo tempo.
let resultadoXOR = carro != moto;
console.log("XOR Consigo pilotar? " +resultadoXOR);

//Operador Logico NOT
console.log('\nResultado não verdadeiro: ' +!true);
console.log('Resultado não falso: ' +!false);

console.log("\nDiferença do AND para o relacional igual");
console.log('Resultado verdadeiro para o relacional de igualdade: ' +(false == false));
console.log('Resultado falso para (AND): ' +(false && false));