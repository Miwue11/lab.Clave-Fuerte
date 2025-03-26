import { esValidaLaTarjetaMasterCard } from "./master-card.validator";

describe("MasterCard Validator", () => {
  it.each([
    ["5500939178004613", true],
    ["5500939178004614", false],
  ])("deberia validar la tarjeta MasterCard %s", (numero, expected) => {
    // Act
    const result = esValidaLaTarjetaMasterCard(numero);
    // Assert
    expect(result).toBe(expected);
  });

  it("deberia tirar un error si el numero esta vacio", () => {
    // Arrange
    const numero = "";
    // Act
    const result = () => esValidaLaTarjetaMasterCard(numero);
    // Assert
    expect(result).toThrowError("El número debe ser correcto");
  });

  it("deberia tirar un error si el numero no es un string", () => {
    // Arrange
    const numero = "123fnv4";
    // Act
    const result = () => esValidaLaTarjetaMasterCard(numero);
    // Assert
    expect(result).toThrowError("El número debe ser correcto");
  });
});
