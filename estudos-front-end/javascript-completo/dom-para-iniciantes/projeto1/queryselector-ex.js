// Retorne no console todas as imagens do site
const todasImagens = document.querySelectorAll('img');
console.log(todasImagens);

// Retorne no console apenas as imagens que comecaram com a palavra imagem
const imgImagem = document.querySelectorAll('[src^="img/imagem"]');
console.log(imgImagem);

// Selecione todos os links internos (onde o href comeca com #)
const linkInternos = document.querySelectorAll('[href^="#"]');
console.log(linkInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2);

// Selecione o ultimo p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1]);
// console.log(paragrafos[--paragrafos.length]); tambem funciona dessa forma

