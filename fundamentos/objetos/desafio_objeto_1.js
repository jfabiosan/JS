const nascimento = {
    dia: 1,
    mes: 02,
    ano: 2023,
    exibirData: function(){
        return `${this.dia}/${this.mes}/${this.ano}`;
}
};

console.log(nascimento.exibirData());
console.log(nascimento.mes);