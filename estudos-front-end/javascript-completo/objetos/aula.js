var pessoa = {
    nome: "Fabrício",
    idade: 20,
    profissao: "Analista de Redes",
    possuiFaculdade: false,
}

var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro: function(lado) {
        return this.lados * lado;
    },
}