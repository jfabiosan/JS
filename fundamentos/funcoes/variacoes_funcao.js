// #1 funcao com parametro e com retorno
function somar(a, b) {
    return a +b;    
}

let result = somar(50, 36);
console.log(`primeiro resultado ${result}`);
console.log(`segundo resultado ${somar(30, 36)}`);

// #2 funcao com parametro e sem retorno
function somar2(a, b){
    console.log(a + b); 
}
somar2(40, 36);
let n = somar2(10, 15);
console.log(n);

//#3 funcao sem parametro e com retorno
function dataEhora(){
    return new Date();
}
console.log(dataEhora());

//#4 funcao sem parametro e sem retorno
function horaAtual(){
    console.log(new Date().getHours());
}
horaAtual();