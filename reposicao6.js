class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }
  get area() {
    return this.calcArea();
  }
  calcArea() {
    return this.altura * this.largura;
  }
}

let retangulo1 = new Retangulo(5, 10);
console.log(retangulo1.area);

let retangulo2 = new Retangulo(10, 20);
console.log(retangulo2.area);

let retangulo3 = new Retangulo(20, 40);
console.log(retangulo3.area);