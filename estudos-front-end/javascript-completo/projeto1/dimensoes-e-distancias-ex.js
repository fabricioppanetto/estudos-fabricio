// Verifique a distancia da primeira imagem em relacao ao topo da pagina

const img = document.querySelector('img');
const imgTop = img.offsetTop;
console.log(imgTop);

// Retorne a soma da largura de todas as imagens

const imagens = document.querySelectorAll('img');
let soma = 0;

imagens.forEach(function(imagem) {
    soma+=imagem.offsetWidth;
    console.log(imagem.offsetWidth);
});

console.log(`A soma das larguras e ${soma}`)

// Verifique se os links da pagina possuem o minimo recomendado para telas utilizados com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');
links.forEach(function(link) {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;
    if(linkHeight >= 48 && linkWidth >= 48) {
        console.log(`${link} Possui boa acessibilidade`);
    } else {
        console.log(`${link} Nao possui boa acessibilidade`);
    }
});


// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu

const tela = window.matchMedia('(max-width: 720px)').matches;
const menu = document.querySelector('.menu');

if(tela) {
    menu.classList.add('menu-mobile');
    console.log('Adicionada uma nova class no menu')
};
