function criarData(dia, mes, ano){
    return {
        dia,
        mes,
        ano,
        exibir(){
            return `${this.dia}/${this.mes}/${this.ano}`;
        }
    };
}

const d1 = criarData(01, 01, 2018);
const d2 = criarData(23, 07, 1981);

console.log(d1.exibir());
console.log(d2.exibir());