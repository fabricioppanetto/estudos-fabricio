// A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.abracar = function() {
        return 'Abraçou';
    }
    this.andar = function() {
        return 'Andou pelo objeto';
    }
}

const andre = new Pessoa('Andre', 21);

console.log(Pessoa.prototype); // retorna o objeto
console.log(andre.prototype) // undefined 

// É possível adicionar novas propriedades e métodos ao objeto prototype

Pessoa.prototype.andar = function() {
    return this.nome + ' Pessoa andou';
}

Pessoa.prototype.nadar = function() {
    return this.nome + ' Pessoa nadou';
}

