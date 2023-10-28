function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(9));

function pi() {
    return 3.14;
}

//==================================================================

var total = 5 * pi();

console.log(total);

function imc(peso, altura) {
    var imc = peso / (altura * altura); // ou (altura ** 2)
    return imc;
}

console.log(imc(50, 1.70))

//==================================================================

function corFavorita(cor) {
    if(cor === "azul") {
        return "Azul";
    } else if(cor === "amarelo") {
        return "Amarelo";
    } else {
        return "Nenhum";
    }
}
console.log(corFavorita(""))

//==================================================================

function mostraConsole() { 
    console.log("Oi");
}

addEventListener("click", mostraConsole);

//ou addEventListener("click", function(){console.log("Oi")});