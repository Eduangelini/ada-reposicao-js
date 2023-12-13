class aluno {
  constructor(nome, matricula, notas) {
    this.nome = nome;
    this.matricula = matricula;
    this.notas = notas;
  }

  calcularMedia() {
    let soma = 0;
    for (let i = 0; i < this.notas.length; i++) {
      soma += this.notas[i];

      if (this.notas[i] < 0 || this.notas[i] > 10) {
        return "Nota inválida";
      }
    }

    if (soma / this.notas.length < 7) {
      return "Reprovado";
    } else if (soma / this.notas.length >= 7 && soma / this.notas.length < 10) {
      return soma / this.notas.length;
    }
  }
}

let aluno1 = new aluno("João", 123, [10, 8, 7, 4]);
let aluno2 = new aluno("Maria", 456, [9.5, 8, 7, 12]);
let aluno3 = new aluno("José", 789, [9, 10, 10, 8]);
let aluno4 = new aluno("Ana", 101, [4, 3, 7, 6]);
let aluno5 = new aluno("Carlos", 102, [9, 8, 7, 6]);

console.log(aluno1.calcularMedia());
console.log(aluno2.calcularMedia());
console.log(aluno3.calcularMedia());
console.log(aluno4.calcularMedia());
console.log(aluno5.calcularMedia());