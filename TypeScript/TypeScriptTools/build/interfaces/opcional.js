"use strict";
function ExibirCadatros(propriedades) {
    console.log("Seu nome: " + propriedades.name);
    console.log("Seu email: " + propriedades.email);
    console.log("Sua senha: " + propriedades.password);
}
ExibirCadatros({
    name: "Erick",
    email: "erickwillya2105@gmail.com",
    password: "123123",
});
