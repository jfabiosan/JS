function executar(fn){
    if(typeof fn === "function"){
        console.log(fn(90,50));
    }
}

function soma(a,b){
    return a+b;
}

executar(soma);