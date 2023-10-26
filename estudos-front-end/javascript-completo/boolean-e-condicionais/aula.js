var possuiGraduacao = false;

if(possuiGraduacao) {
    console.log("É verdadeiro");
} else {
    console.log("É falso");
}

var nome = "";
if(nome) {
    console.log(nome);
} else {
    console.log("Não existe nome");
}

// Valores que retornam em false
// if(false);
// if(NaN);
// if(0);
// if(null);
// if(undefined);
// if("");

// Valores que retornam em true
// if(true);
// if(1);
// if(" ");
// if(fabricio);
// if(-5);
// if({});

if(!possuiGraduacao) {
    console.log("Não possui graduação");
}

if((5 - 5) && (5 + 5)) {
    console.log("Verdadeiro");
} else {
    console.log("Falso");
}

var condicional = (5 - 10) && (5 + 5);
if(condicional) {
    console.log("Verdadeiro", condicional);
} else {
    console.log("Falso");
}

// && retorna o último verdadeiro ou o primeiro falso

var condicional2 = ( 5 - 5) || (5 + 5);
console.log(condicional2)

var condicional2 = ( 5 - 5) || (5 + 5) && (10 - 8);
console.log(condicional2)

// || retorna o primeiro verdadeiro

var corFavorita = "Verde";

switch (corFavorita) {
    case "Azul":
        console.log("Olhe para o céu.");
        break;
    case "Amarelo":
        console.log("Olhe para o sol.");
        break;
    case "Verde":
        console.log("Olhe para a floresta.");
        break;
    default:
        console.log("Feche os olhos.")
}