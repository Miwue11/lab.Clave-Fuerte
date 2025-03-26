import { calcularCambio } from "./cambio";

describe("calcularCambio", () => {
  it("deberia devolver el mayor numero de billetes posibles de mayor tamañoa menor y dejar el resto al mayor numero de monedas posibles de mayor tamaño a menor", () => {
    // Arrange
    const compra = 100;
    const pago = 150.7;
    // Act
    const result = calcularCambio(compra, pago);
    // Assert
    const cambio = [
      { billetes: 50, monedas: 0, cantidad: 1 },
      { billetes: 0, monedas: 0.5, cantidad: 1 },
      { billetes: 0, monedas: 0.2, cantidad: 1 },
    ];
    expect(result).toEqual(cambio);
  });
  it("deberia devolver el mayor numero de billetes posibles de mayor tamañoa menor y dejar el resto al mayor numero de monedas posibles de mayor tamaño a menor", () => {
    // Arrange
    const compra = 96;
    const pago = 247.35;
    // Act
    const result = calcularCambio(compra, pago);
    // Assert
    expect(result).toEqual([
      { billetes: 100, monedas: 0, cantidad: 1 },
      { billetes: 50, monedas: 0, cantidad: 1 },
      { billetes: 0, monedas: 1, cantidad: 1 },
      { billetes: 0, monedas: 0.2, cantidad: 1 },
      { billetes: 0, monedas: 0.1, cantidad: 1 },
      { billetes: 0, monedas: 0.05, cantidad: 1 },
    ]);
  });
});
