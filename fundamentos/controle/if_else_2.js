const hora = 18.30;
let saudacao;

if (hora < 12){
    saudacao = 'Bom dia';
} else {
    saudacao = "Boa tarde";
}
if (hora >= 18){
    saudacao = 'Boa noite';
}

console.log(saudacao);