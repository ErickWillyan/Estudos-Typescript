"use strict";
function totalVendas(...vendas) {
    const quantidadeVendas = vendas.length;
    console.log(`Você fez ${quantidadeVendas} vendas hoje!`);
}
totalVendas(10, 30, 25, 15, 90, 39);
