//2- Escreva um programa que solicite ao usuário que insira números inteiros positivos.
//O programa deve somar apenas os números pares inseridos até que o usuário insira um número negativo. Ao final, deve imprimir a soma.

//passo 01: inicialize a variavel da soma
let soma = o;
//passo 02: crie um loop while que continuara enquanto o usuário inserir o número
while (true) {
    //passo 03: solicite ao usúario inserir um número
    let num = prompt ("Insira um número valido: ");
    //passo 04: verifique se o número é negativo, se sim, saia do loop
    if (num <0) {
        break //força a paradade o programa
        console.log("Programa encerrado, número informado negativo");
    }
    //passo 05: verifique se o número é par, se sim, adicione a soma
    if (num % 2 === 0){
        //soma += num
        soma = soma + num;
    }
}
//passo 06: imprima a soma final
//console.log(`A somaé: ${soma});
console.log("A soma dos números pares é: " + soma + ".");