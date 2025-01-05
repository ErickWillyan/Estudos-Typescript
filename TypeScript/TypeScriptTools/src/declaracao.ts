// Estas atribuições fazem com que você atríbua um tipo para a váriavel
let nome: string;

let idade: number;

nome = "Erick ";
idade = 18;

// Union Type permite que mais de um tipo seja atribuída para a váriavel

let userId: string | number;

console.log(nome + idade);

//Type any

//Caso nenhum tipo seja adicionado essa variável terá o tipo any, ou seja, receberá qualquer valor

let valor1;

let valor2: any;

// Type boolean

//Qualquer valor diferente de zero, string vazia, undefined, será verdadeiro.

let autentication: boolean;
