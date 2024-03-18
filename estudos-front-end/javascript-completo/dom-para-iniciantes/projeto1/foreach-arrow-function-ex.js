// Mostre no console cada paragrafo do site
const paragrafos = document.querySelectorAll('p');
// console.log(paragrafos);

paragrafos.forEach((i) => {
    // console.log(i);
});

// Mostre somente o texto dos paragrafos no console
const arrayParagrafos = Array.from(paragrafos);

arrayParagrafos.forEach((i) => {
    // console.log(i.innerText);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
    console.log(item, index);
});
// Resposta: o ITEM e INDEX, precisam ficar dentro de parenteses, pois tem mais de 2 itens na funcao


let i = 0;
imgs.forEach(() => {
    console.log(i++);
});
// Resposta: Antes do => precisa ter um jogo de parenteses, pois nao tem nenhum item na funcao

imgs.forEach(() => i++);
// Resposta: Ja esta certo