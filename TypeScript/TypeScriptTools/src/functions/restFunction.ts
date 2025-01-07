//Utilizado para quando não se sabe quantos parâmetros vão vir na função

function totalVendas(...vendas: number[]): void {
  const quantidadeVendas = vendas.length;

  console.log(`Você fez ${quantidadeVendas} vendas hoje!`);
}

totalVendas(10, 30, 25, 15, 90, 39);
