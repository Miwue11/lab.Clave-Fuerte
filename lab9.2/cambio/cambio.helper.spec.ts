import { calcularBilletes, calcularMonedas } from "./cambio.helper";
describe("cambio.helper", () => {
  describe("calcularBilletes", () => {
    it("debe devolver cero billetes al tener un rwsto de 2.5", () => {
      // Arrange
      const resto = 2.5;
      const billete = 10;
      // Act
      const result = calcularBilletes(resto, billete);
      // Assert
      expect(result).toEqual({ billetes: 0, monedas: 0, cantidad: 0 });
    });
    it("debe devolver un billete de 10 al tener 10 de resto y el billete por poner", () => {
      // Arrange
      const resto = 10;
      const billete = 10;
      // Act
      const result = calcularBilletes(resto, billete);
      // Assert
      expect(result).toEqual({ billetes: 10, monedas: 0, cantidad: 1 });
    });
  });
});

describe("cambio.helper", () => {
  describe("calcularMonedas", () => {
    it("debe devolver cero monedas al no tener resto", () => {
      // Arrange
      const resto = 0;
      const moneda = 0.1;
      // Act
      const result = calcularMonedas(resto, moneda);
      // Assert
      expect(result).toEqual({ billetes: 0, monedas: 0, cantidad: 0 });
    });
    it("debe devolver 1 moneda de 0.1 al tener de resto 0.1 y la moneda por poner", () => {
      // Arrange
      const resto = 0.1;
      const moneda = 0.1;
      // Act
      const result = calcularMonedas(resto, moneda);
      // Assert
      expect(result).toEqual({ billetes: 0, monedas: 0.1, cantidad: 1 });
    });
  });
});
