// Quando usar "?" em um parâmetro da função esse valor poderá ser default(opcional)  ou o valor que foi defindo

function cadastro(
  email: string,
  senha: string,
  mome = "Aluno",
  idade?: number
): void {
  let data = { email, senha, nome };

  console.log(data);

  cadastro("teste@teste.com", "123123", "Erick");
}
