class Data{
    constructor(dia=1, mes=6, ano=1981){
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    exibir(){
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}

const d1 = new Data();

const d2 = new Data(24, 12, 2002);

console.log(d1);
console.log(d1.exibir());
console.log(d2.exibir());

