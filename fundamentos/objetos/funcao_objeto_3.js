function Data(dia=1, mes=1, ano=2000){
    this.dia= dia;
    this.mes= mes;
    this.ano= ano;
}

const d1 = new Data();
const d2 = new Data(23, 07, 1981);

console.log(d1);
console.log(d2);