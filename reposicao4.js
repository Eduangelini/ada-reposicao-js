class Circulo {
  constructor(raio) {
    this.raio = raio;
  }
  get area() {
    return (Math.PI * (this.raio ** 2)).toFixed(2);
  }
  get perimetro() {
    return (2 * Math.PI * this.raio).toFixed(2);
  }
}

let circulo1 = new Circulo(5);
console.log(circulo1.area);
console.log(circulo1.perimetro);

let circulo2 = new Circulo(10);
console.log(circulo2.area);
console.log(circulo2.perimetro);

let circulo3 = new Circulo(20);
console.log(circulo3.area);
console.log(circulo3.perimetro);