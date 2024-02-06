function entrar() {
  //Obter os valores do campo de entrada
    const email = document.getElementById("e-mail").value;
    const senha = document.getElementById("senha").value;


if (email === "aluno5" && senha === "senai") {
  alert("login bem-sucedido!");
} else {
    alert("tente novamente.");
}
}
