console.log(Number.isNaN(NaN));
console.log(Number.isInteger(10.3345));

console.log(parseFloat('2467.457'))
console.log(parseFloat('2467.47 reais'))
console.log(parseInt('2467.47 reais'))
console.log(parseInt('27.47'))

const preco = 10.3299
console.log(+preco.toFixed(2));

let valor = 48.49;
valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

console.log(valor);

console.log(Math.abs(-5.5)); // Vai retornar o valor, mas, positivo
console.log(Math.ceil(4.559)); // Sempre vai arredondar o valor para cima
console.log(Math.ceil(4.1)); // Sempre vai arredondar o valor para cima
console.log(Math.floor(4.67)); // Sempre vai arredondar o valor para baixo
console.log(Math.floor(4.1)); // Sempre vai arredondar o valor para baixo
console.log(Math.round(4.49)); // <= 49 ira arredondar para baixo
console.log(Math.round(4.50)); // >= 50 ira arredondar para cima

const aleatorio = Math.floor(Math.random() * (40 - 20 + 1)) + 20;
console.log(aleatorio);