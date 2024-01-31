 //6- Pergunta sobre Ano Bissexto:
 let num = prompt("Digite o ano que voce quer")

 if ((num % 4 == 0)&&(num % 100 != 0) || (num % 400 == 0)) { 
    console.log(num+ "é um ano bissexto")    
 }
 else {
  console.log(num+ "não é um ano bissexto")

 }   