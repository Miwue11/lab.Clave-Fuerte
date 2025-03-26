import { validarClave } from "./main";
import { commonPasswords } from "./clave-solida";

describe("ValidarClave", () => {
  it("deberia devolver true si la clave es valida", () => {
    // Arrange
    const nombreUsuario = "usuario";
    const clave = "Clave123!";
    // Act
    const result = validarClave(nombreUsuario, clave, commonPasswords);
    // Assert
    expect(result).toEqual({ esValida: true });
  });
  it("deberia devolver false si la clave es una contraseña común", () => {
    // Arrange
    const nombreUsuario = "usuario";
    const clave = "password";
    const commonPasswords = ["password"];
    // Act
    const result = validarClave(nombreUsuario, clave, commonPasswords);
    // Assert
    expect(result).toEqual({
      esValida: false,
      error: "La clave no puede ser una contraseña común",
    });
  });
});
