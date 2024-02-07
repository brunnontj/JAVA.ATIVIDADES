function calcularTotal(a, b, c, d){
    return (a + b + c + d);
}

function calcularDesconto(calcularTotal){
        const diaDaSemana = new Date().getDay(); // 0 para domingo, 1 para segunda-feira, etc.
        if (diaDaSemana === 3) {  // 3 representa quarta-feira
          return calcularTotal * 0.9;  // Aplica desconto de 10%
        } else {
          return calcularTotal; // Sem desconto
        }
      }


function calcular(){
    // Obter os valores dos campos de entrada
    const bovis = parseFloat(document.getElementById("carne bovina").value);
    const porc = parseFloat(document.getElementById("porcina").value);
    const frango = parseFloat(document.getElementById("carne frango").value);
    const linguiças = parseFloat(document.getElementById("linguiça").value);

  // Exibir os resultados na página HTML
  document.getElementById("total").innerHTML = "Valor total: " + calcularTotal(bovis, porc,frango, linguiças);
  document.getElementById("desconto").innerHTML = "Valor do Desconto: " + calcularDesconto (calcularTotal (bovis, porc,frango, linguiças));
  
} 