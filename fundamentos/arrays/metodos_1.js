const numeros = [1,2,3,4,5];

numeros[0] = 100;
numeros[4] = 50;
numeros.push(6);
const numeros2 = numeros.concat(7,8,9);
numeros[5] = 60;

console.log(numeros.indexOf(4));
console.log(numeros.indexOf(3, 2));
console.log(numeros.includes(10));
console.log(numeros.join(' - '));
console.log(numeros.join(' '));
console.log(numeros);
console.log(numeros2);