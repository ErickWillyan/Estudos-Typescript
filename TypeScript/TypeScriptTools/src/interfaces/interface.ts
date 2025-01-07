interface SignProps {
  email: string;
  password: string;
}

function ExibirSign({ email, password }: SignProps): void {
  console.log("Seu email: " + email);
  console.log("Sua senha: " + password);
}

ExibirSign({ email: "erickwillya2105@gmail.com", password: "123123" });
