function idade(idadeAtual) {
    if(idadeAtual === 20) {  
        return true;
    } else {
        return false;
    }
}

console.log(idade(20));

//==================================================================

function perimetro() {
    var lado1 = 10;
    var lado2 = 11;
    var lado3 = 12;
    var lado4 = 13;
    return lado1 + lado2 + lado3 + lado4;
}

console.log(perimetro());

// function perimetroQuadrado(lado) {
//     return lado * 4
// }
// Caso fosse 4 lados igual, poderia fazer dessa forma

//==================================================================
 
function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

//==================================================================

function ePar(numero) {
    var modulo = numero % 2;
    if(modulo === 0) {
        return "Esse número é par";
    } else {
        return 'Esse número é impar';
    }
}

console.log(ePar(50));

//==================================================================

function tipoDeDados(dado) {
    return (typeof dado);
}
console.log(tipoDeDados(8))

//==================================================================

addEventListener('click', function() {
    console.log('Fabrício Pimenta Panetto');
})

//==================================================================
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));