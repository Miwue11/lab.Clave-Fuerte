import { Cambio } from "./model";
import { __BILLETES, __MONEDAS } from "./constantes";

export const calcularMonedas = (resto: number, moneda: number): Cambio => {
  const cantidad = Math.floor(resto / moneda);
  if (cantidad > 0) {
    return { billetes: 0, monedas: moneda, cantidad };
  }
  return { billetes: 0, monedas: 0, cantidad: 0 };
};

export const calcularBilletes = (resto: number, billete: number): Cambio => {
  const cantidad = Math.floor(resto / billete);
  if (cantidad > 0) {
    return { billetes: billete, monedas: 0, cantidad };
  }
  return { billetes: 0, monedas: 0, cantidad: 0 };
};

export const programacionDefensiva = (compra: number, pago: number): void => {
  if (compra < 0 || pago < 0) {
    throw new Error("Los valores no pueden ser negativos");
  }
  if (compra > pago) {
    throw new Error("El pago no puede ser menor que la compra");
  }
};
