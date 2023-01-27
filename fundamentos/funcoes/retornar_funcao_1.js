function retornar() {

    function bomDia() {
        return "Good Morning boy!!!";
    }

    return bomDia;
}
console.log(retornar);
console.log(retornar());
console.log(retornar()());


const umaFuncao = retornar();
console.log(umaFuncao());

function back() {

    function text(){
        return "Hello Mr. Lee!!";
    }

    return text();
}
console.log(back());
