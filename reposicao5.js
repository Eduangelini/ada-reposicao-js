class Livros {
  constructor(titulo, autor, ano) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
  }
}

let livro1 = new Livros("O Senhor dos Anéis", "J. R. R. Tolkien", 1954);
let livro2 = new Livros("O Hobbit", "J. R. R. Tolkien", 1937);
let livro3 = new Livros("O Nome do Vento", "Patrick Rothfuss", 2007);

console.log(livro1);
console.log(livro2);
console.log(livro3);