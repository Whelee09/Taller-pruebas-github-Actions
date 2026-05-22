const Rectangulo = require('./Rectangulo');

describe('Clase Rectangulo', () => {
  test('debe calcular el área correctamente', () => {
    const rect = new Rectangulo(5, 10);
    expect(rect.calcularArea()).toBe(50);
  });

  test('debe calcular el perímetro correctamente', () => {
    const rect = new Rectangulo(5, 10);
    expect(rect.calcularPerimetro()).toBe(30);
  });

  test('debe manejar un rectángulo con valores cero', () => {
    const rect = new Rectangulo(0, 0);
    expect(rect.calcularArea()).toBe(0);
    expect(rect.calcularPerimetro()).toBe(0);
  });
});
