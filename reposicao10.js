class Funcionario {
  constructor(nome, cargo, salario) {
    this.nome = nome
    this.cargo = cargo
    this.salario = salario
  }

  aumentarSalario(porcentagem) {
    this.salario *= porcentagem
  }
}

let funcionario1 = new Funcionario("João", "Gerente", 1000)
let funcionario2 = new Funcionario("Maria", "Diretora", 2000)
let funcionario3 = new Funcionario("José", "Presidente", 3000)

console.log(funcionario1.salario)
console.log(funcionario2.salario)
console.log(funcionario3.salario)

funcionario1.aumentarSalario(1.5)
funcionario2.aumentarSalario(1.1)
funcionario3.aumentarSalario(1.2)

console.log(funcionario1.salario)
console.log(funcionario2.salario)
console.log(funcionario3.salario)