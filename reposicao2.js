class Pessoa {
  constructor(nome, idade, cidade) {
    this.nome = nome;
    this.idade = idade;
    this.cidade = cidade;
  }
}

let pessoa1 = new Pessoa("João", 20, "São Paulo");
let pessoa2 = new Pessoa("Maria", 30, "Rio de Janeiro");
let pessoa3 = new Pessoa("José", 40, "Curitiba");
let pessoa4 = new Pessoa("Ana", 50, "Salvador");

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);