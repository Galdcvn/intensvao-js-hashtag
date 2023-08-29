const catalogo = [
    {
    id: 1,
    nome: 'Sobretudo 1',
    preço: '100,00',
    arquivo: 'img1.jpg',
    },
    {
    id: 2,
    nome: 'Sobretudo 2',
    preço: '150,00',
    arquivo: 'img2.jpg',
    },
    {
    id: 3,
    nome: 'Relógio 1',
    preço: '545,00',
    arquivo: 'img3.jpg',
    },
    {
    id: 4,
    nome: 'Relógio 2',
    preço: '600,00',
    arquivo: 'img4.jpg',
    },
    {
    id: 5,
    nome: 'Carteira 1',
    preço: '92,00',
    arquivo: 'img5.jpg',
    },
    {
    id: 6,
    nome: 'Carteira 2',
    preço: '96,00',
    arquivo: 'img6.jpg',
    },
    {
    id: 7,
    nome: 'Sapato 1',
    preço: '237,00',
    arquivo: 'img7.jpg',
    },
    {
    id: 8,
    nome: 'Sapato 2',
    preço: '264,00',
    arquivo: 'img8.jpg',
    },
]

for (const prodCatalogo of catalogo) {
const cartãoProduto = `<div class="card-produto-1">
<img src="assets/${prodCatalogo.arquivo}" alt="sobretudo">
<p>${prodCatalogo.nome}</p>
<p>R$${prodCatalogo.preço}</p>
<button>Adicionar</button>
</div>`

document.getElementById('container-produto').innerHTML += cartãoProduto
}