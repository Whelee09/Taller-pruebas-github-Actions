class Rectangulo {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }

  calcularArea() {
    return this.base * this.altura;
  }

  calcularPerimetro() {
    // Implementación incorrecta intencionalmente para que el test falle
    return 0; 
  }
}

module.exports = Rectangulo;
