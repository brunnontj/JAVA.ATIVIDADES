  function calcularIMC(peso, altura) {
    return peso/( altura * altura)
  }
     
    
 function classificar() {
if (imc <  18,5) {
    return("Abaixo do peso")
}
else if (imc > 18,5 && 24,9) {
    return("Peso normal") 
} 
else if (imc > 25,0 && 29,9) {
    return("Sobrepeso") 
}
else if (imc > 30,0 && 34,9) {
    return("Obesidade Grau I (leve)") 
}
else if (imc > 35,0 && 39,9) {
    return("Obesidade Grau II (moderada)") 
 }
 else {
    return("Obesidade Grau III (grave)")
 }

}

function imcc() {
//Obter os valores do campo de entrada
    const nome = parseFloat(document.getElementById("nome").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

//Exibir resultados da página
document.getElementById("imc").innerHTML = nome + " ; IMC:" + calcularIMC(peso, altura).toFixed(2) + " ; Classificação:" + classificar();

}


  
 
  
  
  
  
  
  
  
  
  
  
  
 
