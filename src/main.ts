import { ValidacionClave, commonPasswords } from "./clave-solida";
import {
  comprobarValidaciones,
  recorrerValidaciones,
} from "./clave-solida/main.helper";

export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  const checkeoVal = comprobarValidaciones(
    nombreUsuario,
    clave,
    commonPasswords
  );
  return recorrerValidaciones(checkeoVal);
};

console.log(validarClave("usuario", "clavenovalida", commonPasswords));
console.log(validarClave("usuario", "posibleClave69!", commonPasswords));
