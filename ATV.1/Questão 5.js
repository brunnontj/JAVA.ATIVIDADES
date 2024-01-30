let num1 = prompt("insira a base do triângulo")
let num2 = prompt("Insira um lado do triângulo")
let num3 = prompt("Insira o outro lado")

if (num1==num2 && num2==num3) {
   console.log("Esse triângulo e Equilátero")
}
else if(num1==num2||num1==num3||num2==num3) {
    console.log("Esse triângulo e Isóceles")
 }
else {
    console.log("Esse triângulo e Escaleno") 
}