export const eliminaUltimoDigito = (numero: string): string => {
  if (numero === undefined || numero === null) {
    throw new Error("El número no puede ser null o undefined");
  }
  if (numero.length === 0) {
    throw new Error("El número no puede estar vacío");
  }
  if (typeof numero !== "string") {
    throw new Error("El número debe ser un string");
  }
  if (numero.length === 1) {
    throw new Error("El número no puede tener solo un dígito");
  }
  for (let i = 0; i < numero.length; i++) {
    if (isNaN(parseInt(numero[i]))) {
      throw new Error("El número no puede contener letras");
    }
  }
  return numero.slice(0, -1);
};

export const obtenerUltimoDigito = (numero: string): number => {
  if (numero === undefined || numero === null) {
    throw new Error("El número no puede ser null o undefined");
  }
  if (numero.length === 0) {
    throw new Error("El número no puede estar vacío");
  }
  if (typeof numero !== "string") {
    throw new Error("El número debe ser un string");
  }
  if (numero.length === 1) {
    throw new Error("El número no puede tener solo un dígito");
  }
  for (let i = 0; i < numero.length; i++) {
    if (isNaN(parseInt(numero[i]))) {
      throw new Error("El número no puede contener letras");
    }
  }
  return parseInt(numero.slice(-1));
};

export const multiplicaPorDosSaltandoUnDesdeElFinal = (
  numero: string
): number[] => {
  if (numero === undefined || numero === null) {
    throw new Error("El número no puede ser null o undefined");
  }
  if (numero.length === 0) {
    throw new Error("El número no puede estar vacío");
  }
  if (typeof numero !== "string") {
    throw new Error("El número debe ser un string");
  }
  if (numero.length === 1) {
    throw new Error("El número no puede tener solo un dígito");
  }
  for (let i = 0; i < numero.length; i++) {
    if (isNaN(parseInt(numero[i]))) {
      throw new Error("El número no puede contener letras");
    }
  }
  let resultado: number[] = [];
  let porDos = true;
  for (let i = numero.length - 1; i >= 0; i--) {
    const nuevoNumero = porDos ? parseInt(numero[i]) * 2 : parseInt(numero[i]);
    resultado = [nuevoNumero, ...resultado];
    porDos = !porDos;
  }
  return resultado;
};

const sumaDigitos = (numero: number): number => {
  if (numero === undefined || numero === null) {
    throw new Error("El número no puede ser null o undefined");
  }
  if (numero < 0) {
    throw new Error("El número no puede ser negativo");
  }
  if (isNaN(numero)) {
    throw new Error("El número no puede contener letras");
  }
  if (numero < 10) {
    return numero;
  }
  const unidades = numero % 10;
  const decenas = Math.floor(numero / 10);
  const suma = unidades + decenas;
  return suma;
};

export const sumaDigitosEnArrays = (numero: number[]): number[] => {
  if (numero === undefined || numero === null) {
    throw new Error("El número no puede ser null o undefined");
  }
  if (numero.length === 0) {
    throw new Error("El número no puede estar vacío");
  }
  for (let i = 0; i < numero.length; i++) {
    if (isNaN(parseInt(numero[i].toString()))) {
      throw new Error("El número no puede contener letras");
    }
  }
  return numero.map(sumaDigitos);
};

export const sumaTotalDigitos = (numero: number[]): number => {
  if (numero === undefined || numero === null) {
    throw new Error("El número no puede ser null o undefined");
  }
  if (numero.length === 0) {
    throw new Error("El número no puede estar vacío");
  }
  for (let i = 0; i < numero.length; i++) {
    if (isNaN(parseInt(numero[i].toString()))) {
      throw new Error("El número no puede contener letras");
    }
  }
  return numero.reduce(
    (acumulador, n) => acumulador + parseInt(n.toString()),
    0
  );
};

export const calculaFlagDeSumaTotal = (sumaTotal: number): number => {
  if (sumaTotal === undefined || sumaTotal === null || isNaN(sumaTotal)) {
    throw new Error("El número debe ser correcto");
  }
  return sumaTotal % 10 === 0 ? 0 : 10 - (sumaTotal % 10);
};
