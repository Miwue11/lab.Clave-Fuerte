import {
  comprobarValidaciones,
  recorrerValidaciones,
  tieneCaracteresEspeciales,
  tieneLetrasMayusculasYMinusculas,
  tieneLongitudMinima,
  tieneNombreUsuario,
  tieneNumeros,
  tienePalabrasComunes,
} from "./main.helper";

describe("tieneNumeros", () => {
  it("deberia devolver true si la clave tiene numeros", () => {
    // Arrange
    const clave = "clave123";
    // Act
    const result = tieneNumeros(clave);
    // Assert
    expect(result).toEqual({ esValida: true });
  });
  it("deberia devolver false si la clave no tiene numeros", () => {
    // Arrange
    const clave = "clave";
    // Act
    const result = tieneNumeros(clave);
    // Assert
    expect(result).toEqual({
      esValida: false,
      error: "La clave debe tener números",
    });
  });
});
describe("tieneLetrasMayusculasYMinusculas", () => {
  it("deberia devolver true si la clave tiene letras mayusculas y minusculas", () => {
    // Arrange
    const clave = "Clave123";
    // Act
    const result = tieneLetrasMayusculasYMinusculas(clave);
    // Assert
    expect(result).toEqual({ esValida: true });
  });
  it("deberia devolver false si la clave no tiene letras mayusculas y minusculas", () => {
    // Arrange
    const clave = "clave123";
    // Act
    const result = tieneLetrasMayusculasYMinusculas(clave);
    // Assert
    expect(result).toEqual({
      esValida: false,
      error: "La clave debe tener letras mayúsculas y minúsculas",
    });
  });
});

describe("tieneCaracteresEspeciales", () => {
  it("deberia devolver true si la clave tiene caracteres especiales", () => {
    // Arrange
    const clave = "Clave123!";
    // Act
    const result = tieneCaracteresEspeciales(clave);
    // Assert
    expect(result).toEqual({ esValida: true });
  });
  it("deberia devolver false si la clave no tiene caracteres especiales", () => {
    // Arrange
    const clave = "clave123";
    // Act
    const result = tieneCaracteresEspeciales(clave);
    // Assert
    expect(result).toEqual({
      esValida: false,
      error: "La clave debe tener caracteres especiales",
    });
  });
});

describe("tieneLongitudMinima", () => {
  it("deberia devolver true si la clave tiene al menos 8 caracteres", () => {
    // Arrange
    const clave = "Clave123!";
    // Act
    const result = tieneLongitudMinima(clave);
    // Assert
    expect(result).toEqual({ esValida: true });
  });
  it("deberia devolver false si la clave no tiene al menos 8 caracteres", () => {
    // Arrange
    const clave = "123";
    // Act
    const result = tieneLongitudMinima(clave);
    // Assert
    expect(result).toEqual({
      esValida: false,
      error: "La clave debe tener al menos 8 caracteres",
    });
  });
});

describe("tieneNombreUsuario", () => {
  it("deberia devolver true si la clave no contiene el nombre de usuario", () => {
    // Arrange
    const nombreUsuario = "usuario";
    const clave = "Clave123!";
    // Act
    const result = tieneNombreUsuario(nombreUsuario, clave);
    // Assert
    expect(result).toEqual({ esValida: true });
  });
  it("deberia devolver false si la clave contiene el nombre de usuario", () => {
    // Arrange
    const nombreUsuario = "usuario";
    const clave = "usuario123!";
    // Act
    const result = tieneNombreUsuario(nombreUsuario, clave);
    // Assert
    expect(result).toEqual({
      esValida: false,
      error: "La clave no puede contener el nombre de usuario",
    });
  });
});

describe("tienePalabrasComunes", () => {
  it("deberia devolver true si la clave no es una contraseña común", () => {
    // Arrange
    const clave = "Clave123!";
    const commonPasswords = ["password", "123456"];
    // Act
    const result = tienePalabrasComunes(clave, commonPasswords);
    // Assert
    expect(result).toEqual({ esValida: true });
  });
});

describe("recorrerValidaciones", () => {
  it("deberia devolver la primera validacion que no sea valida", () => {
    // Arrange
    const validaciones = [
      { esValida: true },
      { esValida: false, error: "Error 1" },
      { esValida: false, error: "Error 2" },
    ];
    // Act
    const result = recorrerValidaciones(validaciones);
    // Assert
    expect(result).toEqual({ esValida: false, error: "Error 1" });
  });
  it("deberia devolver true si todas las validaciones son validas", () => {
    // Arrange
    const validaciones = [
      { esValida: true },
      { esValida: true },
      { esValida: true },
    ];
    // Act
    const result = recorrerValidaciones(validaciones);
    // Assert
    expect(result).toEqual({ esValida: true });
  });
});

describe("comprobarValidaciones", () => {
  it("deberia devolver un array de validaciones", () => {
    // Arrange
    const nombreUsuario = "usuario";
    const clave = "Clave123!";
    const commonPasswords = ["password", "123456"];
    // Act
    const result = comprobarValidaciones(nombreUsuario, clave, commonPasswords);
    // Assert
    expect(result).toEqual([
      { esValida: true },
      { esValida: true },
      { esValida: true },
      { esValida: true },
      { esValida: true },
      { esValida: true },
    ]);
  });
  it("deberia devolver un array de validaciones", () => {
    // Arrange
    const nombreUsuario = "usuario";
    const clave = "usuario123!";
    const commonPasswords = ["password", "123456"];
    // Act
    const result = comprobarValidaciones(nombreUsuario, clave, commonPasswords);
    // Assert
    expect(result).toEqual([
      { esValida: true },
      {
        esValida: false,
        error: "La clave debe tener letras mayúsculas y minúsculas",
      },
      { esValida: true },
      { esValida: true },
      { esValida: true },
      {
        esValida: false,
        error: "La clave no puede contener el nombre de usuario",
      },
    ]);
  });
  it("deberia devolver un array de validaciones", () => {
    // Arrange
    const nombreUsuario = "usuario";
    const clave = "password";
    const commonPasswords = ["password", "123456"];
    // Act
    const result = comprobarValidaciones(nombreUsuario, clave, commonPasswords);
    // Assert
    expect(result).toEqual([
      { esValida: false, error: "La clave no puede ser una contraseña común" },
      {
        esValida: false,
        error: "La clave debe tener letras mayúsculas y minúsculas",
      },
      { esValida: false, error: "La clave debe tener números" },
      { esValida: false, error: "La clave debe tener caracteres especiales" },
      { esValida: true },
      { esValida: true },
    ]);
  });
});
