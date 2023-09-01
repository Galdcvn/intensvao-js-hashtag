import { adicionarAoCarrinho } from "./menu-carrinho"
import { catalogo } from "./utilidades"


export function renderizarCatalogo () {
for (const prodCatalogo of catalogo) {
    
    const cartãoProduto = `<div id="${prodCatalogo.id}" class="w-48 m-2 flex flex-col p-2 justify-between group shadow-xl shadow-blue-400">
    <img src="assets/${prodCatalogo.arquivo}" alt="sobretudo" class="group-hover:scale-110 duration-300 m-3 rounded-lg">
    <p class="text-sm">${prodCatalogo.nome}</p>
    <p class="text-sm">R$${prodCatalogo.preço}</p>
    <button id="adicionar-${prodCatalogo.id}" class="bg-blue-900 text-blue-50 hover:bg-blue-500"><i class="fa-solid fa-cart-plus"></i></button>
    </div>`
    
    document.getElementById('container-produto').innerHTML += cartãoProduto
}

for (const prodCatalogo of catalogo) {
    document.getElementById(`adicionar-${prodCatalogo.id}`).addEventListener("click", () => adicionarAoCarrinho(prodCatalogo.id))
}
}