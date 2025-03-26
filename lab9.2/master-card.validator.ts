import {
  eliminaUltimoDigito,
  obtenerUltimoDigito,
  multiplicaPorDosSaltandoUnDesdeElFinal,
  sumaDigitosEnArrays,
  sumaTotalDigitos,
  calculaFlagDeSumaTotal,
} from "../lab9.2/master-card.helpers";

interface TarjetaMasterCard {
  numeroSinUltimoDigito: string;
  ultimoDigito: number;
}

const separaDigitoControl = (numero: string): TarjetaMasterCard => ({
  ultimoDigito: obtenerUltimoDigito(numero),
  numeroSinUltimoDigito: eliminaUltimoDigito(numero),
});

const tarjetaBuena = (numero: string): boolean => {
  if (!numero || numero.length !== 16 || isNaN(parseInt(numero))) {
    throw new Error("El número debe ser correcto");
  }
  return true;
};

const calculaFlagDeValidacion = (numeroSinUltimoDigito: string): number => {
  const digitosMultiplicados = multiplicaPorDosSaltandoUnDesdeElFinal(
    numeroSinUltimoDigito
  );
  const sumaDecenasUnidades = sumaDigitosEnArrays(digitosMultiplicados);
  const sumaTotal = sumaTotalDigitos(sumaDecenasUnidades);
  return calculaFlagDeSumaTotal(sumaTotal);
};

export const esValidaLaTarjetaMasterCard = (numero: string): boolean => {
  tarjetaBuena(numero);
  const { numeroSinUltimoDigito, ultimoDigito } = separaDigitoControl(numero);
  const flagControlCalculado = calculaFlagDeValidacion(numeroSinUltimoDigito);
  return flagControlCalculado === ultimoDigito;
};
console.log(esValidaLaTarjetaMasterCard("5500939178004613"));
console.log(esValidaLaTarjetaMasterCard("5500939178004614"));
