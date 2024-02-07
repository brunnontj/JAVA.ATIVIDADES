 // Solicita ao usuário que informe um número inteiro por meio de um prompt
const num = parseInt(prompt("Informe um numero inteiro:"));w

// Inicia um loop for, começando a partir do número informado pelo usuário
// O loop continuará enquanto a variável 'i' for menor ou igual a 10
for (let i = 1; i <= 10; i++) {
  // Calcula o resultado da multiplicação do número fornecido pelo usuário com o valor atual de 'i'
  const resultado = num * i;
  
  // Exibe a tabuada no formato "número x i = resultado"
  console.log({num} * {i} = {resultado});
}