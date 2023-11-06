var dadosPessoais = {
    nome: "Fabrício",
    sobrenome: "Pimenta Panetto",
    idade: 20,
    possuiFaculdade: false,
    nomeCompleto() {
        return `${dadosPessoais.nome} ${this.sobrenome}`; // posso usar o this em vez de dadosPessoais.******
    },
}

console.log(dadosPessoais.nomeCompleto()) // Fabrício Pimenta Panetto

//=========================================================================

var carro = {
    preco: 1000,
    portas: 4,
    marca: "Audi",
}

carro.preco = 3000;

//=========================================================================

var cachorro = {
    raca: "Labrador",
    cor: "Preto",
    idade: 10,
    viuODono(dono) {
        if(dono === "homem") {
            return "Au Au";
        } else {
            return "Sonin muito";
        }
    },
}
console.log(cachorro.viuODono('homem'))