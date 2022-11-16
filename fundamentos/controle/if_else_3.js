const hora = 0;

let saudacao;

if (hora < 12){
    saudacao = 'Bom dia';
} else{
    if (hora < 18){
        saudacao = 'Boa tarde';
    } else{
        if (hora >= 18 && hora <= 23.59){
        saudacao = 'Boa noite';
        } else{
            saudacao = "Hora Inválida!"

        }
    }
}

console.log(saudacao);
