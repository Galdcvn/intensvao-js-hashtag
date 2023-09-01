import { catalogo } from "./utilidades"

const idsProdCarrComQtd = {}

function abrirCarrinho () {
    document.getElementById('carrinho').classList.remove("right-[-360px]")
    document.getElementById('carrinho').classList.add("right-0")

}

function fecharCarrinho () {
    document.getElementById('carrinho').classList.remove("right-0")
    document.getElementById('carrinho').classList.add("right-[-360px]")
}

export function inicializarCarrinho() {
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho")
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho")

    botaoFecharCarrinho.addEventListener("click", fecharCarrinho)
    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho)
}


function removeCarr (idProduto) {
  delete idsProdCarrComQtd[idProduto]
  renderizarProdCarr()

}

function incrQtdProd (idProduto) {
  idsProdCarrComQtd[idProduto]++
  atualizarInfoQtd(idProduto)
}

function decrQtdProd (idProduto) {
  if(idsProdCarrComQtd[idProduto] === 1){
    removeCarr(idProduto)
    return
  }
  idsProdCarrComQtd[idProduto]--
  atualizarInfoQtd(idProduto)
}

function atualizarInfoQtd (idProduto){
  document.getElementById(`quantidade-${idProduto}`).innerText = idsProdCarrComQtd[idProduto]
}

function desenharProdCarr (idProduto) {
  
  const produto = catalogo.find((p) => p.id === idProduto)
  const containerProdutoCarrinho = document.getElementById("prod-carrinho")

  const elementoArticle = document.createElement("article")
  const articleClasses = ['flex', 'bg-blue-300', 'rounded-lg', 'p-1', 'relative']

for (const articleClass of articleClasses) {
  elementoArticle.classList.add(articleClass)

}

  const cartaoProdutoCarrinho = `<button id="remover-item-${produto.id}"><i class="fa-solid fa-circle-xmark absolute top-2 right-2 hover:text-blue-200"></i></button>
  <img src="assets/${produto.arquivo}" alt="${produto.nome}" class="h-24 rounded-lg mr-2">
<div class="py-2 flex flex-col justify-between">
  <p class="text-blue-900 text-small">${produto.nome}</p>
  <p class="text-blue-550 text-xs">Tamanho: M</p>
  <p class="text-green-700 text-lg">Preço: R$${produto.preço}</p>
</div>
<div class="flex text-blue-900 items-end absolute bottom-2 right-2 gap-2 text-lg">
  <button id="decr-prod-${produto.id}">-</button>
  <p id="quantidade-${produto.id}">${idsProdCarrComQtd[produto.id]}</p>
  <button id="incr-prod-${produto.id}">+</button>
</div>`

  elementoArticle.innerHTML = cartaoProdutoCarrinho
  containerProdutoCarrinho.appendChild(elementoArticle)

  document.getElementById(`decr-prod-${produto.id}`).addEventListener('click', () => decrQtdProd(produto.id))

  document.getElementById(`incr-prod-${produto.id}`).addEventListener('click', () => incrQtdProd(produto.id))

  document.getElementById(`remover-item-${produto.id}`).addEventListener('click', () => removeCarr(produto.id))
}

function renderizarProdCarr () {
  const containerProdutoCarrinho = document.getElementById("prod-carrinho")
  containerProdutoCarrinho.innerHTML = ""

  for (const idProduto in idsProdCarrComQtd) {
    desenharProdCarr(idProduto)
  }
 
}

export function adicionarAoCarrinho (idProduto){
  if (idProduto in idsProdCarrComQtd) {
    incrQtdProd(idProduto)
    return;
  }
    idsProdCarrComQtd[idProduto] = 1

    const produto = catalogo.find((p) => p.id === idProduto)
    const containerProdutoCarrinho = document.getElementById("prod-carrinho")

    const elementoArticle = document.createElement("article")
    const articleClasses = ['flex', 'bg-blue-300', 'rounded-lg', 'p-1', 'relative']

  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass)

  }

    const cartaoProdutoCarrinho = `<button id="remover-item-${produto.id}"><i class="fa-solid fa-circle-xmark absolute top-2 right-2 hover:text-blue-200"></i></button>
    <img src="assets/${produto.arquivo}" alt="${produto.nome}" class="h-24 rounded-lg mr-2">
  <div class="py-2 flex flex-col justify-between">
    <p class="text-blue-900 text-small">${produto.nome}</p>
    <p class="text-blue-550 text-xs">Tamanho: M</p>
    <p class="text-green-700 text-lg">Preço: R$${produto.preço}</p>
  </div>
  <div class="flex text-blue-900 items-end absolute bottom-2 right-2 gap-2 text-lg">
    <button id="decr-prod-${produto.id}">-</button>
    <p id="quantidade-${produto.id}">${idsProdCarrComQtd[produto.id]}</p>
    <button id="incr-prod-${produto.id}">+</button>
  </div>`

    elementoArticle.innerHTML = cartaoProdutoCarrinho
    containerProdutoCarrinho.appendChild(elementoArticle)

    document.getElementById(`decr-prod-${produto.id}`).addEventListener('click', () => decrQtdProd(produto.id))

    document.getElementById(`incr-prod-${produto.id}`).addEventListener('click', () => incrQtdProd(produto.id))

    document.getElementById(`remover-item-${produto.id}`).addEventListener('click', () => removeCarr(produto.id))
}