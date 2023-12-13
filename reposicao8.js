class Triangulo {
  constructor(lado1, lado2, lado3) {
    this.lado1 = lado1
    this.lado2 = lado2
    this.lado3 = lado3
  }

  ehTriangulo() {
    if (this.lado1 < this.lado2 + this.lado3 && this.lado2 < this.lado1 + this.lado3 && this.lado3 < this.lado1 + this.lado2) {
      return "É um triângulo"
    } else {
      return "Não é um triângulo"
    }
  }

  calcularPerimetro() {
    return this.lado1 + this.lado2 + this.lado3
  }

  calcularArea() {
    let p = this.calcularPerimetro() / 2
    return Math.sqrt(p * (p - this.lado1) * (p - this.lado2) * (p - this.lado3))
  }
}

let triangulo1 = new Triangulo(3, 4, 5)
let triangulo2 = new Triangulo(3, 4, 10)
let triangulo3 = new Triangulo(5, 12, 13)

console.log(triangulo1.ehTriangulo())
console.log(triangulo2.ehTriangulo())
console.log(triangulo3.ehTriangulo())

console.log(triangulo1.calcularPerimetro())
console.log(triangulo2.calcularPerimetro())
console.log(triangulo3.calcularPerimetro())

console.log(triangulo1.calcularArea())
console.log(triangulo2.calcularArea())
console.log(triangulo3.calcularArea())