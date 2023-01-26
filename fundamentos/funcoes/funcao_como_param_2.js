function executar(fn,n1=10,n2=20){
    if(typeof fn === "function"){
        console.log(fn(n1,n2));
    }
}

function soma(a,b){
    return a+b;
}
function subtrair(a,b){
    return a-b;
}
function multiplica(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

executar(soma,10,20);
executar(soma);
executar(subtrair,10,20);
executar(multiplica,10,20);
executar(divide,10,20);