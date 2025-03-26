import {
  eliminaUltimoDigito,
  multiplicaPorDosSaltandoUnDesdeElFinal,
  obtenerUltimoDigito,
  sumaDigitosEnArrays,
  sumaTotalDigitos,
} from "./master-card.helpers";

describe("eliminaUltimoDigito", () => {
  it("debería eliminar el último dígito de un número", () => {
    // Arrange
    const numero = "1234";
    // Act
    const resultado = eliminaUltimoDigito(numero);
    // Assert
    expect(resultado).toBe("123");
  });
  it("deberia devolver un throw si la entrada es undefined", () => {
    //Arrange
    let numero: any = undefined;
    //Assert
    expect(() => eliminaUltimoDigito(numero)).toThrow();
  });
  it("deberia devolver un throw si la entrada es null", () => {
    //Arrange
    let numero: any = null;
    //Assert
    expect(() => eliminaUltimoDigito(numero)).toThrow();
  });
  it("deberia devolver un throw si la entrada es un string vacio", () => {
    //Arrange
    const numero = "";
    //Assert
    expect(() => eliminaUltimoDigito(numero)).toThrow();
  });
  it("deberia devolver un throw si la entrada no es un string", () => {
    //Arrange
    const numero: any = 1234;
    //Assert
    expect(() => eliminaUltimoDigito(numero)).toThrow();
  });
  it("deberia devolver un throw si la entrada es solo un digito", () => {
    //Arrange
    const numero = "1";
    //Assert
    expect(() => eliminaUltimoDigito(numero)).toThrow();
  });
  it("deberia devolver un throw si la entrada contiene letras", () => {
    //Arrange
    const numero = "123a";
    //Assert
    expect(() => eliminaUltimoDigito(numero)).toThrow();
  });
});

describe("obtenerUltimoDigito", () => {
  it("debería devolver el último dígito de un número", () => {
    // Arrange
    const numero = "1234478567595844938454";
    // Act
    const resultado = obtenerUltimoDigito(numero);
    // Assert
    expect(resultado).toBe(4);
  });
  it("deberia devolver un throw si la entrada es undefined", () => {
    //Arrange
    let numero: any = undefined;
    //Assert
    expect(() => obtenerUltimoDigito(numero)).toThrow();
  });
  it("deberia devolver un throw si la entrada es null", () => {
    //Arrange
    let numero: any = null;
    //Assert
    expect(() => obtenerUltimoDigito(numero)).toThrow();
  });
  it("deberia devolver un throw si la entrada es un string vacio", () => {
    //Arrange
    const numero = "";
    //Assert
    expect(() => obtenerUltimoDigito(numero)).toThrow();
  });
  it("deberia devolver un throw si la entrada no es un string", () => {
    //Arrange
    const numero: any = 1234;
    //Assert
    expect(() => obtenerUltimoDigito(numero)).toThrow();
  });
  it("deberia devolver un throw si la entrada es solo un digito", () => {
    //Arrange
    const numero = "1";
    //Assert
    expect(() => obtenerUltimoDigito(numero)).toThrow();
  });
  it("deberia devolver un throw si la entrada contiene letras", () => {
    //Arrange
    const numero = "123a";
    //Assert
    expect(() => obtenerUltimoDigito(numero)).toThrow();
  });
});

describe("multiplicaPorDosSaltandoUno", () => {
  it("debería multiplicar por dos los números en las posiciones impares de un número", () => {
    // Arrange
    const numero = "1234567891";
    // Act
    const resultado = multiplicaPorDosSaltandoUnDesdeElFinal(numero);
    // Assert
    expect(resultado).toEqual([1, 4, 3, 8, 5, 12, 7, 16, 9, 2]);
  });
  it("deberia devolver un throw si la entrada es undefined", () => {
    //Arrange
    let numero: any = undefined;
    //Assert
    expect(() => multiplicaPorDosSaltandoUnDesdeElFinal(numero)).toThrow();
  });
  it("deberia devolver un throw si la entrada es null", () => {
    //Arrange
    let numero: any = null;
    //Assert
    expect(() => multiplicaPorDosSaltandoUnDesdeElFinal(numero)).toThrow();
  });
  it("deberia devolver un throw si la entrada es algo que no sea un array de numeros", () => {
    //Arrange
    const numero: any = "1";
    //Assert
    expect(() => multiplicaPorDosSaltandoUnDesdeElFinal(numero)).toThrow();
  });
  it("deberia devolver un throw si la entrada es solo un digito", () => {
    //Arrange
    const numero = "1";
    //Assert
    expect(() => multiplicaPorDosSaltandoUnDesdeElFinal(numero)).toThrow();
  });
});

describe("sumaDigitosEnArrays", () => {
  it("debería sumar los dígitos de un número", () => {
    // Arrange
    const numero = [16, 12, 2];
    // Act
    const resultado = sumaDigitosEnArrays(numero);
    // Assert
    expect(resultado).toStrictEqual([7, 3, 2]);
  });
  it("deberia devolver un throw si la entrada es undefined", () => {
    //Arrange
    let numero: any = undefined;
    //Assert
    expect(() => sumaDigitosEnArrays(numero)).toThrow();
  });
  it("deberia devolver un throw si la entrada es null", () => {
    //Arrange
    let numero: any = null;
    //Assert
    expect(() => sumaDigitosEnArrays(numero)).toThrow();
  });
});

describe("sumaTotalDigitos", () => {
  it("debería sumar los dígitos de un número", () => {
    // Arrange
    const numero: any = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // Act
    const resultado = sumaTotalDigitos(numero);
    // Assert
    expect(resultado).toBe(45);
  });
  it("deberia devolver un throw si la entrada es undefined", () => {
    //Arrange
    let numero: any = undefined;
    //Assert
    expect(() => sumaTotalDigitos(numero)).toThrow();
  });
  it("deberia devolver un throw si la entrada es null", () => {
    //Arrange
    let numero: any = null;
    //Assert
    expect(() => sumaTotalDigitos(numero)).toThrow();
  });
  it("deberia devolver un throw si la entrada no es un array", () => {
    //Arrange
    let numero: any = "123";
    //Assert
    expect(() => sumaTotalDigitos(numero)).toThrow();
  });
});
