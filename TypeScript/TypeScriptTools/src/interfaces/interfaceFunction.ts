interface Aluno {
  readonly id: string;
  name: string;
  curso: string;
  nota: (valor: number) => number;
}

const aluno1: Aluno = {
  id: "123",
  name: "Erick",
  curso: "Javascript",
  nota: (valor: number): number => {
    console.log("Sua nota é: " + valor);
    return valor;
  },
};

console.log(aluno1);

aluno1.nota(25);
