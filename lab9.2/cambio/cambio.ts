import { Cambio } from "./model";
import { __BILLETES, __MONEDAS } from "./constantes";
import { calcularBilletes, programacionDefensiva } from "./cambio.helper";
import { calcularMonedas } from "./cambio.helper";

export const calcularCambio = (compra: number, pago: number): Cambio[] => {
  programacionDefensiva(compra, pago);
  let cambio: Cambio[] = [];
  let resto = pago - compra;
  for (let billete of __BILLETES) {
    const resultado = calcularBilletes(resto, billete);
    if (resultado.cantidad > 0) {
      cambio = [...cambio, resultado];
      resto = resto - resultado.cantidad * billete;
      resto = Math.round(resto * 100) / 100;
    }
  }
  for (let moneda of __MONEDAS) {
    const resultado = calcularMonedas(resto, moneda);
    if (resultado.cantidad > 0) {
      cambio = [...cambio, resultado];
      resto = resto - resultado.cantidad * moneda;
      resto = Math.round(resto * 100) / 100;
    }
  }

  return cambio;
};
