"use strict";
const aluno1 = {
    id: "123",
    name: "Erick",
    curso: "Javascript",
    nota: (valor) => {
        console.log("Sua nota é: " + valor);
        return valor;
    },
};
console.log(aluno1);
aluno1.nota(25);
