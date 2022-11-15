const a = 8;
const b = 4;

const operador = "x"; // + - * /
const resultado = 
    operador == "+" ? a + b : 
        operador == "-" ? a - b : 
            operador == "*" ? a * b : 
                operador == "/" ? a / b : "Digite um operador valido (+ - * /)";

console.log(resultado);