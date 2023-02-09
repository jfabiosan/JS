const cliente = {
    codigo: 16532,
    nome: 'Ana',
    vip: true,
    endereco: {
        longradouro: 'Rua ABC',
        numero: 123,
        complemento: 'Apto 101 Bloco B',
        pontosRef: [
            'Hospital  X',
            'Shopping y',
        ]
    },
    nomeFilhos: ['Bia', 'Carlos', 'Gabriel']

}

console.log(cliente.nomeFilhos[1]);
console.log(cliente.endereco.complemento);
console.log(cliente.endereco.pontosRef[0]);