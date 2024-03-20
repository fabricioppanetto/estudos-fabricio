// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne o nome completo da pessoa

function Pessoa(name, surname, age) {
    this.nome = name;
    this.sobrenome = surname;
    this.idade = age;
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

const fabricio = new Pessoa('Fabrício', 'Pimenta Panetto', 20);
const ricardo = new Pessoa('Ricardo', 'Barbosa', 21);
const bruno = new Pessoa('Bruno', 'França', 28);
const maicon = new Pessoa('Maicon', 'Moreira', 29)

console.log(fabricio.nomeCompleto());
console.log(ricardo.nomeCompleto());
console.log(bruno.nomeCompleto());
console.log(maicon.nomeCompleto());

// Liste os métodos acessados por dados criados com NodeList, HTMLCollection, Document

Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)

// Liste os construtores dos dados abaixo

const li = document.querySelector('li');

li; // HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // undefined

// Qual o constructor do dado abaixo:
li.hidden.constructor.name; // String