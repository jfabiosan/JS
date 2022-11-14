const t1 = false;
const t2 = false;

let comprartv50 = t1 && t2;
console.log('Vamos comprar a tv de 50"?', comprartv50);

let comprartv32 = t1 !== t2;
console.log('Vamos comprar a tv de 32"?', comprartv32);

let tomarSorvete = t1 || t2;
console.log("Vamos tomar sorvete?", tomarSorvete);

let ficarCasa = !tomarSorvete;
console.log('Vamos ficar em casa?', ficarCasa);