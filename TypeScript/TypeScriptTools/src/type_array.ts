//Formas de declarar arrays e seus tipos
// let filmes: Array<string>;
// let filmes: string[ ]:

// let filmes: Array<string | number>;
let filmes: (string | number)[];

filmes = ["Filme 1", "Filme 2"];

filmes.push(15);

console.log("Meus filmes ", filmes);
