var idadeFabricio = 20;
var idadeMaria = 19;
if (idadeFabricio > idadeMaria) {
    console.log("Fabrício é mais velho que Maria Eduarda");
} else if(idadeFabricio === idadeMaria) {
    console.log("Fabrício e Maria Eduarda tem a mesma idade");
} else {
    console.log("Maria Eduarda é mais velha que o Fabrício");
}


var expressao = (5 - 2) && (5 - " ") && (5 - 2);
console.log(expressao)


var
    nome = "Fabrício",
    idade = 20,
    possuiDoutorado = false,
    empregoFuturo,
    dinheiroNaConta = 0;
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)


var brasil = 207;
var china = 1340;
if(brasil > china) {
    console.log("Brasil tem mais habitantes");
} else {
    console.log("Brasil tem menos habitantes")
}


if(("Gato" === "gato") && (5 > 2)) {
    console.log("Verdadeiro");
} else {
    console.log("Falso")
}


if(("Gato" === "gato") || (5 > 2)) {
    console.log("Gato" && "Cão");
} else {
    console.log("Falso")
}