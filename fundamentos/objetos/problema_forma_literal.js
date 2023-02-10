const d1 = {
    dia: 01,
    mes: 7,
    ano: 1981,
    exibirData: function(){
        return `${this.dia}/${this.mes}/${this.ano}`;
}
};

const d2 = {
    dia: 16,
    mes: 1,
    ano: 2018,
    exibirData: function(){
        return `${this.dia}/${this.mes}/${this.ano}`;
}
};

const d3 = {
    dia: 11,
    mes: 8,
    ano: 2022,
    exibirData: function(){
        return `${this.dia}/${this.mes}/${this.ano}`;
}
};

const d4 = {
    dia: 22,
    mes: 6,
    ano: 1981,
    exibirData: function(){
        return `${this.dia}/${this.mes}/${this.ano}`;
}
};

console.log(d1.exibirData());
console.log(d2.exibirData());
console.log(d3.exibirData());
console.log(d4.exibirData());