let num = prompt("insira a nota");

if ( num < 60 ) {
    console.log("Tá reprovado");
}
else if (num>=60&&num<74) {
    console.log("Tá mais ou menos");
}
else if (num>=75&&num<89) {
    console.log("Tá dboa");
}
else if (num>=90&&num<=100) {
    console.log("Tá nerd dms mano");
}
else {
    console.log("nenhuma nota encontrada");
}     

