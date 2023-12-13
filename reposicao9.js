class Produto {
  constructor(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    this.estoque = estoque
  }

  valorEmEstoque() {
    if (this.estoque < 0) {
      this.estoque = 0
    }
    return this.preco * this.estoque
  }

  adicionarEstoque(quantidade) {
    this.estoque += quantidade
  }

  removerEstoque(quantidade) {
    this.estoque -= quantidade
    if (this.estoque < quantidade) {
      console.log("Estoque insuficiente")
    }
  }
}

let produto1 = new Produto("Celular", 5, 10)
let produto2 = new Produto("Notebook", 20, 7)
let produto3 = new Produto("Tablet", 500, 15)

console.log(produto1.valorEmEstoque())
console.log(produto2.valorEmEstoque())

produto1.adicionarEstoque(5)
produto2.adicionarEstoque(10)

console.log(produto1.valorEmEstoque())
console.log(produto2.valorEmEstoque())

produto1.removerEstoque(20)
produto2.removerEstoque(10)