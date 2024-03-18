function Carro() {
    this.marca = 'Marca';
    this.preco = 0;
}

const civic = new Carro();
civic.marca = 'Honda';
civic.preco = 120000;

const titanio = new Carro();
titanio.marca = 'Fiat';
titanio.preco = 269000;

// Ou podemos fazer dessa forma

function Carro1(marcaAtribuida, precoAtribuida) {
    this.marca = marcaAtribuida;
    this.preco = precoAtribuida;
}

const rs7 = new Carro1('Audi', 999999);
const lancer = new Carro1('Mitsubishi', 60000);

// This Keyword

function Carro2(marca, precoInicial) {
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marca;
    this.preco = precoFinal;
}

const corolla = new Carro2('Toyota', 100000);