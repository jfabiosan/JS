function executar (param){
    console.log(param());
}

function bomDia(){
    return "Bom dia";
}

executar(bomDia);

let x = bomDia
console.log(x())

let y = bomDia()
console.log(y)