function noteToConcept(note) {
    switch (Math.ceil(note)){
        case 10:
            return "A+";
        case 9:
            return "A";
        case 8:
            return "B+";
        case 7:
            return "B";
        case 6:
            return "C+";
        case 5:
            return "C";
        case 4:
            return "D+";
        case 3:
            return "D";
        case 2:
            return "E+";
        case 1:
            return "E";
        case 0:
            return "F";
        default:
            return null;
    }
}
let concept = noteToConcept(9);
console.log(`O conceito do aluno é: ${concept}`);
console.log(`O Conceito do aluno Fabio é: ${noteToConcept(10)}`);
console.log(`O Conceito do aluno Gustavo é: ${noteToConcept(30)}`);
console.log(`O Conceito da aluna Ana é: ${noteToConcept(5.8)}`);