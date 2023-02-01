const notas=[1,3,5,8,9,10,20];

let valores = '';

for(let n of notas){
    valores +=n +' ';
}

console.log(valores);

let indices = '';
for(let x in notas){
    indices +=x + ' ';
}
console.log(indices);