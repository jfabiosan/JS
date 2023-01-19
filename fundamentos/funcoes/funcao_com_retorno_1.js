function sempreRetornaUm(){
    return 1;
}

function textoOuNumero(retornaTexto){
 //  return retornaTexto ? "souTexto" : 123;
    if (retornaTexto){
        return "sou Texto";
    }
    return 123;
}

let valor = sempreRetornaUm() + 999;
console.log(valor);

console.log(textoOuNumero(true));

console.log(textoOuNumero(false));    