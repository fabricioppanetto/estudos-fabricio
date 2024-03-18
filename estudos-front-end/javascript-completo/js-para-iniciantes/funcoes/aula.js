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
//==================================================================

function terceiraIdade(idade) {
    console.log(typeof idade);
    if(typeof idade !== "number") {
        return "Por favor preencha um número"
    } else if(idade >= 60) {
        return true;
    } else {
        return false;
    }
}

console.log(terceiraIdade("60"))

//==================================================================

function faltaVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Falta visitar ${totalPaises - paisesVisitados} países`;
}

console.log(faltaVisitar(60));

//==================================================================

var profissao = 'Analista de Redes';

function dados() {
    var nome = 'Fabrício'
    var idade = 19;
    function outrosDados() {
        var endereco = 'Castelo';
        var idade = 20;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`
    }
    return outrosDados();
}

console.log(dados())