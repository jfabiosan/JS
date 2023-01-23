/*3 funcoes para criar algoiritmo se aluino esta arpovado reprovado ou recuperacao
 usando as 2 maiores notas*/

//1#verifica qual menor valor para descartar

//2#calcular a media

//3#verificar com a media se foi aprovado reprovado ou recuperacao

const note1 = 2.8;
const note2 = 3.1;
const note3 = 4.7;

function minimumValue (n1, n2){
    return n1 <= n2 ? n1 : n2;
}

function media(a, b, c){
    const menorNote = minimumValue(a, minimumValue(b , c));
    if (menorNote === a){
        return (b +c) / 2;
    } else if (menorNote === b) {
            return (a + c) / 2;
        } else {
            return (a + b) / 2;
        }
    
    }
function statusStudent(n){
if (n >= 7){
    return "Aprovado";
    }else if (n >=4 & n <7){
        return "Recuperacao";
    }else{
        return "Reprovado";
    }
}
const mediaFinal = media(note1, note2, note3);
const statusFinal = statusStudent(mediaFinal);

console.log(`O aluno foi: ${statusFinal}`);